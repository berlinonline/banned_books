#!/bin/bash

cd ../..
git submodule init
git submodule update
cd applications/frontend/pulq
#git checkout master
make install
cd .. 


