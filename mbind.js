'use strict';

module.exports = function mbind() {
  return function (a, b) {
    return function (k) {
      return a(function (v) { return b(v); }, k);
    };
  };
};
