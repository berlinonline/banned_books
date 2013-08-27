<?php

/**
 * @copyright       BerlinOnline Stadtportal GmbH & Co. KG
 * @package         Common
 * @subpackage      Search
 */
class Common_SearchAction extends CommonBaseAction
{
    public function executeRead(AgaviRequestDataHolder $parameters)
    {
        if ($this->getContainer()->getParameter('is_slot'))
        {
            return 'Input';
        }

        return 'Success';
    }
}
