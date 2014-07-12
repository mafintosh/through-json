var through = require('through2');

var parseJSON = function(str) {
	try {
		return JSON.parse(str);
	} catch (err) {
		return null;
	}
};

var parse = function(format) {
	return through.obj(function(data, enc, cb) {
		var parsed = parseJSON(data.toString());
		if (parsed && format) parsed = format(parsed)
		if (parsed) return cb(null, parsed);
		cb();
	});
};

var stringify = function(format) {
	return through.obj(function(data, enc, cb) {
		var str = JSON.stringify(format ? format(data) : data);
		if (!str) return cb();
		cb(null, str)
	})
};

parse.stringify = stringify;
parse.parse = parse;

module.exports = parse;