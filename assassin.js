class Assassin extends Character {
  constructor(
    dagger = false,
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
    this.dagger = dagger;
    this.victim = victim;
  }

  initStats = () => {
    if (this.dagger) {
      console.log(
        `${this.name} has invincibility on this turn because of his Dagger`
      );
      this.defense += 999;
      this.dagger = false;
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

    /////SELECT ADVERSAIRE and put it on this.victim
    console.log(
      `${this.name} use Dagger and make a plan to kill someone on next turn`
    );
    this.mana -= 20;
    this.dagger = true;
  };

  daggerAttack = () => {
    let damage = 7;
    //////Attck this.victime, if this.victim != kill => takedamage(this, damage)
  };
}
