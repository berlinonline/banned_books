<?php

use \Honeybee\Agavi\Action\BaseAction;
use \Honeybee\Core\Config\ArrayConfig;

class Project_MigrateAction extends BaseAction
{
    public function executeWrite(AgaviRequestDataHolder $request_data)
    {
        $migration_runner = new MigrationRunner(
            $this->getMigrationRunnerConfig()
        );

        $migration_runner->migrate(
            $request_data->getParameter('head'),
            $request_data->getParameter('direction')
        );

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
