<?php
/*              AUTOGENERATED CODE - DO NOT EDIT !
This base class was generated by the Dat0r library (https://github.com/berlinonline/Dat0r) 
on 2013-05-16 18:35:15 and is closed to modifications by any meaning.
If you are looking for a place to alter the behaviour of 'WorkflowTicket' documents,
then the 'WorkflowTicketDocument' (skeleton) class probally might be a good place to look. */

namespace Honeybee\Domain\Book\Base;

/**
 * Serves as the base class to the 'WorkflowTicket' document skeleton.
 */
abstract class WorkflowTicketDocument extends \Honeybee\Core\Dat0r\WorkflowTicket
{ 
    /**
     * Returns an 'WorkflowTicket' document's workflowName.
     *
     * @return string
     */
    public function getWorkflowname()
    {
        return $this->getValue('workflowName');
    }

    /**
     * Sets an 'WorkflowTicket' document's workflowName.
     *
     * @param string $workflowName
     */
    public function setWorkflowname($workflowName)
    {
        $this->setValue('workflowName', $workflowName);
    }

    /**
     * Returns an 'WorkflowTicket' document's workflowStep.
     *
     * @return string
     */
    public function getWorkflowstep()
    {
        return $this->getValue('workflowStep');
    }

    /**
     * Sets an 'WorkflowTicket' document's workflowStep.
     *
     * @param string $workflowStep
     */
    public function setWorkflowstep($workflowStep)
    {
        $this->setValue('workflowStep', $workflowStep);
    }

    /**
     * Returns an 'WorkflowTicket' document's owner.
     *
     * @return string
     */
    public function getOwner()
    {
        return $this->getValue('owner');
    }

    /**
     * Sets an 'WorkflowTicket' document's owner.
     *
     * @param string $owner
     */
    public function setOwner($owner)
    {
        $this->setValue('owner', $owner);
    }

    /**
     * Returns an 'WorkflowTicket' document's blocked.
     *
     * @return boolean
     */
    public function getBlocked()
    {
        return $this->getValue('blocked');
    }

    /**
     * Sets an 'WorkflowTicket' document's blocked.
     *
     * @param boolean $blocked
     */
    public function setBlocked($blocked)
    {
        $this->setValue('blocked', $blocked);
    }

    /**
     * Returns an 'WorkflowTicket' document's stepCounts.
     *
     * @return array
     */
    public function getStepcounts()
    {
        return $this->getValue('stepCounts');
    }

    /**
     * Sets an 'WorkflowTicket' document's stepCounts.
     *
     * @param array $stepCounts
     */
    public function setStepcounts($stepCounts)
    {
        $this->setValue('stepCounts', $stepCounts);
    }

    /**
     * Returns an 'WorkflowTicket' document's waitUntil.
     *
     * @return string
     */
    public function getWaituntil()
    {
        return $this->getValue('waitUntil');
    }

    /**
     * Sets an 'WorkflowTicket' document's waitUntil.
     *
     * @param string $waitUntil
     */
    public function setWaituntil($waitUntil)
    {
        $this->setValue('waitUntil', $waitUntil);
    }

    /**
     * Returns an 'WorkflowTicket' document's lastResult.
     *
     * @return PluginResultModule
     */
    public function getLastresult()
    {
        return $this->getValue('lastResult');
    }

    /**
     * Sets an 'WorkflowTicket' document's lastResult.
     *
     * @param PluginResultModule $lastResult
     */
    public function setLastresult($lastResult)
    {
        $this->setValue('lastResult', $lastResult);
    }
}
