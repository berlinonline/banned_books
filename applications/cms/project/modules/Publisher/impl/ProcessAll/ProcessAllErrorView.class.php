<?php

/**
 * @copyright       BerlinOnline Stadtportal GmbH & Co. KG
 * @package         Publisher
 * @subpackage      ProcessAll
 */
class Publisher_ProcessAll_ProcessAllErrorView extends PublisherBaseView
{
    public function executeConsole(\AgaviRequestDataHolder $request_data)
    {   
        $content = PHP_EOL . 'Error occurred while processing documents. Documents could result partially processed.');
        $this->getResponse()->setContent(PHP_EOL . $content . PHP_EOL);
    }
}
