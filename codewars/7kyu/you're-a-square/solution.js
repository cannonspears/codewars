var isSquare = function (n) {
  return Number.isInteger(Math.sqrt(n));
};

// Another simple solution
function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}
