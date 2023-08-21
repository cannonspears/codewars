function solution(str, ending) {
  return str.includes(ending, str.length - ending.length);
}

// Best Practice Solution
function solution(str, ending) {
  return str.endsWith(ending);
}
