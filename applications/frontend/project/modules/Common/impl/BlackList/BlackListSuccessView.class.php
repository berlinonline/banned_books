<?php

/**
 * @copyright       BerlinOnline Stadtportal GmbH & Co. KG
 * @package         Common
 * @subpackage      BlackList
 */
class Common_BlackList_BlackListSuccessView extends CommonBaseView
{
    public function executeHtml(AgaviRequestDataHolder $parameters)
    {
        $this->setupHtml($parameters);
        $this->setAttribute('_title', 'Die schwarze Liste');
    }
}
