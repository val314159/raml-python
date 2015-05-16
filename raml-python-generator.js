var join = require('path').join
var readFileSync = require('fs').readFileSync
var generator = require('raml-generator')

function read (path) {
  return readFileSync(join(__dirname, 'lib', path), 'utf8')
}

module.exports = generator({
  templates: {
    '__init__.py.hbs': read('templates/__init__.py.hbs'),
    'example.py.hbs': read('templates/example.py.hbs'),
    'rpc_gae.py.hbs': read('templates/rpc_gae.py.hbs'),
    'rpc_geventhttpclient.py.hbs': read('templates/rpc_geventhttpclient.py.hbs'),
    'rpc_httplib.py.hbs': read('templates/rpc_httplib.py.hbs'),
    'rpc_httplib2.py.hbs': read('templates/rpc_httplib2.py.hbs'),
    'rpc_requests.py.hbs': read('templates/rpc_requests.py.hbs'),
    'rpc_tornado.py.hbs': read('templates/rpc_tornado.py.hbs'),
    'rpc_urlfetch.py.hbs': read('templates/rpc_urlfetch.py.hbs'),
    'server_mock.py.hbs': read('templates/server_mock.py.hbs'),
    'server_tornado.py.hbs': read('templates/server_tornado.py.hbs'),
    'server_wsgi.py.hbs': read('templates/server_wsgi.py.hbs')
   },
   partials: {
   },
   helpers: {
     stringify: require('javascript-stringify'),
     flatPath: require('./lib/helpers/flatPath'),
     fullPath: require('./lib/helpers/fullPath'),
     getUriList: require('./lib/helpers/getUriList'),
     importJson: require('./lib/helpers/importJson')
  }
})
