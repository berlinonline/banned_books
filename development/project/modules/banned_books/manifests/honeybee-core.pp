
class banned_books::honeybee-core {

  Exec { path => [ '/bin/', '/sbin/' , '/usr/bin/', '/usr/sbin/' ] }
  
  $project_basedir = "$::hosting_root/banned_books"

  nginx::site { 'banned_books.dev':
    name => 'cms.banned_books',
    server_name => 'cms.banned_books.dev',
    docroot => "$project_basedir/applications/honeybee-core/honeybee/pub"
  }
}
