<?php

use \Honeybee\Agavi\View\BaseView;

class Project_Migrate_MigrateSuccessView extends BaseView 
{
    public function executeConsole(AgaviRequestDataHolder $parameters) // @codingStandardsIgnoreEnd
    {
        $msg = 'Migrations successfully executed.' . PHP_EOL;

        $this->getResponse()->setContent($msg);
    }
}
