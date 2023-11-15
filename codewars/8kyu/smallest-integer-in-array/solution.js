function findSmallestInt(args) {
  let sort = args.sort((a, b) => a - b);
  return sort[0];
}

// Simplified solution: O(n) Time Complexity
function findSmallestInt(args) {
  return Math.min(...args);
}
