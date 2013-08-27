<?php

use Pulq\Data\BaseDataObject;
use Pulq\Data\DataObjectSet;

class Publisher extends BaseDataObject
{
    protected $name = "";
    protected $slug = "";

    protected function getArrayScopes() {
        return array(
            'list' => array(
                'name',
                'listText',
                'url',
            ),
            'detail' => array(
                'name',
                'listText',
                'url',
                'books'
            )
        );
    }

    public function getUrl()
    {
        $routing = \AgaviContext::getInstance()->getRouting();

        return $routing->gen('publisher.detail', array('publisher' => $this->slug));
    }

    public function getListText()
    {
        return $this->name;
    }

    public function getBooks() {
        $book_service = new BookService();
        $books = $book_service->getByPublisher($this);

        return $books->toArrays('list');
    }
}
