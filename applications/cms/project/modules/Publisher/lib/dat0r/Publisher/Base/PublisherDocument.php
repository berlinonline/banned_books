<?php
/*              AUTOGENERATED CODE - DO NOT EDIT !
This base class was generated by the Dat0r library (https://github.com/berlinonline/Dat0r)
on 2014-01-13 15:07:11 and is closed to modifications by any meaning.
If you are looking for a place to alter the behaviour of 'Publisher' documents,
then the 'PublisherDocument' (skeleton) class probally might be a good place to look. */

namespace Honeybee\Domain\Publisher\Base;

use Honeybee\Core\Dat0r;

/**
 * Serves as the base class to the 'Publisher' document skeleton.
 */
abstract class PublisherDocument extends Dat0r\Document
{
    /**
     * Returns an 'Publisher' document's name.
     *
     * @return 
     */
    public function getName()
    {
        return $this->getValue('name');
    }

    /**
     * Sets an 'Publisher' document's name.
     *
     * @param  $name
     */
    public function setName($name)
    {
        $this->setValue('name', $name);
    }

    /**
     * Returns an 'Publisher' document's meta.
     *
     * @return 
     */
    public function getMeta()
    {
        return $this->getValue('meta');
    }

    /**
     * Sets an 'Publisher' document's meta.
     *
     * @param  $meta
     */
    public function setMeta($meta)
    {
        $this->setValue('meta', $meta);
    }

    /**
     * Returns an 'Publisher' document's workflowTicket.
     *
     * @return 
     */
    public function getWorkflowTicket()
    {
        return $this->getValue('workflowTicket');
    }

    /**
     * Sets an 'Publisher' document's workflowTicket.
     *
     * @param  $workflowTicket
     */
    public function setWorkflowTicket($workflowTicket)
    {
        $this->setValue('workflowTicket', $workflowTicket);
    }
}
