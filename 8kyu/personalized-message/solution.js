function greet(name, owner) {
  if (name === owner) return `Hello boss`;
  else return "Hello guest";
}

// Better solution
function greet(name, owner) {
  return `Hello ${name == owner ? "boss" : "guest"}`;
}
