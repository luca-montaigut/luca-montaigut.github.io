class Assassin extends Character {
  constructor(
    victim = "",
    name = "Carl",
    hp = 6,
    mana = 20,
    attack = 6,
    defense,
    status,
    select
  ) {
    super(name, hp, mana, attack, defense, status, select);
    this.victim = victim;
  }

  initStats = () => {
    if (this.victim != "") {
      console.log(
        `${this.name} has invincibility on this turn because of his Dagger`
      );
      this.defense += 999;
    }
  };

  endStats = () => {
    if (this.defense > 0) {
      console.log(`${this.name} defense go back to his initial state`);
      this.defense = 0;
    }
  };

  capacityName = () => {
    return "Dagger (20 mana)";
  };

  capacity = () => {
    if (this.mana < 20) {
      return console.log("You can't use Dagger with so few mana");
    }
    console.log("On witch player do you want to lunch your Dagger ?");
    this.victim = game.selectEnemy(this);
    console.log(
      `${this.name} use Dagger and make a plan to kill someone on next turn`
    );
    this.mana -= 20;
  };

  daggerAttack = () => {
    let damage = 7;
    console.log(
      `${this.name} finaly appli his killing plan on ${this.victim.name}`
    );

    if (this.victim.status == "loser") {
      return console.log("... but someone was faster than him !");
    }

    this.victim.takeDammage(this, damage);
    if (game.players.includes(this.victim)) {
      console.log(
        `${this.name}'s plan fail ${this.victim.name} is still alive, he get hurt and lose ${damage} health points`
      );
      this.hp -= damage;
      if (this.hp <= 0) {
        console.log(`${this.name} kill himself with is own attack...`);
        this.select = "";
        this.status = "loser";
        game.playersStillAlive();
      }
    }
    this.victim = "";
  };
}
