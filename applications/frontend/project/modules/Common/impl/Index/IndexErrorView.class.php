<?php

use Pulq\Agavi\View\BaseErrorView;

/**
 * @copyright       BerlinOnline Stadtportal GmbH & Co. KG
 * @package         Common
 * @subpackage      Index
 */
class Common_List_ListErrorView extends CommonBaseView
{
    public function executeHtml(AgaviRequestDataHolder $parameters)
    {
        $this->setupHtml($parameters);
    }
}
