<?php

class Publisher_Export_ExportSuccessView extends PublisherBaseView
{
    public function executeConsole(\AgaviRequestDataHolder $request_data)
    {
        $this->getResponse()->setContent("Finished exporting Publisher documents.");
    }
}
