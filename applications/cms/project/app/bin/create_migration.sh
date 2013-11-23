#!/bin/sh

description=$1
timestamp=$(date +'%Y%m%d%H%M%S')
filename="${timestamp}_${description}.php"
migration_path=`dirname $0`/../migrations/${filename}
echo "<?php

class Migration${timestamp} implements IMigration
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

    public function getTimestamp()
    {
        return '${timestamp}';
    }
}"  > ${migration_path}

