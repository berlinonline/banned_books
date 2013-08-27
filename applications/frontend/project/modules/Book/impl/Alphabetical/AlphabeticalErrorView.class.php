<?php

use Pulq\Agavi\View\BaseErrorView;

/**
 * @copyright       BerlinOnline Stadtportal GmbH & Co. KG
 * @package         Book
 * @subpackage      Alphabetical
 */
class Book_List_ListErrorView extends BookBaseView
{
    public function executeHtml(AgaviRequestDataHolder $parameters)
    {
        $this->setupHtml($parameters);
    }
}
