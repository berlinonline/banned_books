# make sure that commands are always search in the following locations
Exec { path => [ "/bin/", "/sbin/" , "/usr/bin/", "/usr/sbin/" ] }
# set projects base directory, which is also exported to nfs.
$hosting_root = "/home/vagrant/projects"

# set our default package provider
Package { provider => 'apt' }

# define our concrete box configuration
class { 'boxes::devbox-php-couchdb': }
-> banned_books::application { 'cms.banned-books.dev':
    app_docroot => '/home/vagrant/projects/banned_books/applications/honeybee-core/honeybee/pub'
}
-> banned_books::application { 'banned-books.dev':
    app_docroot => '/home/vagrant/projects/banned_books/applications/frontend/pulq/pub'
}

