<?php

use Pulq\Agavi\View\BaseView;

/**
 * The base view from which all Common views inherit from.
 *
 * @copyright       BerlinOnline Stadtportal GmbH & Co. KG
 * @package         Common
 * @subpackage      Agavi/View
 */
class CommonBaseView extends BaseView
{
    protected function getSearchIndexNames()
    {
        $database_names = array(
            'Default.Read',
        );
        $db_manager = $this->getContext()->getDatabaseManager();
        $databases = array_map(function($db_name) use ($db_manager) {
            return $db_manager->getDatabase($db_name);
        }, $database_names);

        $index_names = array_map(function($db) {
            $parameters = $db->getParameters();
            return $parameters['index']['name'];
        }, $databases);

        return $index_names;
    }
}
