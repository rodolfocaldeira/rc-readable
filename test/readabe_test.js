var rc = require('../');
var test = require('tape');

test('number', function(t) {
  t.equal(rc.readable.number(1, 2), 1, '1 isn\'t shortened');
  t.equal(rc.readable.number(100, 2), 100, '100 isn\'t shortened');
  t.equal(rc.readable.number(1E3, 2), '1k', '1000 is shortened to 1k');
  t.equal(rc.readable.number(1E6, 2), '1M', '1000000 is shortened to 1M');
  t.equal(rc.readable.number(1E9, 2), '1B', '10E9 is shortened to 1B');
  t.equal(rc.readable.number(1E12, 2), '1T', '10E12 is shortened to 1T');

  t.equal(rc.readable.number(1155, 1), '1.2k', '1155 is shortened to 1.2k');
  t.equal(rc.readable.number(1150, 2), '1.15k', '1150 is shortened to 1.15k');
  t.equal(rc.readable.number(1155, 2), '1.16k', '1155 is shortened to 1.16k');

  t.equal(rc.readable.number(123456789, 1), '1.16k', '123456789 is shortened to 123.5M');

  t.end();
});
