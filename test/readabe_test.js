var rc = require('../');
var test = require('tape');

test('number', function(t) {
  t.equal(rc.readable.number(1, 0), 1, '1 isn\'t shortened');
  t.equal(rc.readable.number(100, 0), 100, '100 isn\'t shortened');
  t.equal(rc.readable.number(1E3, 0), '1k', '1000 is shortened to 1k');
  t.equal(rc.readable.number(1E6, 0), '1M', '1000000 is shortened to 1M');
  t.equal(rc.readable.number(1E9, 0), '1B', '10E9 is shortened to 1B');
  t.equal(rc.readable.number(1E12, 0), '1T', '10E12 is shortened to 1T');

  t.equal(rc.readable.number(1155, 1), '1.2k', '1155 is shortened to 1.2k');
  t.equal(rc.readable.number(1150, 2), '1.15k', '1150 is shortened to 1.15k');
  t.equal(rc.readable.number(1155, 2), '1.16k', '1155 is shortened to 1.16k');

  t.equal(rc.readable.number(123456789, 1), '123.5M', '123456789 is shortened to 123.5M');

  t.end();
});


test('romanNumeral', function(t) {
  t.equal(rc.readable.romanNumeral(1), 'I', '1 is I');
  t.equal(rc.readable.romanNumeral(2), 'II', '2 is II');
  t.equal(rc.readable.romanNumeral(3), 'III', '3 is III');
  t.equal(rc.readable.romanNumeral(4), 'IV', '4 is IV');
  t.equal(rc.readable.romanNumeral(5), 'V', '5 is V');
  t.equal(rc.readable.romanNumeral(6), 'VI', '6 is VI');
  t.equal(rc.readable.romanNumeral(7), 'VII', '7 is VII');
  t.equal(rc.readable.romanNumeral(8), 'VIII', '8 is VIII');
  t.equal(rc.readable.romanNumeral(9), 'IX', '9 is IX');
  t.equal(rc.readable.romanNumeral(10), 'X', '10 is X');

  t.equal(rc.readable.romanNumeral(15), 'XV', '15 is XV');
  t.equal(rc.readable.romanNumeral(20), 'XX', '20 is XV');
  t.equal(rc.readable.romanNumeral(30), 'XXX', '30 is XXX');
  t.equal(rc.readable.romanNumeral(39), 'XXXIX', '39 is XXXIX');
  t.equal(rc.readable.romanNumeral(40), 'XL', '40 is XL');

  t.end();
});
