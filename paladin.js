class Paladin extends Character {
  constructor(
    name = "Ulder",
    hp = 16,
    mana = 160,
    attack = 3,
    defense,
    status,
    select
  ) {
    super(name, hp, mana, attack, defense, status, select);
  }

  initStats = () => {};
  endStats = () => {};

  capacityName = () => {
    return "Lighting (40 mana)";
  };

  capacity = () => {
    if (this.mana < 40) {
      return "You can't use Lighting with so few mana";
    }

    let damage = 4;
    let heal = 5;
    console.log("On witch player do you want to lunch your Ligthing ?");
    let victim = game.selectEnemy();
    console.log(`${this.name} use Lighting on ${victim.name}`);

    if (this.hp + heal >= this.maxHP) {
      console.log(`${name} is fully heal by Lighting`);
      this.hp = maxHp;
    } else {
      console.log(`${name} is heal of ${heal} health points by Lighting`);
      this.hp += heal;
    }
    this.mana -= 40;
  };
}
