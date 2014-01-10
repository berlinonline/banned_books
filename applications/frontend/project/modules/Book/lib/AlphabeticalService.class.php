<?php

use Pulq\Services\BaseElasticSearchService;
use Pulq\Services\BaseService;
use Pulq\Exceptions\NotFoundException;
use Elastica\Query;
use Elastica\Filter;
use Elastica\Facet;

/**
 * @copyright BerlinOnline Stadtportal GmbH & Co. KG
 * @package Book
 */
class AlphabeticalService extends BaseElasticSearchService
{
    protected $es_index = 'Default.Read';
    protected $data_object_class = '';
    protected $es_type = '';
    protected $sort_field = '';

    protected $types = array(
        'book' => array(
            'es_type' => 'book',
            'data_object_class' => 'Book',
            'letter_field' => 'title.first',
            'sort_field' => 'title.raw'
        ),
        'author' => array(
            'es_type' => 'author',
            'data_object_class' => 'Author',
            'letter_field' => 'lastName.first',
            'sort_field' => 'lastName.raw'
        ),
        'publisher' => array(
            'es_type' => 'publisher',
            'data_object_class' => 'Publisher',
            'letter_field' => 'name.first',
            'sort_field' => 'name.raw'
        )
    );

    public function __construct($type) {
        if (isset($this->types[$type])) {
            $type = $this->types[$type];
        } else {
            throw new Exception('Unknown type for alphabetical queries');
        }

        $this->es_type = $type['es_type'];
        $this->data_object_class = $type['data_object_class'];
        $this->letter_field = $type['letter_field'];
        $this->sort_field = $type['sort_field'];

        parent::__construct();
    }

    public function getStartingLetters()
    {
        $query = Query::create(new Query\MatchAll());

        $title_facet = new Facet\Terms($this->es_type);
        $title_facet->setField($this->letter_field);
        $title_facet->setSize(100);
        $query->addFacet($title_facet);

        $resultData = $this->executeQuery($query);

        $facet_results = $resultData->getFacets();

        $results = $facet_results[$this->es_type]['terms'];

        $letters = array_unique(
            array_map(
                function($element) {
                    return strtoupper($element['term']);
                },
                $results
            )
        );

        return $letters;
    }

    public function getByStartingLetter($letter)
    {
        $filter = new Filter\Term(array($this->letter_field => $letter));
        $query = Query::create($filter);
        #echo json_encode($query->toArray());die();

        $query->setLimit(10000);
        $query->setSort(array($this->sort_field => array("order" => "asc")));

        $resultData = $this->executeQuery($query);

        return $this->extractFromResultSet($resultData);
    }
}
