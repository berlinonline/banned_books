#!/bin/bash

cd ../..
git submodule update --init --recursive
cd applications/honeybee-core/honeybee
make install
cd .. 

