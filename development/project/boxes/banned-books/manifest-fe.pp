Exec { path => [ '/bin/', '/sbin/' , '/usr/bin/', '/usr/sbin/' ] }

# set our default package provider
Package { provider => 'apt' }

# set projects base directory, which is also exported to nfs.
$hosting_root = "/home/vagrant/projects"
$project_basedir = "${hosting_root}/banned-books-fe"

# define our concrete box configuration
class { 'boxes::devbox-php-couchdb': }
-> banned_books::application { 'banned-books-fe.local':
    app_docroot => "${project_basedir}/applications/frontend/pulq/pub"
}
