function openOrSenior(data) {
  let result = data.map((member) => {
    return member[0] >= 55 && member[1] > 7 ? "Senior" : "Open";
  });
  return result;
}

// Simplified solution

function openOrSenior(data) {
  return data.map(([age, handicap]) => (age >= 55 && handicap > 7 ? "Senior" : "Open"));
}
