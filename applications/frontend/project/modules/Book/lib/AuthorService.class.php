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
class AuthorService extends BaseElasticSearchService
{
    protected $es_index = 'Default.Read';
    protected $data_object_class = "Author";
    protected $es_type = 'author';

    public function getById($id)
    {
        $query = new Query\Field('_id', Util::escapeTerm($id));
        $resultData = $this->executeQuery(Query::create($query));

        $author_set = $this->extractFromResultSet($resultData);

        if ($author_set->getTotalCount() < 1)
        {
            throw new NotFoundException('author not found.');
        }

        return $author_set[0];
    }


    public function getBySlug($slug)
    {
        $query = new Query\Field('slug.raw', Util::escapeTerm($slug));

        #echo json_encode(Query::create($query)->toArray());die;
        $resultData = $this->executeQuery(Query::create($query));

        $author_set = $this->extractFromResultSet($resultData);

        if ($author_set->getTotalCount() < 1)
        {
            throw new NotFoundException('author not found.');
        }

        return $author_set[0];
    }
}
