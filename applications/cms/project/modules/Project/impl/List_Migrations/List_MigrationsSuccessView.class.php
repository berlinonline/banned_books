<?php

use \Honeybee\Agavi\View\BaseView;

class Project_List_Migrations_List_MigrationsSuccessView extends BaseView
{
    public function executeConsole(AgaviRequestDataHolder $parameters) // @codingStandardsIgnoreEnd
    {
        $response = PHP_EOL . "--------------------" . PHP_EOL;
        $response .= "Available Migrations" . PHP_EOL;
        $response .= "--------------------" . PHP_EOL . PHP_EOL;

        foreach ($this->getAttribute('migrations') as $migration_info)
        {
            require_once $migration_info['file'];
            $migration = new $migration_info['class'];

            $response .= $migration_info['class'] . PHP_EOL
                . "- desctructive: " . ($migration->isDestructive() ? 'yes' : 'no') . PHP_EOL
                . "- short desc: " . $migration_info['short_description'] . " " . PHP_EOL
                . "- created at: " . $migration->getTimestamp() . PHP_EOL
                . "- description: " . PHP_EOL . $migration->getDescription() . PHP_EOL . PHP_EOL;
        }

        $this->getResponse()->setContent($response);
    }
}
