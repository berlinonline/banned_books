
#!/bin/bash

cd ../..
git submodule init --update --recursive
cd applications/honeybee-core/honeybee
git checkout master
make install
cd .. 

