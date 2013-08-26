<?php

/**
 * @copyright       BerlinOnline Stadtportal GmbH & Co. KG
 * @package         Common
 * @subpackage      NotFound
 */
class Common_NotFoundAction extends CommonBaseAction
{
    public function executeRead(AgaviRequestDataHolder $parameters)
    {
        return 'Success';
    }
}
