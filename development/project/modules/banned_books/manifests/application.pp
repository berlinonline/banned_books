define banned_books::application (
  $app_name = $title,
  $app_docroot = '/home/vagrant/projects/banned_books/applications/honeybee-core/honeybee/pub'
) {

  Exec { path => [ '/bin/', '/sbin/' , '/usr/bin/', '/usr/sbin/' ] }

  nginx::site { "${app_name}":
    name => $app_name,
    docroot => "${app_docroot}"
  }
}

