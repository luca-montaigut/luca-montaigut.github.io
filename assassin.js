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
      return "You can't use Dagger with so few mana";
    }
    this.victim = game.selectEnemy();
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
    this.dealDammage(this.victim);
    if (game.players.includes(this.victim)) {
      console.log(
        `${this.name}'s plan fail and he get hurt and lose ${damage} health points`
      );
      this.takeDammage(this, damage);
    }
    this.victim = "";
  };
}
