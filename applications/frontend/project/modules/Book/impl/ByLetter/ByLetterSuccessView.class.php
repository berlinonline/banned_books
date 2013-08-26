<?php

/**
 * @copyright       BerlinOnline Stadtportal GmbH & Co. KG
 * @package         Book
 * @subpackage      ByLetter
 */
class Book_ByLetter_ByLetterSuccessView extends BookBaseView
{
    public function executeHtml(AgaviRequestDataHolder $parameters)
    {
        $this->setupHtml($parameters);

        $letter = $parameters->getParameter('letter');

        $this->setAttribute('_title', $letter);
        $this->setAttribute('letter', $letter);

        $book_service = new BookService();

        $all_letters = preg_split("//u", 'ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜ0123456789', -1, PREG_SPLIT_NO_EMPTY);
        $available_letters = $book_service->getStartingLetters();

        $routing = $this->getContext()->getRouting();

        $letter_links = array_map(function($letter) use ($available_letters, $routing) {
            if (in_array($letter, $available_letters))
            {
                return $routing->gen('book.byletter', array('letter' => $letter));
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

        $books = $book_service->getByStartingLetter($letter);
        $this->setAttribute('books', $books->toArrays('list'));
    }
}
