<?php

class Migration20130827182843 extends ModuleMigration
{
    public function up()
    {
        $couch_db_client = $this->getConnection('Write');

        $this->proccessAllDocuments(
            function(array $document_data) use ($couch_db_client) {
                $document_data['workflowTicket']['lastResult']['type'] = 'Honeybee\\Domain\\Book\\PluginResultDocument';
                $document_data['workflowTicket']['lastResult'] = array($document_data['workflowTicket']['lastResult']);

                $document_data['workflowTicket']['type'] = 'Honeybee\\Domain\\Book\\WorkflowTicketDocument';
                $document_data['workflowTicket'] = array($document_data['workflowTicket']);

                $editions = array();
                $edition = array_filter(array(
                    'publisher' => $document_data['publisherOne'],
                    'year' => $document_data['yearOne'],
                    'location' => $document_data['placeOne']
                ));
                unset($document_data['publisherOne']);
                unset($document_data['yearOne']);
                unset($document_data['placeOne']);
                if (!empty($edition))
                {
                    $edition['type'] = 'Honeybee\\Domain\\Book\\EditionDocument';
                    $editions[] = $edition;
                }

                $edition = array_filter(array(
                    'publisher' => $document_data['publisherTwo'],
                    'year' => $document_data['yearTwo'],
                    'location' => $document_data['placeTwo']
                ));
                unset($document_data['publisherTwo']);
                unset($document_data['yearTwo']);
                unset($document_data['placeTwo']);

                if (!empty($edition))
                {
                    $edition['type'] = 'Honeybee\\Domain\\Book\\EditionDocument';
                    $editions[] = $edition;
                }
                $document_data['editions'] = $editions;

                if (empty($document_data['title']))
                {
                    $document_data['title'] = 'ohne-titel';
                }
                $couch_db_client->storeDoc(null, $document_data);
            }
        );
    }

    public function down()
    {
        $couch_db_client = $this->getConnection('Write');

        $this->proccessAllDocuments(
            function(array $document_data) use ($couch_db_client) {
                unset($document_data['workflowTicket']['lastResult']['type']);
                $document_data['workflowTicket']['lastResult'] = $document_data['workflowTicket']['lastResult'][0];

                unset($document_data['workflowTicket']['type']);
                $document_data['workflowTicket'] = $document_data['workflowTicket'][0];

                $couch_db_client->storeDoc(null, $document_data);
            }
        );
    }

    public function isDestructive()
    {
        return false;
    }

    public function getDescription()
    {
        return <<<DESC
Migrate all existing book documents to have correctly structured aggregates.
This includes WorkflowTickets and the new Edition aggregate.
DESC;
    }

    protected function getModuleClass()
    {
        return '\\Honeybee\\Domain\\Book\\BookModule';
    }
}
