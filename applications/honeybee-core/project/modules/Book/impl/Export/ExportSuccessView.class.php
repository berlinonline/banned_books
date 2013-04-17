<?php

class Book_Export_ExportSuccessView extends BookBaseView
{
    public function executeText(AgaviRequestDataHolder $parameters)
    {
        $this->getResponse()->setContent("Finished exporting ur Book documents.");
    }
}
