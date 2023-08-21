function betterThanAverage(classPoints, yourPoints) {
  const average = classPoints.reduce((acc, cur) => acc + cur) / classPoints.length;
  return yourPoints > average;
}
