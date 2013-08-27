<?php

use Pulq\Exceptions\NotFoundException;

class SlugValidator extends AgaviValidator
{
    protected function validate()
    {
        $data = $this->getData($this->getArgument());
        $service = $this->getParameter('service');

        // if we already get a item object, just pass it on.
        if ($data instanceof Pulq\Data\DataObject)
        {
            $this->export($data, $this->getArgument());
            return TRUE;
        }

        $slug = $data;
        $item_service = new $service();

        try
        {
            $item = $item_service->getBySlug($slug);
        }
        catch (NotFoundException $exception)
        {
            return FALSE;
        }

        $this->export($item, $this->getArgument());

        return TRUE;
    }

}
