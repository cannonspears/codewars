/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Sort and Compare Method: O(n log n)
var isAnagram = function (s, t) {
  return s.split("").sort().toString() == t.split("").sort().toString();
};
