<?php

use Pulq\Data\BaseDataObject;
use Pulq\Data\DataObjectSet;

class Book extends BaseDataObject
{
    protected $title = "";
    protected $authors = array();
    protected $editions = array();
    protected $slug = "";
    protected $ss;

    protected function getArrayScopes() {
        return array(
            'list' => array(
                'title',
                'listText',
                'url',
            ),
            'detail' => array(
                'title',
                'authors',
                'editions',
                'ss',
                'url',
            )
        );
    }

    public function getUrl()
    {
        $routing = \AgaviContext::getInstance()->getRouting();

        return $routing->gen('book.detail', array('book' => $this->slug));
    }

    public function getListText() {
        return $this->title;
    }

    public function getAuthors() {
        return array_map(function($data) {
            $author = new Author($data);
            return $author->toArray('list');
        }, $this->authors);
    }

    public function getEditions() {
        return array_map(function($edition) {
            if ($edition['publisher']) {
                $publisher = new Publisher($edition['publisher']);
                $edition['publisher'] = $publisher->toArray('list');
            }
            return $edition;
        }, $this->editions);
    }
}
