const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const gameOn = () => {
  game = new Game();
  game.initializePlayers();

  console.log("Bienvenue au Grand Tournoi de THP Next !");
  console.log(game.players);

  let playersTurn;
  let i = 1;

  while (game.turnLeft > 0 && game.players.length > 1) {
    console.log(`Turn n°${i}`);
    playersTurn = shuffleArray(game.players);
    console.log(`##############################################`);
    playersTurn.forEach((player) => {
      if (player.status == "playing") {
        player.initStats();
        console.log(`${player.name} is ready to fight`);
      }
    });
    playersTurn.forEach((player) => {
      if (player.status == "playing") {
        console.log(`##############################################`);
        if (player instanceof Assassin && player.victim != "") {
          player.daggerAttack();
        } else {
          console.log(`${player.name}'s turn to play`);
          player.stats();
          game.menu(player);
        }
      }
      console.log(`##############################################`);
      console.log(`End of ${player.name}'s turn, press Enter to continue`);
      prompt(`End of ${player.name}'s turn, press Enter to continue`);
      console.clear();
    });
    console.log(`##############################################`);
    playersTurn.forEach((player) => {
      if (player.status == "playing") {
        player.endStats();
      }
    });
    game.turnLeft -= 1;
    i += 1;
  }

  game.endGame();
};

document.getElementById("submit").addEventListener("click", gameOn);
