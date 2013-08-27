<?php

/**
 * @copyright       BerlinOnline Stadtportal GmbH & Co. KG
 * @package         Book
 * @subpackage      AuthorDetail
 */
class Book_AuthorDetail_AuthorDetailSuccessView extends BookBaseView
{
    public function executeHtml(AgaviRequestDataHolder $parameters)
    {
        $this->setupHtml($parameters);

        $author = $parameters->getParameter('author');

        $this->setAttribute('author', $author->toArray('detail'));
    }
}
