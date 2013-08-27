<?php

use Pulq\Exceptions\NotFoundException;

class AuthorSlugValidator extends AgaviValidator
{
    protected function validate()
    {
        $data = $this->getData($this->getArgument());

        // if we already get a author object, just pass it on.
        if ($data instanceof author)
        {
            $this->export($data, $this->getArgument());
            return TRUE;
        }

        $slug = $data;
        $author_service = new AuthorService();

        try
        {
            $author = $author_service->getBySlug($slug);
        }
        catch (NotFoundException $exception)
        {
            return FALSE;
        }

        $this->export($author, $this->getArgument());

        return TRUE;
    }

}
