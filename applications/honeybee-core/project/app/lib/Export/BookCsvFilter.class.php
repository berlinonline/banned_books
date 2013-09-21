<?php

use Honeybee\Core\Export\Filter\BaseFilter;
use Honeybee\Core\Dat0r\BaseDocument;
use Honeybee\Domain\Book\BookDocument;

class BookCsvFilter extends BaseFilter
{
    public function execute(BaseDocument $document)
    {
        if (!$document instanceof BookDocument) {
            throw new \Exception("Only BookDocument's supported by this class.");
        }

        $author_firstname = '';
        $author_lastname = '';
        $author = $document->getAuthor()->first();
        if ($author){
            $author_firstname = $author->getFirstname();
            $author_lastname = $author->getLastname();
        }

        $edition_one = array('publisher' => '', 'year' => '', 'location' => '');
        $edition_two = array('publisher' => '', 'year' => '', 'location' => '');
        $editions = $document->getEditions();
        if ($editions->count() > 0) {
            $edition_one['year'] = $editions[0]->getYear();
            $edition_one['location'] = $editions[0]->getLocation();
            $publisher = $editions[0]->getPublisher()->first();
            if ($publisher) {
                $edition_one['publisher'] = $publisher->getName();
            }
        }
        if ($editions->count() > 1) {
            $edition_two['year'] = $editions[1]->getYear();
            $edition_two['location'] = $editions[1]->getLocation();
            $publisher = $editions[1]->getPublisher()->first();
            if ($publisher) {
                $edition_two['publisher'] = $publisher->getName();
            }
        }

        return array(
            'uid' => $document->getIdentifier(),
            'title' => $document->getTitle(),
            'author_firstname' => $author_firstname,
            'author_lastname' => $author_lastname,
            'ss' => $document->getSsFlag(),
            'infos' => $document->getAdditionalInfos(),
            'page' => $document->getPageNumber(),
            'publisher_one' => $edition_one['publisher'],
            'location_one' => $edition_one['location'],
            'year_one' => $edition_one['year'],
            'publisher_two' => $edition_two['publisher'],
            'location_two' => $edition_two['location'],
            'year_two' => $edition_two['year']
        );
    }
}
