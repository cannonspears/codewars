let reverseSeq = (n) => {
  let arr = [];
  for (let i = n; i > 0; i--) {
    arr.push(i);
  }
  return arr;
};

// Better solution:
// Array(n) creates array [undefined, undefined, undefined, undefined, undefined]
// fill(0) fills all values in array with 0: [0, 0, 0, 0, 0]
// map doesn't use accumulator and instead maps each item to n - index: [5, 4, 3, 2, 1]
reverseSeq = (n) => {
  return Array(n)
    .fill(0)
    .map((e, i) => n - i);
};
