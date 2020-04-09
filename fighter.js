class Fighter extends Character {
  constructor(
    darkvision = false,
    name = "Grace",
    hp = 12,
    mana = 40,
    attack = 4,
    defense,
    status,
    select
  ) {
    super(name, hp, mana, attack, defense, status, select);
    this.darkvision = darkvision;
  }

  initStats = () => {
    if (this.darkvision) {
      console.log(
        `${this.name} has +2 in defense on this turn because of his Darkvision`
      );
      this.defense += 2;
      this.darkvision = false;
    }
  };

  endStats = () => {
    if (this.defense > 0) {
      console.log(`${this.name} defense go back to his initial state`);
      this.defense = 0;
    }
  };

  capacityName = () => {
    return "Darkvision (20 mana)";
  };

  capacity = () => {
    if (this.mana < 20) {
      return console.log("You can't use Darkvision with so few mana");
    }

    let damage = 5;
    console.log("On witch player do you want to lunch your Darkvision ?");
    let victim = game.selectEnemy(this);
    console.log(`${this.name} use Darkvision on ${victim.name}`);
    victim.takeDammage(this, damage);
    this.mana -= 20;
    this.darkvision = true;
  };
}
