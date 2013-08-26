<?php

use \Pulq\Agavi\Action\BaseAction;

/**
 * The base action from which all Book actions inherit from.
 *
 * @copyright       BerlinOnline Stadtportal GmbH & Co. KG
 * @package         Book
 * @subpackage      Agavi/Action
 */
class BookBaseAction extends BaseAction
{
    public function isSecure()
    {
        return false;
    }
}
