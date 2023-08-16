function points(games) {
  let points = 0;
  games.forEach((game) => {
    if (game[0] > game[game.length - 1]) {
      points = points + 3;
    } else if (game[0] === game[game.length - 1]) {
      points++;
    }
  });
  return points;
}
