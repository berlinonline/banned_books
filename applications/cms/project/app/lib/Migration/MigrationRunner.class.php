<?php

use Honeybee\Core\Config\IConfig;

class MigrationRunner
{
    protected $config;

    protected $migrations;

    public function __construct(IConfig $config)
    {
        $this->config = $config;
        $this->migrations = $this->collectMigrations();
    }

    public function migrate($head, $direction)
    {
        $target_migrations = $this->getTargetMigrations($head);

        switch ($direction)
        {
            case 'up':
                $this->up($target_migrations);
                break;
            case 'down':
                $this->down($target_migrations);
                break;
        }
    }

    public function getMigrations($head = NULL, $direction = NULL)
    {
        return $this->migrations;
    }

    protected function up(array $migrations)
    {
        foreach ($migrations as $migration_info)
        {
            require_once $migration_info['file'];

            $migration = new $migration_info['class']();

            echo PHP_EOL . "--------" . PHP_EOL . "Running: " . PHP_EOL . $migration_info['class'] . " (UP) "
                . " - (" . $migration_info['short_description'] . ")"
                . ", created at: " . $migration->getTimestamp() . PHP_EOL
                . "------------" . PHP_EOL
                . "Description: " . PHP_EOL . $migration->getDescription() . PHP_EOL . PHP_EOL;

            $migration->up();
        }
    }

    protected function down(array $migrations)
    {
        foreach ($migrations as $migration_info)
        {
            require_once $migration_info['file'];
            $migration = new $migration_info['class'];

            echo PHP_EOL . "--------" . PHP_EOL . "Running: " . PHP_EOL . $migration_info['class'] . " (DOWN) "
                . " - (" . $migration_info['short_description'] . ")"
                . ", created at: " . $migration->getTimestamp() . PHP_EOL
                . "------------" . PHP_EOL
                . "Description: " . PHP_EOL . $migration->getDescription() . PHP_EOL . PHP_EOL;

            $migration->down();
        }
    }

    protected function collectMigrations()
    {
        $migration_path = $this->config->get('migration_path');
        $migration_files = glob(sprintf('%s/*_*.php', $migration_path));
        $migrations = array();

        foreach ($migration_files as $file)
        {
            $class_name_parts = explode('_', str_replace('.php', '', basename($file)));
            $timestamp = array_shift($class_name_parts);
            $class_name = 'Migration' . $timestamp;
            $migrations[] = array(
                'file' => $file,
                'class' => $class_name,
                'timestamp' => $timestamp,
                'short_description' => implode(" ", $class_name_parts)
            );
        }

        return $migrations;
    }

    protected function getTargetMigrations($head)
    {
        $target_migrations = array();

        $head_date = new DateTime($head);

        foreach ($this->migrations as $migration)
        {
            $migration_date = new DateTime($migration['timestamp']);

            if ($migration_date == $head_date)
            {
                // @todo atm we only support executing explicit versions, one at a time.
                // to change this in the future adjust the filter clause above.
                $target_migrations[] = $migration;
            }
        }

        return $target_migrations;
    }
}
