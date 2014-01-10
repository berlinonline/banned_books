<?php
/*              AUTOGENERATED CODE - DO NOT EDIT !
This base class was generated by the Dat0r library (https://github.com/berlinonline/Dat0r)
on 2014-01-10 14:35:37 and is closed to modifications by any meaning.
If you are looking for a place to alter the behaviour of the 'Author' module,
then the 'AuthorModule' (skeleton) class probally might be a good place to look. */

namespace Honeybee\Domain\Author\Base;

use Dat0r\Core\Field\AggregateField;
use Dat0r\Core\Field\KeyValueField;
use Dat0r\Core\Field\TextField;
use Honeybee\Core\Dat0r;

/**
 * Serves as the base class to the 'Author'' module skeleton.
 */
abstract class AuthorModule extends Dat0r\Module
{
    /**
     * Creates a new AuthorModule instance.
     */
    protected function __construct()
    {
        parent::__construct(
            'Author',
            array(
                TextField::create(
                    'firstname',
                    array()
                ),
                TextField::create(
                    'lastname',
                    array()
                ),
                TextField::create(
                    'fullname',
                    array()
                ),
                KeyValueField::create(
                    'meta',
                    array(
                        'constraints' => array(
                            'value_type' => 'dynamic',
                        ),
                    )
                ),
                AggregateField::create(
                    'workflowTicket',
                    array(
                        'modules' => array(
                            '\\Honeybee\\Domain\\Author\\WorkflowTicketModule',
                        ),
                    )
                ),
            ),
            array(
                'prefix' => 'author',
                'identifier_field' => 'identifier',
                'slugPattern' => '{fullname}-{shortId}',
            )
        );
    }

    /**
     * Returns the IDocument implementor to use when creating new documents.
     *
     * @return string Fully qualified name of an IDocument implementation.
     */
    protected function getDocumentImplementor()
    {
        return '\\Honeybee\\Domain\\Author\\AuthorDocument';
    }
}
