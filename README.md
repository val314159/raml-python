## Raml->python generator
----

This package uses [raml-generator](
https://github.com/mulesoft-labs/raml-generator)
 as a framework for generating macro files.
  (You may also just use the language/python
 directory as a plug-in, if you're using more
 than just python)

----

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

### License

Apache License 2.0
