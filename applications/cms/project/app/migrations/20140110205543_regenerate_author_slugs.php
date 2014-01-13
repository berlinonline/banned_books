<?php

class Migration20140110205543 extends ModuleMigration
{
    public function up()
    {
        $service = $this->getModule()->getService();
        $result = $service->fetchAll(0, 100000);
        foreach ($result['documents'] as $book) {
            $book->setSlug(null);
            $service->save($book);
        }
    }

    public function down()
    {

    }

    public function getDescription()
    {
        return 'regenerate_author_slugs';
    }

    protected function getModuleClass()
    {
        return 'Honeybee\Domain\Author\AuthorModule';
    }
}
