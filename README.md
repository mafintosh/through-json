# through-json

Through stream that parses each write as a JSON message.

	npm install through-json

[![build status](https://secure.travis-ci.org/mafintosh/through-json.png)](http://travis-ci.org/mafintosh/through-json)

## Usage

``` js
var parse = require('through-json');

// parse returns a streams2 through stream

var p = parse();

p.on('data', function(data) {
	console.log(data.message);
});

p.on('end', function() {
	console.log('no more messages');
});

// each write must be a complete JSON message

p.write('{"message":"test"}');
p.write('{"message":"another test"}');
p.end();
```

Running the above program produces the following output

```
test
another test
no more messages
```

## License

MIT