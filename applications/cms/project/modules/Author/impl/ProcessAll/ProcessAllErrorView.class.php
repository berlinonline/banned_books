<?php

/**
 * @copyright       BerlinOnline Stadtportal GmbH & Co. KG
 * @package         Author
 * @subpackage      ProcessAll
 */
class Author_ProcessAll_ProcessAllErrorView extends AuthorBaseView
{
    public function executeConsole(\AgaviRequestDataHolder $request_data)
    {   
        $content = PHP_EOL . 'Error occurred while processing documents. Documents could result partially processed.');
        $this->getResponse()->setContent(PHP_EOL . $content . PHP_EOL);
    }
}
