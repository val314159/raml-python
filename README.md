Raml-python generator
===

This package uses [raml-generator](https://github.com/mulesoft-labs/raml-generator) as a framework for generating macro files.


### Installation (from npm)

You probably just want this, so type:

```sh
npm install raml-python -g
```

### Usage (Command-line):
```
  raml-python-generator api.raml --output api-client

Options:
  --version     Show version number  [boolean]
  -o, --output  Output directory     [required]
  -d, --data    Provide the path to JSON package information
```

### Usage (inline javascript):

```javascript
var generator = require('raml-python');

var output = generator(/* raml, data */);
```

### Installation (from source)

```sh
npm install . -g
```

### Testability (from source)

```sh
raml-python-generator example/simple.raml -o simple
cp example/rpc_impl.py simple
```

If it's all good, this will generate a python package in the directory 'simple' for various
 python web clients and servers.

Try it out by running `python -msimple.server_wsgi` in one window,
and `python example/run_client.py` in another.

For more details of what's generated, see the README.md in the './lib' folder.

Alternatively, check out The [Simplest RAML File](http://b.ccl.io/2015/05/24/simplest-raml-file).

For an alternative language implementation (javascript), see 
[https://github.com/mulesoft-labs/raml-javascript-generator](https://github.com/mulesoft-labs/raml-javascript-generator).

### License

Apache License 2.0
