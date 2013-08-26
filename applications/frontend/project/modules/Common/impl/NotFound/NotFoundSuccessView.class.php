<?php

/**
 * @copyright       BerlinOnline Stadtportal GmbH & Co. KG
 * @package         Common
 * @subpackage      NotFound
 */
class Common_NotFound_NotFoundSuccessView extends CommonBaseView
{
    public function executeHtml(AgaviRequestDataHolder $parameters)
    {
        $this->setupHtml($parameters);
        $this->container->getResponse()->setHttpStatusCode($this->getAttribute('status', 404));
    }
}
