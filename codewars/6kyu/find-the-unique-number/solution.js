function findUniq(arr) {
  let set = new Set(arr);

  for (let num of set) {
    let occurrences = arr.filter((n) => n === num).length;
    if (occurrences === 1) {
      return num;
    }
  }
}
