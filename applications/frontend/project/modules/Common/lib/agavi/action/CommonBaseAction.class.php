<?php

use \Pulq\Agavi\Action\BaseAction;

/**
 * The base action from which all Common actions inherit from.
 *
 * @copyright       BerlinOnline Stadtportal GmbH & Co. KG
 * @package         Common
 * @subpackage      Agavi/Action
 */
class CommonBaseAction extends BaseAction
{
    public function isSecure()
    {
        return false;
    }
}
