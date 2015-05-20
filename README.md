## Raml->python generator
----

This package uses [raml-client-generator](https://github.com/mulesoft/raml-client-generator)
 as a framework for generating macro files.  (You may also just use the language/python
 directory as a plug-in, if you're using more than just python)

----

### How to Install it

You probably just want to install the npm version, so type:

```sh
npm install raml-python -g
```

### How to Run it

Usage:
```
Generate Python API clients/servers from RAML

  raml-python-generator api.raml --output api-client

Options:
  --version     Show version number                                    [boolean]
  -o, --output  Output directory                                      [required]
  -d, --data    Provide the path to JSON package information
```

### How to Install it (from source)

```sh
npm install . -g
```

### How to Test it (from source)

```sh
sh test.sh
```

This will generate a bunch of python files in the directory 'igpy' for various
 python web clients and servers.

For more details of what's generated, see the README.md in the './lib' folder.
