class Character {
  constructor(
    name = "",
    hp = 20,
    mana = 10,
    attack = 5,
    defense = 0,
    status = "playing",
    select = ""
  ) {
    this.name = name;
    this.hp = hp;
    this.maxHp = hp;
    this.mana = mana;
    this.maxMana = mana;
    this.attack = attack;
    this.defense = defense;
    this.status = status;
    this.select = select;
  }

  stats = () => {
    let { name, hp, maxHp, mana, maxMana, attack, defense } = this;
    return ` ${name} : ${hp}/${maxHp} HP | ${mana}/${maxMana} Mana | ${attack} Atk | ${defense} Def`;
  };

  takeDammage = (fromPlayer, damage) => {
    let getDamage = damage - this.defense;
    if (getDamage < 0) {
      getDamage = 0;
    }
    this.hp -= getDamage;
    console.log(`${this.name} lose ${getDamage} health points !`);
    if (this.hp <= 0) {
      console.log(`${this.name} is dead`);
      this.select = "";
      this.status = "loser";
      fromPlayer.isTheKiller();
      game.playersStillAlive();
    }
  };

  isTheKiller = () => {
    if (this.hp <= 0) {
      return console.log(`${this.name} kill himself with is own attack...`);
    }

    console.log(`${this.name} won 20 mana`);
    if (this.mana + 20 > this.maxMana) {
      this.mana = this.maxMana;
    } else {
      this.mana += 20;
    }
    if (this instanceof Berzerker) {
      console.log(`...but ${this.name} is a Berzerker so he don't give a fuck`);
    }
  };

  dealDammage = (toEnemy) => {
    console.log(`--> ${this.name} attack ${toEnemy.name} !`);
    toEnemy.takeDammage(this, this.attack);
  };
}
