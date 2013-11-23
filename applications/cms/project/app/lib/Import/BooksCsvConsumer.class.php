<?php

use Honeybee\Core\Import\Consumer\ModuleConsumer;
use Honeybee\Domain\Author\AuthorModule;
use Honeybee\Domain\Publisher\PublisherModule;

class BooksCsvConsumer extends ModuleConsumer
{
    protected $author_module;

    protected $publisher_module;

    protected $author_map;

    protected $publisher_map;

    public function initialize(array $parameters = array())
    {
        parent::initialize($parameters);

        $this->author_module = AuthorModule::getInstance();
        $this->publisher_module = PublisherModule::getInstance();
        $this->author_map = array();
        $this->publisher_map = array();
    }

    protected function executeFilters(array $item)
    {
        $data = parent::executeFilters($item);

        $this->mapAuthorReference($data);
        $this->mapPublisherReferences($data);

        return $data;
    }

    protected function mapAuthorReference(array &$data)
    {
        $author_data = array();
        if (isset($data['author']['firstname']) && isset($data['author']['lastname'])) {
            $firstname = trim($data['author']['firstname']);
            $lastname = trim($data['author']['lastname']);

            if (!empty($firstname) && !empty($lastname)) {
                $author_key = md5(strtolower($firstname).strtolower($lastname));
                $author = isset($this->author_map[$author_key]) ? $this->author_map[$author_key] : null;

                if (!$author) {
                    $author_service = $this->author_module->getService();
                    $author_filter = array('firstname.filter' => $firstname, 'lastname.filter' => $lastname);
                    $search_result = $author_service->find(array('filter' => $author_filter), 0, 1);

                    if ($search_result['totalCount'] > 0) {
                        $author = $search_result['documents']->first();
                    } else {
                        $author = $this->author_module->createDocument(
                            array('firstname' => $firstname, 'lastname' => $lastname)
                        );
                        $author_service->save($author);
                    }
                    $this->author_map[$author_key] = $author;
                }

                $author_reference = array(
                    'module' => $this->author_module->getOption('prefix'),
                    'id' => $author->getIdentifier()
                );
                $author_data = array($author_reference);
            }
        }
        $data['author'] = $author_data;
    }

    protected function mapPublisherReferences(array &$data)
    {
        if (isset($data['editions']) && is_array($data['editions'])) {
            foreach ($data['editions'] as &$edition) {
                $publisher_data = array();
                $name = isset($edition['publisher']) ? trim($edition['publisher']) : null;
                if (!empty($name)) {
                    $publisher_key = strtolower($name);
                    $publisher = isset($this->publisher_map[$publisher_key])
                        ? $this->publisher_map[$publisher_key]
                        : null;

                    if (!$publisher) {
                        $publisher_service = $this->publisher_module->getService();
                        $publisher_filter = array('name.filter' => $name);
                        $search_result = $publisher_service->find(array('filter' => $publisher_filter), 0, 1);

                        if ($search_result['totalCount'] > 0) {
                            $publisher = $search_result['documents']->first();
                        } else {
                            $publisher = $this->publisher_module->createDocument(array('name' => $name));
                            $publisher_service->save($publisher);
                        }
                        $this->publisher_map[$publisher_key] = $publisher;
                    }
                    $publisher_reference = array(
                        'module' => $this->publisher_module->getOption('prefix'),
                        'id' => $publisher->getIdentifier()
                    );
                    $publisher_data = array($publisher_reference);
                }
                $edition['publisher'] = $publisher_data;
            }
        }
    }
}
