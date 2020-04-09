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

    /////SELECT ADVERSAIRE
    console.log(`${this.name} use Lighting ..........`);

    if (this.hp + heal >= this.maxHP) {
      console.log(`${name} a regagné tous ses points de vie`);
      this.hp = maxHp;
    } else {
      this.hp += heal;
    }
    this.mana -= 40;
  };
}
