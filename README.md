# Banned Books

Manages a list of books banned by the nazi regime ("Liste des schädlichen und
unerwünschten Schrifttums").

## Installation

- ```cd your_projects```
- ```git clone git@github.com:berlinonline/banned_books.git```
- ```cd docs-center```
- ```git submodule update --init --recursive```
- ```cd development/project/boxes/banned-books/```
- ```vagrant up cms```
- ```vagrant ssh cms```
- ```./init_cms.sh```
- wait...
- configure environment:
    - confirm path to PHP binary via ```<return>```
    - input base href of ```http://banned-books-cms.local/```
    - provide `development-vagrant` as environment by confirming it via ```<return>```
    - confirm with `y` and ```<return>```
- open http://banned-books-cms.local/ in the browser
