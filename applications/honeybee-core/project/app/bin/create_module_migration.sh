#!/bin/sh

description=$1
module=$2
timestamp=$(date +'%Y%m%d%H%M%S')
filename="${timestamp}_${description}.php"
migration_path=`dirname $0`/../migrations/${filename}
echo "<?php

class Migration${timestamp} extends ModuleMigration
{
    public function up()
    {

    }

    public function down()
    {

    }

    public function getDescription()
    {
        return '${description}';
    }

    protected function getModuleClass()
    {
        return 'Honeybee\\Domain\\${module}\\${module}Module';
    }
}"  > ${migration_path}

echo "Created migration file at: ${migration_path}"
echo ""

