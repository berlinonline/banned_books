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
class BookService extends BaseElasticSearchService
{
    protected $es_index = 'Default.Read';
    protected $data_object_class = "Book";
    protected $es_type = 'book';

    public function getById($id)
    {
        $query = new Query\Field('_id', $id);
        $resultData = $this->executeQuery(Query::create($query));

        $book_set = $this->extractFromResultSet($resultData);

        if ($book_set->getTotalCount() < 1)
        {
            throw new NotFoundException('book not found.');
        }

        return $book_set[0];
    }


    public function getBySlug($slug)
    {
        $query = new Query\Field('slug.raw', $slug);

        $resultData = $this->executeQuery(Query::create($query));

        $book_set = $this->extractFromResultSet($resultData);

        if ($book_set->getTotalCount() < 1)
        {
            throw new NotFoundException('book not found.');
        }

        return $book_set[0];
    }

    public function getStartingLetters()
    {
        $query = Query::create(new Query\MatchAll());

        $title_facet = new Facet\Terms('title');
        $title_facet->setField('title.raw');
        $title_facet->setScript("term != '' ? term[0] : term");
        $query->addFacet($title_facet);

        $resultData = $this->executeQuery($query);

        $facet_results = $resultData->getFacets();

        $results = $facet_results['title']['terms'];

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
        $filter = new Filter\Term(array('title.first' => $letter));
        #echo json_encode($query->toArray());die();
        $query = Query::create($filter);

        $query->setLimit(10000);

        $resultData = $this->executeQuery($query);

        return $this->extractFromResultSet($resultData);
    }
}
