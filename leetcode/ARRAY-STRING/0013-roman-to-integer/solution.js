/**
 * @param {string} s
 * @return {number}
 */

let lookup = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var romanToInt = function (s) {
  let total = 0;
  for (let n = 0; n < s.length; n++) {
    if (lookup[s[n]] - lookup[s[n + 1]] < 0) {
      total += lookup[s[n + 1]] - lookup[s[n]];
      n++;
    } else {
      total += lookup[s[n]];
    }
  }
  return total;
};

// Shorter solution: O(n)
var romanToInt = function (s) {
  value = 0;
  for (let i = 0; i < s.length; i += 1) {
    symbols[s[i]] < symbols[s[i + 1]] ? (value -= symbols[s[i]]) : (value += symbols[s[i]]);
  }
  return value;
};
