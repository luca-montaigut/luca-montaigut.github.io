class Healer extends Character {
  constructor(
    name = "Moana",
    hp = 8,
    mana = 200,
    attack = 2,
    defense,
    status,
    select
  ) {
    super(name, hp, mana, attack, defense, status, select);
  }

  initStats = () => {};
  endStats = () => {};

  capacityName = () => {
    return "Heal (25 mana)";
  };

  capacity = () => {
    let heal = 8;
    if (this.mana < 25) {
      return "Vous n'avez plus assez de mana";
    }
    if (this.hp + heal >= this.maxHP) {
      console.log(`${this.name} a regagné tous ses points de vie`);
      this.hp = maxHp;
    } else {
      console.log(`${this.name} se soigne et gagne ${heal} points de vie`);
      this.hp += heal;
    }
    this.mana -= 25;
  };
}

const getRandomIntInclusive = (min = 1, max = 49) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
