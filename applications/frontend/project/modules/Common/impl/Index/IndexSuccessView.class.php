<?php

/**
 * @copyright       BerlinOnline Stadtportal GmbH & Co. KG
 * @package         Common
 * @subpackage      Index
 */
class Common_Index_IndexSuccessView extends CommonBaseView
{
    public function executeHtml(AgaviRequestDataHolder $parameters)
    {
        $this->setAttribute('_title', 'Startseite');

        $this->setupHtml($parameters);
    }
}
