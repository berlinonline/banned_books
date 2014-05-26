<?php

use Pulq\Data\DataObject;
use Pulq\Data\DataObjectSet;

use Elastica\Util;

/**
 * @copyright       BerlinOnline Stadtportal GmbH & Co. KG
 * @package         Common
 * @subpackage      Search
 */
class Common_Search_SearchSuccessView extends CommonBaseView
{
    protected $query_string;

    public function executeHtml(AgaviRequestDataHolder $parameters)
    {
        $this->setupHtml($parameters);

        $this->query_string = $parameters->getParameter('query', '');

        $hits = array();

        if ($this->query_string)
        {
            $hits = $this->search($this->query_string);
        }

        if (isset($hits['book']))
        {
            $this->setAttribute('books', $hits['book']->toArrays('list'));
        }

        if (isset($hits['author']))
        {
            $this->setAttribute('authors', $hits['author']->toArrays('list'));
        }

        if (isset($hits['publisher']))
        {
            $this->setAttribute('publishers', $hits['publisher']->toArrays('list'));
        }

        $this->setAttribute('_title', 'Suche nach „'. $this->query_string .'‟');

        $this->setAttribute('query', $this->query_string);

        $this->getLayer('content')->setSlot('searchform', $this->createSlotContainer(
            'Common',
            'Search',
            $parameters->getParameters()
        ));
    }

    protected function search($query_string)
    {
        $es_client = $this->getContext()->getDatabaseManager()->getDatabase('Default.Read')->getConnection();

        $query = new Elastica\Query\FuzzyLikeThis();
        $query->addFields(array('_all'));
        $query->setPrefixLength(3);
        $query->setLikeText(Util::escapeTerm($query_string));
        $query->setMaxQueryTerms(5);

        $search = new Elastica\Search($es_client);

        foreach($this->getSearchIndexNames() as $index_name)
        {
            $search->addIndex($index_name);
        }

        $search->addType('book');
        $search->addType('author');
        $search->addType('publisher');

        $search->setQuery(Elastica\Query::create($query));

        $results = $search->search()->getResults();

        $hits_by_type = array();

        foreach ($results as &$result)
        {
            $data = $result->getData();
            $type = $result->getType();

            switch ($type)
            {
                case 'book':
                    $data_object = new Book($data);
                    break;
                case 'author':
                    $data_object = new Author($data);
                    break;
                case 'publisher':
                    $data_object = new Publisher($data);
                default: continue 2; //next result if this one does not match a type.
            }

            //ensure that the cotaining array exists
            if (!isset($hits_by_type[$type]))
            {
                $hits_by_type[$type] = array();
            }

            $hits_by_type[$type][] = $data_object;
        }

        $hit_objects_by_type = array();

        foreach ($hits_by_type as $hit_type => $hits)
        {
            $hit_objects_by_type[$hit_type] = new DataObjectSet($hits);
            $hit_objects_by_type[$hit_type]->setTotalCount(count($hits));
        }

        return $hit_objects_by_type;
    }
}
