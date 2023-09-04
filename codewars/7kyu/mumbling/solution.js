function accum(s) {
  return s
    .split("")
    .map((char, ind) => char.toUpperCase() + char.toLowerCase().repeat(ind))
    .join("-");
}
