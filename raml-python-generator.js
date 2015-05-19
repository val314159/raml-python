var join = require('path').join
var readFileSync = require('fs').readFileSync
var generator = require('raml-generator')

function read (path) {
  return readFileSync(join(__dirname, 'lib', path), 'utf8')
}

module.exports = generator({
  templates: {
    '__init__.py'            : read('templates/__init__.py.hbs'),
    'example.py'             : read('templates/example.py.hbs'),
    'rpc_gae.py'             : read('templates/rpc_gae.py.hbs'),
    'rpc_geventhttpclient.py': read('templates/rpc_geventhttpclient.py.hbs'),
    'rpc_httplib.py'         : read('templates/rpc_httplib.py.hbs'),
    'rpc_httplib2.py'        : read('templates/rpc_httplib2.py.hbs'),
    'rpc_requests.py'        : read('templates/rpc_requests.py.hbs'),             
    'rpc_tornado.py'         : read('templates/rpc_tornado.py.hbs'),
    'rpc_urlfetch.py'        : read('templates/rpc_urlfetch.py.hbs'),              
    'server_mock.py'         : read('templates/server_mock.py.hbs'),
    'server_tornado.py'      : read('templates/server_tornado.py.hbs'),              
    'server_wsgi.py'         : read('templates/server_wsgi.py.hbs')
  },
  partials: {
  },
  helpers: {
	    fullPath: require('./lib/helpers/fullPath'),
	    flatPath: require('./lib/helpers/flatPath'),
	    getUriList: require('./lib/helpers/getUriList')
  }
})
