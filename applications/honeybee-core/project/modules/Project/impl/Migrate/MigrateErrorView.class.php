<?php

use \Honeybee\Agavi\View\BaseView;

class Project_Migrate_MigrateErrorView extends BaseView 
{
    public function executeConsole(AgaviRequestDataHolder $parameters) // @codingStandardsIgnoreEnd
    {
        $msg = 'An error occured while trying to execute migrations.' . PHP_EOL;

        $this->getResponse()->setContent($msg);
    }
}
