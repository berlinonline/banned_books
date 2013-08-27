<?php

use Pulq\Data\BaseDataObject;
use Pulq\Data\DataObjectSet;

class Author extends BaseDataObject
{
    protected $firstName = "";
    protected $lastName = "";
    protected $slug = "";

    protected function getArrayScopes() {
        return array(
            'list' => array(
                'firstName',
                'lastName',
                'listText',
                'fullName',
                'url',
            ),
            'detail' => array(
                'firstName',
                'lastName',
                'fullName',
                'url',
                'books'
            )
        );
    }

    public function getUrl()
    {
        $routing = \AgaviContext::getInstance()->getRouting();

        return $routing->gen('author.detail', array('author' => $this->slug));
    }

    public function getListText()
    {
        return $this->lastName.', '.$this->firstName;
    }

    public function getBooks() {
        $book_service = new BookService();
        $books = $book_service->getByAuthor($this);

        return $books->toArrays('list');
    }

    public function getFullName() {
        return $this->firstName.' '.$this->lastName;
    }
}
