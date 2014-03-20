var through = require('through2');

var parse = function(str) {
	try {
		return JSON.parse(str);
	} catch (err) {
		return null;
	}
};

module.exports = function(fn) {
	var p = through({objectMode:true}, function(data, enc, cb) {
		var parsed = parse(data.toString());
		if (parsed) return cb(null, parsed);
		cb();
	});

	p.on('data', fn);
	return p;
};
