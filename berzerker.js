class Berzerker extends Character {
  constructor(
    name = "Draven",
    hp = 8,
    mana = 0,
    attack = 4,
    defense,
    status,
    select
  ) {
    super(name, hp, mana, attack, defense, status, select);
  }

  initStats = () => {};
  endStats = () => {};

  capacityName = () => {
    return "Rage (1 hp)";
  };

  capacity = () => {
    if (this.hp == 1) {
      return console.log("You can't use Rage with so few hp");
    }

    console.log(
      `${this.name} go to Rage mode and won 1 attack point. But is madness cost him 1 health point too.`
    );
    this.hp -= 1;
    this.attack += 1;
  };
}
