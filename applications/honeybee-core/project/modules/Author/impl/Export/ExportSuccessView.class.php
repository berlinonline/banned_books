<?php

class Author_Export_ExportSuccessView extends AuthorBaseView
{
    public function executeConsole(\AgaviRequestDataHolder $request_data)
    {
        $this->getResponse()->setContent("Finished exporting Author documents.");
    }
}
