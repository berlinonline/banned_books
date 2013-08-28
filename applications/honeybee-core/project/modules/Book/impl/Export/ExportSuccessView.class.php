<?php

class Book_Export_ExportSuccessView extends BookBaseView
{
    public function executeConsole(\AgaviRequestDataHolder $request_data)
    {
        $this->getResponse()->setContent("Finished exporting Book documents.");
    }
}
