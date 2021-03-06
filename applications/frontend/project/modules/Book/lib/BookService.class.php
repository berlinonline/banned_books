<?php

use Pulq\Services\BaseElasticSearchService;
use Pulq\Services\BaseService;
use Pulq\Exceptions\NotFoundException;
use Elastica\Query;
use Elastica\Filter;
use Elastica\Facet;
use Elastica\Util;

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
        $query = new Query\Field('_id', Util::escapeTerm($id));

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
        $query = new Query\Field('slug.raw', Util::escapeTerm($slug));

        $resultData = $this->executeQuery(Query::create($query));

        $book_set = $this->extractFromResultSet($resultData);

        if ($book_set->getTotalCount() < 1)
        {
            throw new NotFoundException('book not found.');
        }

        return $book_set[0];
    }

    public function getByAuthor(Author $author) {
        $first_name_filter = new Filter\Term(array(
            'authors.firstName.raw' => $author->getFirstName(),
        ));
        $last_name_filter = new Filter\Term(array(
            'authors.lastName.raw' => $author->getLastName(),
        ));

        $filter = new Filter\Bool();
        $filter->addMust($first_name_filter);
        $filter->addMust($last_name_filter);

        $query = Query::create($filter);
#        echo json_encode($query->toArray());die();

        $query->setLimit(10000);

        $resultData = $this->executeQuery($query);

        return $this->extractFromResultSet($resultData);

    }

    public function getByPublisher(Publisher $publisher) {
        $filter = new Filter\Term(array(
            'editions.publisher.name.raw' => $publisher->getName(),
        ));
        $query = Query::create($filter);
        #echo json_encode($query->toArray());die();

        $query->setLimit(10000);

        $resultData = $this->executeQuery($query);

        return $this->extractFromResultSet($resultData);

    }
}
