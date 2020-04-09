const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

game = new Game();
game.initializePlayers();
game.watchStats();

console.log(game.players);

let playersTurn;
let i = 0;

while (i < 2) {
  playersTurn = shuffleArray(game.players);
  console.log(playersTurn);
  i += 1;
  playersTurn.forEach((player) => {
    console.log(`${player.name}'s turn to play`);
    player.stats();
    game.menu(player);
  });
}
