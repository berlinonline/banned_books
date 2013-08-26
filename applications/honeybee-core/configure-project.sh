
#!/bin/bash

cd ../..
git submodule init --update --recursive
cd applications/honeybee-core/honeybee
make install
cd .. 

