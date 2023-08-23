/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Sort and Compare Method: O(n log n)
// var isAnagram = function (s, t) {
//   return s.split("").sort().toString() == t.split("").sort().toString();
// };

// Lookup Method: O(n)
function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  let lookup = {};
  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    lookup[letter] ? lookup[letter]++ : (lookup[letter] = 1);
  }

  for (let i = 0; i < t.length; i++) {
    let letter = t[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter]--;
    }
  }
  return true;
}
