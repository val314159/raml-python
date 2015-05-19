## Raml->python generator
----

This package uses [raml-client-generator](https://github.com/mulesoft/raml-client-generator) as a framework for generating macro files.  (You may also just use the language/python directory as a plug-in, if you're using more than just python)

----

### Installation

for the code generation, you'll need to run

```sh
npm install
```

###  Invocation

Do it like this:
```sh
./bin/raml-python-generator.js instagram-api.raml -o <output_directory>
```

>Generate Python API clients/servers from RAML
>
>raml-python-generator.js api.raml --output api-client
>
>Options:

>  --version     Show version number                                    [boolean]

>  -o, --output  Output directory                                      [required]

>  -d, --data    Provide the path to JSON package information


### Testability

```sh
sh test.sh
```

If it's all good, this will generate a bunch of python files in the directory './igpy/' for various python web clients and servers.

For more details of what's generated, see the README.md in the './lib' folder.

