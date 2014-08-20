<?php

use Honeybee\Core\Service\DocumentService;
use Honeybee\Core\Dat0r\DocumentCollection;

/**
 * @copyright BerlinOnline Stadtportal GmbH & Co. KG
 * @package Book
 */
class BookService extends DocumentService
{
    const CHUNK_SIZE = 100;

    const WORKFLOW_STEP_FILTER = 'workflowStep';

    const SEQUENCE_KEY = 'short_id_service-sequence';
    /*
        Prevent memory leaks while processing a document with a callback
    */
    public function walkStorageDocuments(array $filter, $chunk_size, $callback)
    {
        $spec = array(
            // 'startkey' => 'book-fffac028-dd31-4715-8da3-57f8e19f522c-de_DE-1'
        );
        $spec['limit'] = ($chunk_size > 0) ? $chunk_size : self::CHUNK_SIZE;

        $result = $this->readDocuments($spec);
        $spec['skip'] = 1;
        
        // $preocessed_keys = array();
        // while ($result->count() > 0) {
        //     foreach ($result ad $document) {
        //         // ... do stuff
        //         $spec['startkey'] = $document->getIdentifier();
        //     }
        //     $result = $this->readDocuments($spec);
        // }

        while ($result->count() > 0) {
            for ($result->rewind(); $result->valid(); $result->next()) {
                $document = $result->current();
                
                call_user_func($callback, $document);

                // if (in_array($document->getIdentifier(), $preocessed_keys)) {
                //     error_log('duplicated ' . $document->getIdentifier());
                // }
                // $preocessed_keys[] = $document->getIdentifier();
                
                // error_log('Document ' . $i++ . ' ' . $document->getIdentifier());
                $spec['startkey'] = $document->getIdentifier();
            }
            // error_log('Last key: ' . $spec['startkey']);
            $result = $this->readDocuments($spec);
        }
//$i=0;
        // while ($result->count() > 0) {
        //     for ($i=0 ; $i < $result->count(); $result->next(), $i++) {
        //         $document = $result->current();
        //         if (in_array($document->getIdentifier(), $preocessed_keys)) {
        //             error_log('there is something repeating....');
        //         }
        //         $preocessed_keys[] = $document->getIdentifier();
        //         $result_removed = false;

        //         foreach ($filter as $property => $value) {
        //             switch ($property) {
        //                 case self::WORKFLOW_STEP_FILTER:
        //                     if ($document->getWorkflowTicket()->first()->getWorkflowStep() != $value) {
        //                         $result_removed = true;
        //                     }
        //                     break;
        //                 default:
        //                     $getterName = 'get'.ucfirst($property);
        //                     $class = new ReflectionClass($document);
        //                     if ($class->hasProperty($property) && $class->hasMethod($getterName))
        //                     {
        //                         $method = $class->getMethod($getterName);
        //                         if ($method->isPublic())
        //                         {
        //                             $gotValue = $method->invoke($document);
        //                             if ($gotValue != $value) {
        //                                 $result_removed = true;
        //                             }
        //                         }
        //                     }
        //                     break;
        //             }
        //         }
        //         if (! $result_removed) {
        //             if ($document->getWorkflowTicket()->first()->getWorkflowStep() == 'edit') {
        //                 error_log('EDIT: '. $document->getTitle() . ' ('.$document->getIdentifier().')');
        //             }
        //             //call_user_func($callback, $document);
        //         } else {
        //             error_log('Skip '. $document->getWorkflowTicket()->first()->getWorkflowStep(). ' document "'.$document->getTitle().'"');
        //             //$result->remove($document);
        //         }
        //         $spec['startkey'] = $document->getIdentifier();
        //         $spec['skip'] = 1;
        //     }
        //     error_log('Last document is '.$spec['startkey']);
        //     $result = $this->readDocuments($spec);
        // }
    }

    public function readDocuments(array $spec = null)
    {
        $module = $this->getModule();
        $repository = $module->getRepository();
        $storage = $repository->getStorage();
        $couch_db_client = $storage->getDatabase()->getConnection();

        $result = $couch_db_client->getAllDocs(null, $spec);

        $result_keys = array_map(
            function ($doc) {
                return $doc['key'];
            },
            $result['rows']
        );

        $result_keys = array_filter(
            $result_keys,
            function ($key) {
                return ($key != self::SEQUENCE_KEY);
            }
        );
        
        return $repository->read($result_keys);
    }

/*
    // public function read($key, $revision = NULL, array $parameters = NULL)
    // {
    //     $data = NULL;

    //     try {
    //         $data = $this->mapCouchDbDataToDomain(
    //             $this->getDatabase()->getConnection()->getAllDocs(NULL, $parameters, NULL)
    //         );
    //     } catch (ClientException $e) {
    //         if (preg_match('~(\(404\))~', $e->getMessage())) {
    //             // no document for the given parameters in our current database.
    //             $data = null;
    //         } else {
    //             throw $e;
    //         }
    //     }
    //     return $data;
    // }
                                // protected function proccessAllDocuments(Closure $callback)
                                // {
                                //     $couch_db_client = $this->getConnection('Write');
                                //     $result = $couch_db_client->getAllDocs(null, array('include_docs' => true));
                                //     $document_type = $this->module->getDocumentType();

                                //     foreach ($result['rows'] as $row)
                                //     {
                                //         $document = $row['doc'];
                                //         if (isset($document['type']) && $document['type']{0} !== '\\')
                                //         {
                                //             $document['type'] = '\\'.$document['type'];
                                //         }
                                //         else if (!isset($document['type']))
                                //         {
                                //             continue;
                                //         }

                                //         if ($document['type'] === $document_type)
                                //         {
                                //             $callback($document);
                                //         }
                                //     }
                                // }
*/

}
