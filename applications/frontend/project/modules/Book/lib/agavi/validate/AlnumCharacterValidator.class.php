<?php

use Pulq\Exceptions\NotFoundException;

class AlnumCharacterValidator extends AgaviValidator
{
    protected function validate()
    {
        $data = $this->getData($this->getArgument());

        if (preg_match('/^[A-z0-9ÄÖÜäöüß]$/u', $data)) {
            $this->export($data, $this->getArgument());

            return true;
        }

        return false;
    }

}
