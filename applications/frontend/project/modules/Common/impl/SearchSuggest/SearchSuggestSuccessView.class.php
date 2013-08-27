<?php

use Elastica\Search;
use Elastica\Request;

/**
 * @copyright       BerlinOnline Stadtportal GmbH & Co. KG
 * @package         Common
 * @subpackage      SearchSuggest
 */
class Common_SearchSuggest_SearchSuggestSuccessView extends CommonBaseView
{
    public function executeJson(AgaviRequestDataHolder $parameters)
    {
        $database = $this->getContext()->getDatabaseManager()->getDatabase('Default.Read');
        $es_client = $database->getConnection();

        $query_string = $parameters->getParameter('q');

        $query_data = array(
            "size" => 0,
            "query" => array (
                "field" => array (
                    "suggest" => "$query_string"
                )
            ),
            "facets" => array(
                "suggest" => array (
                    "terms" => array (
                        "fields" => array("suggest.result"),
                        "size" => 10,
                        "script" => "term.toLowerCase().startsWith('$query_string'.toLowerCase())"
                    )
                )
            )
        );

        $search = new Search($es_client);
        foreach($this->getSearchIndexNames() as $index_name)
        {
            $search->addIndex($index_name);
        }

        $response = $es_client->request(
            $search->getPath(),
            Request::POST,
            $query_data
        );

        $response_data = $response->getData();
        $suggest_terms = $response_data['facets']['suggest']['terms'];

        #var_dump($suggest_terms);die();

        usort($suggest_terms, function($a, $b) use ($suggest_terms) {
            return $a['count'] > $b['count'];
        });

        $suggestions = array_map(function($term) {
            return $term['term'];
        }, $suggest_terms);

        return json_encode($suggestions);
    }
}

