define banned_books::application (
  $app_name = $title,
  $app_docroot = '/home/vagrant/projects/banned_books/applications/honeybee-core/honeybee/pub'
) {

  Exec { path => [ '/bin/', '/sbin/' , '/usr/bin/', '/usr/sbin/' ] }

  nginx::site { "${app_name}":
    name => $app_name,
    docroot => "${app_docroot}"
  }

  file {
    "/home/vagrant/init_fe.sh":
      ensure  => present,
      mode    => '0744',
      owner   => 'vagrant',
      group   => 'vagrant',
      content => template('banned_books/init_fe.sh.erb');
    "/home/vagrant/init_cms.sh":
      ensure  => present,
      mode    => '0744',
      owner   => 'vagrant',
      group   => 'vagrant',
      content => template('banned_books/init_cms.sh.erb')
  }
}

