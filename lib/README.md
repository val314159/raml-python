README
======

This is the python generator for RAML.  It creates:

## Clients:

-  requests - probably the most common
-  httplib/urllib2 - built-in libraries
-  httplib2/urllib2 - enhanced versions of built-in libraries
-  fetchurl - not to be confused with the google app engine fetch
-  Google Fetch API - Google app engine specific
-  Tornado HTTPClient - Hi-speed Async requests
-  pulsar - newer async framework

possible future implementations:

-  pulsar - newer async framework

not supported

-  urllib2 - only GET/POST supported.  use httplib directly.
-  grequests - gevent version of requests.  Doesn't work at ALL with SSL (how useless is that?)

## Servers:

Mock Object - generates a mock object that returns minimal information.

  - Can be used as a base object for overloading
  - Can be used as a stub object for a guideline of what signamtures are expected

WSGI Middleware - the "standard" way to do it.

Gevent WSGI Server - gevent's high-performance async implementation of WSGI

Tornado Server - one of the most popular non-gevent async frameworks (from Facebook)

  - Is there even a middleware concept in Tornado?
  - If not, maybe just supply a routing table.  Probably a list of (url,handler) tuples.

*Pretty much most servers will server up WSGI middleware just fine*
