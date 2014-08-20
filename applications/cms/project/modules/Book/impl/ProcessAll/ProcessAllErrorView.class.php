<?php

/**
 * @copyright       BerlinOnline Stadtportal GmbH & Co. KG
 * @package         Book
 * @subpackage      ProcessAll
 */
class Book_ProcessAll_ProcessAllErrorView extends BookBaseView
{
    public function executeHtml(\AgaviRequestDataHolder $request_data)
    {
        $this->setupHtml($request_data);
    }
}
