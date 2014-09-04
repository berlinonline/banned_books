<?php

use Honeybee\Core\Service\DocumentService;

/**
 * @copyright BerlinOnline Stadtportal GmbH & Co. KG
 * @package Author
 */
class AuthorService extends DocumentService
{
    const CHUNK_SIZE = 100;

    const SEQUENCE_KEY = 'short_id_service-sequence';
    /*
        Prevent memory leaks while processing a document with a callback
    */
    public function walkStorageDocuments($chunk_size, Closure $callback)
    {
        $spec = array();
        $spec['limit'] = ($chunk_size > 0) ? $chunk_size : self::CHUNK_SIZE;

        $result = $this->readDocuments($spec);
        $spec['skip'] = 1;

        while ($result->count() > 0) {
            for ($result->rewind(); $result->valid(); $result->next()) {
                $document = $result->current();
                call_user_func($callback, $document);
                $spec['startkey'] = $document->getIdentifier();
            }
            $result = $this->readDocuments($spec);
        }
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
        // remove keys not corresponding to any document
        $result_keys = array_filter(
            $result_keys,
            function ($key) {
                $self = __CLASS__;
                return ($key != $self::SEQUENCE_KEY);
            }
        );
        $result = $repository->read($result_keys);

        return $result;
    }
}
