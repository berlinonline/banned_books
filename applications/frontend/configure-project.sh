#!/bin/bash

cd ../..
git submodule init
git submodule update
cd applications/portal/pulq
git checkout master
make install
cd .. 


