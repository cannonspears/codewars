function squareDigits(num) {
  return Number(
    num
      .toString()
      .split("")
      .map((number) => Number(number) * Number(number))
      .join("")
  );
}

// Best Practice Solution
function squareDigits(num) {
  return +num
    .toString()
    .split("")
    .map((i) => i * i)
    .join("");
}
