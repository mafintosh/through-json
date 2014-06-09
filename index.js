var through = require('through2');

var parse = function(str) {
	try {
		return JSON.parse(str);
	} catch (err) {
		return null;
	}
};

module.exports = function(format) {
	return through.obj(function(data, enc, cb) {
		var parsed = parse(data.toString());
		if (parsed && format) parsed = format(parsed)
		if (parsed) return cb(null, parsed);
		cb();
	});
};
