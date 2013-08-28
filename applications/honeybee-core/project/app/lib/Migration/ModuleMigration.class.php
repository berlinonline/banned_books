<?php

use Honeybee\Core\Dat0r\ModuleFactory;
use Honeybee\Core\Dat0r\Module;

abstract class ModuleMigration implements IMigration
{
    protected $module;

    abstract protected function getModuleClass();

    public function __construct()
    {
        $module_class = $this->getModuleClass();
        $this->module = call_user_func(array($module_class, 'getInstance'));
    }

    public function getTimestamp()
    {
        $class_name = get_class($this);

        return str_replace('Migration', '', $class_name);
    }

    public function getModule()
    {
        return $this->module;
    }

    public function isDestructive()
    {
        return true;
    }

    protected function proccessAllDocuments(Closure $callback)
    {
        $couch_db_client = $this->getConnection('Write');
        $result = $couch_db_client->getAllDocs(null, array('include_docs' => true));
        $document_type = $this->module->getDocumentType();

        foreach ($result['rows'] as $row)
        {
            $document = $row['doc'];
            if (isset($document['type']) && $document['type']{0} !== '\\')
            {
                $document['type'] = '\\'.$document['type'];
            }
            else if (!isset($document['type']))
            {
                continue;
            }

            if ($document['type'] === $document_type)
            {
                $callback($document);
            }
        }
    }

    protected function getConnection($access_type, Module $module = null)
    {
        return AgaviContext::getInstance()->getDatabaseConnection(
            ModuleFactory::getConnectionName($module ? $module : $this->module, $access_type)
        );
    }
}
