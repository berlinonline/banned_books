<?php

use Pulq\Exceptions\NotFoundException;

class BookSlugValidator extends AgaviValidator
{
    protected function validate()
    {
        $data = $this->getData($this->getArgument());

        // if we already get a book object, just pass it on.
        if ($data instanceof Book)
        {
            $this->export($data, $this->getArgument());
            return TRUE;
        }

        $slug = $data;
        $book_service = new BookService();

        try
        {
            $book = $book_service->getBySlug($slug);
        }
        catch (NotFoundException $exception)
        {
            return FALSE;
        }

        $this->export($book, $this->getArgument());

        return TRUE;
    }

}
