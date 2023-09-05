// Define and lookup solution: O(n)
function scramble(str1, str2) {
  let lookup = {};
  for (let i = 0; i < str1.length; i++) {
    !lookup[str1[i]] ? (lookup[str1[i]] = 1) : lookup[str1[i]]++;
  }
  for (let i = 0; i < str2.length; i++) {
    if (lookup[str2[i]]) {
      lookup[str2[i]]--;
    } else {
      return false;
    }
  }
  return true;
}
