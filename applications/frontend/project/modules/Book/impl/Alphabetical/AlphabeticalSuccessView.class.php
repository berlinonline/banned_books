<?php

/**
 * @copyright       BerlinOnline Stadtportal GmbH & Co. KG
 * @package         Book
 * @subpackage      Alphabetical
 */
class Book_Alphabetical_AlphabeticalSuccessView extends BookBaseView
{
    public function executeHtml(AgaviRequestDataHolder $parameters)
    {
        $this->setupHtml($parameters);

        $letter = $parameters->getParameter('letter');
        $type = $parameters->getParameter('type');
        $title = $parameters->getParameter('title');

        $this->setAttribute('_title', $title);
        $this->setAttribute('title', $title);
        $this->setAttribute('letter', $letter);

        $service = new AlphabeticalService($type);

        $all_letters = preg_split("//u", 'ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜ0123456789', -1, PREG_SPLIT_NO_EMPTY);
        $available_letters = $service->getStartingLetters();

        $routing = $this->getContext()->getRouting();

        $letter_links = array_map(function($letter) use ($available_letters, $routing) {
            if (in_array($letter, $available_letters))
            {
                return $routing->gen(null, array(
                    'letter' => $letter,
                ));
            }
            else
            {
                return null;
            }
        }, $all_letters);

        $this->setAttribute('letter_links', array_combine(
            $all_letters,
            $letter_links
        ));

        $items = $service->getByStartingLetter($letter);
        $this->setAttribute('items', $items->toArrays('list'));
    }
}
