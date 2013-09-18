<?php

use Honeybee\Core\Export;
use Honeybee\Core\Dat0r\Document;
use Honeybee\Domain\Category;

class BookExport extends Export\DocumentExport
{
    protected function buildExportData(Document $document)
    {
        $data = parent::buildExportData($document);

        $editions = array();
        foreach ($document->getEditions() as $edition) {
            $edition_data = array(
                'location' => $edition->getLocation(),
                'year' => $edition->getYear()
            );
            $publisher = $edition->getPublisher()->first();
            if ($publisher) {
                $edition_data['publisher'] = array(
                    'name' => $publisher->getName(),
                    'slug' => $publisher->getSlug()
                );
            } else {
                $edition_data['publisher'] = null;
            }
            $editions[] = $edition_data;
        }
        $data['editions'] = $editions;

        return $data;
    }
}
