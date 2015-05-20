## Raml->python generator
----

This package uses [raml-client-generator](https://github.com/mulesoft/raml-client-generator)
 as a framework for generating macro files.  (You may also just use the language/python
 directory as a plug-in, if you're using more than just python)

----

### Installation (from npm)

You probably just want this, so type:

```sh
npm install raml-python -g
```

###  Invocation

Usage:
```
  raml-python-generator api.raml --output api-client

Options:
  --version     Show version number                                    [boolean]
  -o, --output  Output directory                                      [required]
  -d, --data    Provide the path to JSON package information
```

### Installation (from source)

```sh
npm install . -g
```

### Testability (from source)

```sh
sh test.sh
```

If it's all good, this will generate a bunch of python files in the directory './igpy/' for various python web clients and servers.

This will generate a bunch of python files in the directory 'igpy' for various
 python web clients and servers.

For more details of what's generated, see the README.md in the './lib' folder.
