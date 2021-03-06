(function () {

'use strict';

var self = this;
var readable = {};

// http://stackoverflow.com/questions/9461621/how-to-format-a-number-as-2-5k-if-a-thousand-or-more-otherwise-900-in-javascrip
readable.number = function (num, digits) {
  var si = [
    {value: 1E12, symbol: "T"},
    {value: 1E9, symbol: "B"},
    {value: 1E6, symbol: "M"},
    {value: 1E3, symbol: "k"}
  ];
  for (var i = 0; i < si.length; i++) {
    if (num >= si[i].value) {
      return (num / si[i].value).toFixed(digits) + si[i].symbol;
    }
  }
  return num;
};

// http://stackoverflow.com/questions/9083037/convert-a-number-into-a-roman-numeral-in-javascript
readable.romanNumeral = function (num) {
  var digits = String(num).split("");
  var key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
        "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
        "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  var roman = "";
  var i = 3;
  while (i--) {
    roman = (key[+digits.pop() + (i * 10)] || "") + roman;
  }
  return Array(+digits.join("") + 1).join("M") + roman;
};

// https://github.com/taijinlee/humanize
// https://en.wikipedia.org/wiki/Ordinal_number_(linguistics)
readable.ordinal = function (input) {
  var suffix = ['th', 'st', 'nd', 'rd'];
  var value = input % 10;
  return (suffix[(value - 20) % 10] || suffix[value] || suffix[0]);
};

self.rc = self.rc || {};
self.rc.readable = readable;

if (typeof module !== 'undefined') {
  module.exports = self.rc;
}

}).call(this);
