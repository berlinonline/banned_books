<?php

/**
 * @copyright       BerlinOnline Stadtportal GmbH & Co. KG
 * @package         Common
 * @subpackage      Header
 */
class Common_Header_HeaderSuccessView extends CommonBaseView
{
    public function executeHtml(AgaviRequestDataHolder $parameters)
    {
        $this->setupHtml($parameters);

        $this->getLayer('content')->setSlot('searchform', $this->createSlotContainer(
            'Common',
            'Search',
            $parameters->getParameters()
        ));
    }
}
