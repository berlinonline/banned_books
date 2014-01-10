<?php

use Honeybee\Domain\Publisher\PublisherModule;

class Migration20140110152745 extends ModuleMigration
{
    protected $publisher_module;

    protected $migrated_publishers = array();

    public function __construct()
    {
        parent::__construct();

        $this->publisher_module = PublisherModule::getInstance();
    }

    public function up()
    {
        $couch_db_client = $this->getConnection('Write');
        $publisher_module = $this->publisher_module;
        $book_module = $this->getModule();
        $migrated_publishers = &$this->migrated_publishers;

        $this->proccessAllDocuments(
            function(array $document_data) use ($couch_db_client, $publisher_module, $book_module, &$migrated_publishers)
            {
                $editions = empty($document_data['editions']) ? array() : $document_data['editions'];

                foreach ($editions as &$edition) {
                    $publisher = null;

                    if (isset($edition['publisher'])) {
                        $publisher_name = trim($edition['publisher']);
                        unset($edition['publisher']);
                        $publisher_key = md5(strtolower($publisher_name));

                        if (isset($migrated_publishers[$publisher_key])) {
                            $publisher = $migrated_publishers[$publisher_key];
                        } else {
                            $publisher = $publisher_module->createDocument(
                                array('name' => $publisher_name)
                            );
                            $publisher_module->getService()->save($publisher);
                            $migrated_publishers[$publisher_key] = $publisher;
                        }

                        if ($publisher) {
                            $edition['publisher'] = array(
                                array(
                                    'id' => $publisher->getIdentifier(),
                                    'module' => $publisher_module->getOption('prefix')
                                )
                            );
                            echo sprintf(
                                'Publisher %1$s linked with book: %2$s',
                                $publisher_name,
                                $document_data['_id']
                            ) . PHP_EOL;
                        } else {
                            echo "No publisher found for dataset: " . print_r($document_data, true) . PHP_EOL;
                        }
                    }
                }
                $couch_db_client->storeDoc(null, $document_data);
            }
        );
    }

    public function down()
    {

    }

    public function getDescription()
    {
        return 'Extract publishers to their own aggregate root and preserve a reference from Book to Publisher.';
    }

    protected function getModuleClass()
    {
        return 'Honeybee\Domain\Book\BookModule';
    }
}
