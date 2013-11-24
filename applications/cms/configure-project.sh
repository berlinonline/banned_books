#!/bin/bash

cd ../..
git submodule update --init --recursive
cd applications/cms/honeybee
make install
cd .. 

