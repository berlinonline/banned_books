# make sure that commands are always search in the following locations
Exec { path => [ "/bin/", "/sbin/" , "/usr/bin/", "/usr/sbin/" ] }
# set projects base directory, which is also exported to nfs.
$hosting_root = "/home/vagrant/projects"

# set our default package provider
Package { provider => 'apt' }

# define our concrete box configuration
class { 'boxes::devbox-php-couchdb': }
-> class { 'banned_books::honeybee-core': }
