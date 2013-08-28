<?php

use \Honeybee\Agavi\View\BaseView;

class Project_List_Migrations_List_MigrationsErrorView extends BaseView 
{
    public function executeConsole(AgaviRequestDataHolder $parameters) // @codingStandardsIgnoreEnd
    {
        $msg = 'An error occured while trying to list migrations.' . PHP_EOL;

        $this->getResponse()->setContent($msg);
    }
}
