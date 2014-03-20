var test = require('tap').test;
var parse = require('./');

test('parse 1 message', function(t) {
	t.plan(1);
	parse(function(data) {
		t.same(data, {hello:'world'});
	}).write('{"hello":"world"}');
});

test('parse 2 messages', function(t) {
	t.plan(2);

	var expected = [{hello:'world'},{hello:'verden'}];

	var p = parse(function(data) {
		t.same(data, expected.shift());
	})

	p.write('{"hello":"world"}');
	p.end('{"hello":"verden"}');
});