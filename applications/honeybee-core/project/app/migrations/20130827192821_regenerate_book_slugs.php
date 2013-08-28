<?php

use Honeybee\Domain\Book;

class Migration20130827192821 implements IMigration
{
    public function up()
    {
        $book_module = Book\BookModule::getInstance();
        $service = $book_module->getService();
        $result = $service->fetchAll(0, 100000);
        foreach ($result['documents'] as $book)
        {
            $book->setSlug(null);
            $service->save($book);
        }
    }

    public function down()
    {
    }

    public function isDestructive()
    {
        return true;
    }

    public function getDescription()
    {
        return 'regenerate_book_slugs';
    }

    public function getTimestamp()
    {
        return '20130827192821';
    }
}
