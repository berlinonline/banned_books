<?php

/**
 * @copyright       BerlinOnline Stadtportal GmbH & Co. KG
 * @package         Book
 * @subpackage      PublisherDetail
 */
class Book_PublisherDetail_PublisherDetailSuccessView extends BookBaseView
{
    public function executeHtml(AgaviRequestDataHolder $parameters)
    {
        $this->setupHtml($parameters);

        $publisher = $parameters->getParameter('publisher');

        $this->setAttribute('_title', $publisher->getName());

        $this->setAttribute('publisher', $publisher->toArray('detail'));
    }
}
