<?php

use Honeybee\Domain\Author\AuthorModule;

class Migration20140110135601 extends ModuleMigration
{
    protected $author_module;

    protected $migrated_authors = array();

    public function __construct()
    {
        parent::__construct();

        $this->author_module = AuthorModule::getInstance();
    }

    public function up()
    {
        $couch_db_client = $this->getConnection('Write');
        $author_module = $this->author_module;
        $book_module = $this->getModule();
        $migrated_authors = &$this->migrated_authors;

        $this->proccessAllDocuments(
            function(array $document_data) use ($couch_db_client, $author_module, $book_module, &$migrated_authors)
            {
                $firstname = trim($document_data['authorFirstname']);
                unset($document_data['authorFirstname']);

                $lastname = trim($document_data['authorLastname']);
                unset($document_data['authorLastname']);

                if (!empty($firstname) || !empty($lastname)) {
                    $author = null;
                    $author_key = md5(strtolower($firstname.$lastname));

                    if (isset($migrated_authors[$author_key])) {
                        $author = $migrated_authors[$author_key];
                    } else {
                        $author = $author_module->createDocument(
                            array('firstname' => $firstname, 'lastname' => $lastname)
                        );
                        $author_module->getService()->save($author);
                        $migrated_authors[$author_key] = $author;
                    }

                    if ($author) {
                        $document_data['author'] = array(
                            array(
                                'module' => $author_module->getOption('prefix'),
                                'id' => $author->getIdentifier()
                            )
                        );
                        $couch_db_client->storeDoc(null, $document_data);
                        echo sprintf(
                            'Author %1$s %2$s linked with book: %3$s',
                            $firstname,
                            $lastname,
                            $document_data['_id']
                        ) . PHP_EOL;
                    } else {
                        echo "No author found for dataset: " . print_r($document_data, true) . PHP_EOL;
                    }
                }
            }
        );
    }

    public function down()
    {

    }

    public function getDescription()
    {
        return 'Extract authors to their own aggregate root and preserve a reference from Book to Author.';
    }

    protected function getModuleClass()
    {
        return 'Honeybee\Domain\Book\BookModule';
    }
}
