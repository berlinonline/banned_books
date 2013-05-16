<?php
/*              AUTOGENERATED CODE - DO NOT EDIT !
This base class was generated by the Dat0r library (https://github.com/berlinonline/Dat0r) 
on 2013-05-16 18:35:15 and is closed to modifications by any meaning.
If you are looking for a place to alter the behaviour of 'Book' documents,
then the 'BookDocument' (skeleton) class probally might be a good place to look. */

namespace Honeybee\Domain\Book\Base;

/**
 * Serves as the base class to the 'Book' document skeleton.
 */
abstract class BookDocument extends \Honeybee\Core\Dat0r\Document
{ 
    /**
     * Returns an 'Book' document's title.
     *
     * @return string
     */
    public function getTitle()
    {
        return $this->getValue('title');
    }

    /**
     * Sets an 'Book' document's title.
     *
     * @param string $title
     */
    public function setTitle($title)
    {
        $this->setValue('title', $title);
    }

    /**
     * Returns an 'Book' document's ssFlag.
     *
     * @return boolean
     */
    public function getSsflag()
    {
        return $this->getValue('ssFlag');
    }

    /**
     * Sets an 'Book' document's ssFlag.
     *
     * @param boolean $ssFlag
     */
    public function setSsflag($ssFlag)
    {
        $this->setValue('ssFlag', $ssFlag);
    }

    /**
     * Returns an 'Book' document's authorFirstname.
     *
     * @return string
     */
    public function getAuthorfirstname()
    {
        return $this->getValue('authorFirstname');
    }

    /**
     * Sets an 'Book' document's authorFirstname.
     *
     * @param string $authorFirstname
     */
    public function setAuthorfirstname($authorFirstname)
    {
        $this->setValue('authorFirstname', $authorFirstname);
    }

    /**
     * Returns an 'Book' document's authorLastname.
     *
     * @return string
     */
    public function getAuthorlastname()
    {
        return $this->getValue('authorLastname');
    }

    /**
     * Sets an 'Book' document's authorLastname.
     *
     * @param string $authorLastname
     */
    public function setAuthorlastname($authorLastname)
    {
        $this->setValue('authorLastname', $authorLastname);
    }

    /**
     * Returns an 'Book' document's publisherOne.
     *
     * @return string
     */
    public function getPublisherone()
    {
        return $this->getValue('publisherOne');
    }

    /**
     * Sets an 'Book' document's publisherOne.
     *
     * @param string $publisherOne
     */
    public function setPublisherone($publisherOne)
    {
        $this->setValue('publisherOne', $publisherOne);
    }

    /**
     * Returns an 'Book' document's yearOne.
     *
     * @return string
     */
    public function getYearone()
    {
        return $this->getValue('yearOne');
    }

    /**
     * Sets an 'Book' document's yearOne.
     *
     * @param string $yearOne
     */
    public function setYearone($yearOne)
    {
        $this->setValue('yearOne', $yearOne);
    }

    /**
     * Returns an 'Book' document's placeOne.
     *
     * @return string
     */
    public function getPlaceone()
    {
        return $this->getValue('placeOne');
    }

    /**
     * Sets an 'Book' document's placeOne.
     *
     * @param string $placeOne
     */
    public function setPlaceone($placeOne)
    {
        $this->setValue('placeOne', $placeOne);
    }

    /**
     * Returns an 'Book' document's publisherTwo.
     *
     * @return string
     */
    public function getPublishertwo()
    {
        return $this->getValue('publisherTwo');
    }

    /**
     * Sets an 'Book' document's publisherTwo.
     *
     * @param string $publisherTwo
     */
    public function setPublishertwo($publisherTwo)
    {
        $this->setValue('publisherTwo', $publisherTwo);
    }

    /**
     * Returns an 'Book' document's yearTwo.
     *
     * @return string
     */
    public function getYeartwo()
    {
        return $this->getValue('yearTwo');
    }

    /**
     * Sets an 'Book' document's yearTwo.
     *
     * @param string $yearTwo
     */
    public function setYeartwo($yearTwo)
    {
        $this->setValue('yearTwo', $yearTwo);
    }

    /**
     * Returns an 'Book' document's placeTwo.
     *
     * @return string
     */
    public function getPlacetwo()
    {
        return $this->getValue('placeTwo');
    }

    /**
     * Sets an 'Book' document's placeTwo.
     *
     * @param string $placeTwo
     */
    public function setPlacetwo($placeTwo)
    {
        $this->setValue('placeTwo', $placeTwo);
    }

    /**
     * Returns an 'Book' document's additionalInfos.
     *
     * @return string
     */
    public function getAdditionalinfos()
    {
        return $this->getValue('additionalInfos');
    }

    /**
     * Sets an 'Book' document's additionalInfos.
     *
     * @param string $additionalInfos
     */
    public function setAdditionalinfos($additionalInfos)
    {
        $this->setValue('additionalInfos', $additionalInfos);
    }

    /**
     * Returns an 'Book' document's pageNumber.
     *
     * @return int
     */
    public function getPagenumber()
    {
        return $this->getValue('pageNumber');
    }

    /**
     * Sets an 'Book' document's pageNumber.
     *
     * @param int $pageNumber
     */
    public function setPagenumber($pageNumber)
    {
        $this->setValue('pageNumber', $pageNumber);
    }

    /**
     * Returns an 'Book' document's ocrResult.
     *
     * @return string
     */
    public function getOcrresult()
    {
        return $this->getValue('ocrResult');
    }

    /**
     * Sets an 'Book' document's ocrResult.
     *
     * @param string $ocrResult
     */
    public function setOcrresult($ocrResult)
    {
        $this->setValue('ocrResult', $ocrResult);
    }

    /**
     * Returns an 'Book' document's corrections.
     *
     * @return string
     */
    public function getCorrections()
    {
        return $this->getValue('corrections');
    }

    /**
     * Sets an 'Book' document's corrections.
     *
     * @param string $corrections
     */
    public function setCorrections($corrections)
    {
        $this->setValue('corrections', $corrections);
    }

    /**
     * Returns an 'Book' document's meta.
     *
     * @return array
     */
    public function getMeta()
    {
        return $this->getValue('meta');
    }

    /**
     * Sets an 'Book' document's meta.
     *
     * @param array $meta
     */
    public function setMeta($meta)
    {
        $this->setValue('meta', $meta);
    }

    /**
     * Returns an 'Book' document's workflowTicket.
     *
     * @return WorkflowTicketModule
     */
    public function getWorkflowticket()
    {
        return $this->getValue('workflowTicket');
    }

    /**
     * Sets an 'Book' document's workflowTicket.
     *
     * @param WorkflowTicketModule $workflowTicket
     */
    public function setWorkflowticket($workflowTicket)
    {
        $this->setValue('workflowTicket', $workflowTicket);
    }
}
