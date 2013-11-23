<?php

use \Honeybee\Agavi\Action\BaseAction;
use \Honeybee\Core\Config\ArrayConfig;

class Project_List_MigrationsAction extends BaseAction
{
    public function executeRead(AgaviRequestDataHolder $request_data)
    {
        $migration_runner = new MigrationRunner(
            $this->getMigrationRunnerConfig()
        );

        $this->setAttribute('migrations', $migration_runner->getMigrations());

        return 'Success';
    }

    public function isSecure()
    {
        return false;
    }

    protected function getMigrationRunnerConfig()
    {
        return new ArrayConfig(
            array(
                'migration_path' => realpath(
                    AgaviConfig::get('project.migration_dir')
                )
            )
        );
    }
}
