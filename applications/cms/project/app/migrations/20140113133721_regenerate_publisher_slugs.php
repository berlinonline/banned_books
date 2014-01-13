<?php

class Migration20140113133721 extends ModuleMigration
{
    public function up()
    {
        $service = $this->getModule()->getService();
        $result = $service->fetchAll(0, 100000);
        foreach ($result['documents'] as $publisher) {
            $publisher->setSlug(null);
            $service->save($publisher);
        }
    }

    public function down()
    {

    }

    public function getDescription()
    {
        return 'regenerate_publisher_slugs';
    }

    protected function getModuleClass()
    {
        return 'Honeybee\Domain\Publisher\PublisherModule';
    }
}
