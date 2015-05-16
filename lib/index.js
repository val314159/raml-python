var fs = require('fs');
var generator = require('raml-generator');

function load(fn) {
    return fs.readFileSync(__dirname+'/templates/'+fn+'.hbs','utf8');
}

/**
 * Export a client generator instance.
 *
 * @type {Function}
 */
module.exports = generator({
  templates: {
    '__init__.py'      :      load('__init__.py'),
    'rpc_requests.py'  :      load('rpc_requests.py'),
    'rpc_tornado.py'   :      load('rpc_tornado.py'),
    'rpc_urlfetch.py'  :      load('rpc_urlfetch.py'),
    'rpc_httplib2.py'  :      load('rpc_httplib2.py'),
    'rpc_httplib.py'   :      load('rpc_httplib.py'),
    'rpc_geventhttpclient.py':load('rpc_geventhttpclient.py'),
    'rpc_gae.py'       :      load('rpc_gae.py'),
    'example.py'       :      load('example.py'),
    'server_mock.py'   :      load('server_mock.py'),
    'server_wsgi.py'   :      load('server_wsgi.py'),
    'server_tornado.py':      load('server_tornado.py'),
  },
  format: {
    variable: require('camel-case')
  },
  partials: {
  },
  helpers: {
    stringify:         require('javascript-stringify'),
    getUriList:        require('./helpers/getUriList'),
    fullPath:          require('./helpers/fullPath'),
    flatPath:          require('./helpers/flatPath'),
    importJson:        require('./helpers/importJson'),
  }
});
