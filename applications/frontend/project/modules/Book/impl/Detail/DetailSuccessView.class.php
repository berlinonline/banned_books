<?php


/**
 * @copyright       BerlinOnline Stadtportal GmbH & Co. KG
 * @package         Book
 * @subpackage      Detail
 */
class Book_Detail_DetailSuccessView extends BookBaseView
{
    public function executeHtml(AgaviRequestDataHolder $parameters)
    {
        $this->setupHtml($parameters);

        $book = $parameters->getParameter('book');

        $this->setAttribute('_title', $book->getTitle());

        $this->setAttribute('book', $book->toArray('detail'));
    }
}
