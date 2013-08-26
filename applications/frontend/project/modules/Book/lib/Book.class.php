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
}
