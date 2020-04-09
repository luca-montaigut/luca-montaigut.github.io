class Game {
  constructor(turnLeft = 10, players = new Array(), status = true) {
    this.turnLeft = turnLeft;
    this.players = players;
    this.status = status;
  }

  endGame = () => {
    this.playersStillAlive();
    this.players.forEach((player) => {
      player.status = "winner";
    });
    console.log("############### Winner(s) ###############################");
    this.players.forEach((player) => {
      if (player.status == "winner") {
        console.log(`Congratulation ${player.name}, you're still alive ... `);
      }
    });
    console.log("#########################################################");
  };

  initializePlayers = () => {
    let player1 = new Fighter();
    let player2 = new Paladin();
    let player3 = new Healer();
    let player4 = new Berzerker();
    let player5 = new Assassin();
    this.players.push(player1, player2, player3, player4, player5);
  };

  playersStillAlive = () => {
    let playersAlive = new Array();
    this.players.forEach((player) => {
      if (player.status == "playing") {
        playersAlive.push(player);
      }
    });
    this.players = playersAlive;
  };

  watchStats = () => {
    console.log("--------------- Characters still in game ----------------");
    this.players.forEach((player) => {
      if (player.status == "playing") {
        console.log(player.stats());
      }
    });
    console.log("---------------------------------------------------------");
  };

  menu = (player) => {
    console.log(`What do you want to do ${player.name} ?`);
    console.log("1 : Attack");
    console.log(`2 : Use ${player.capacityName()}`);
    console.log("3 : Watch players stats");
    let menuChoice = prompt("Enter your choice number");
    let run = false;
    while (!run) {
      switch (menuChoice) {
        case "1":
          run = true;
          console.log("On witch player do you want to lunch your attack ?");
          let attackOn = this.selectEnemy(player);
          player.dealDammage(attackOn);
          break;

        case "2":
          run = true;
          player.capacity();
          break;

        case "3":
          this.watchStats();
          console.log(`What do you want to do ${player.name} ?`);
          console.log("1 : Attack");
          console.log(`2 : Use ${player.capacityName()}`);
          console.log("3 : Watch players stats");
          menuChoice = prompt("Enter your choice number");
          break;

        default:
          menuChoice = prompt(
            "Unavailable choice, please enter a valide number"
          );
          break;
      }
    }
  };

  selectEnemy = (player) => {
    let enemies = this.players.slice();
    let playerPosition = enemies.indexOf(player);
    enemies.splice(playerPosition, 1);
    let index = 1;
    enemies.forEach((enemy) => {
      console.log(`${index} : on ${enemy.stats()}`);
      enemy.select = index;
      index += 1;
    });
    let attackChoice = prompt("Enter your choice number");

    let run = false;

    while (!run) {
      for (let i = 0; i < enemies.length; i++) {
        const enemy = enemies[i];
        if (enemy.select == attackChoice) {
          run = true;
          return enemy;
        }
      }
      if (!run) {
        attackChoice = prompt(
          "Unavailable choice, please enter a valide number"
        );
      }
    }
  };
}
