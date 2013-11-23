<?php

interface IMigration
{
    public function up();

    public function down();

    public function getTimestamp();

    public function getDescription();

    public function isDestructive();
}
