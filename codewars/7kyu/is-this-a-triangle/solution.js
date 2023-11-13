function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a ? true : false;
}

// Simplified solution
// No need to explicitly return true/false

function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}
