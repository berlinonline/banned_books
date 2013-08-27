<?php

/**
 * @copyright       BerlinOnline Stadtportal GmbH & Co. KG
 * @package         Common
 * @subpackage      Search
 */
class Common_Search_SearchInputView extends CommonBaseView
{
    public function executeHtml(AgaviRequestDataHolder $parameters)
    {
        $this->setupHtml($parameters);
        $this->setAttribute('query', $parameters->getParameter('query'));

        $routing = $this->getContext()->getRouting();

        $jsb_options = array(
            "suggest_url" => $routing->gen('common.searchsuggest')
        );
        $this->setAttribute('jsb_options', $jsb_options);
    }
}
