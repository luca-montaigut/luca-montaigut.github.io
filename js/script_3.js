function pyramid(etage){
  let i = 1;
  if (etage == 0) {
    return console.log("Aucun étage");
  } else {
    while (i != (etage+1)) {
      if ((etage-i) < 0) {
        break;
      }
      console.log(`${" ".repeat(etage-i) + "#".repeat(i)}`);
      i++;
    }
  }
}


console.log("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
nombre = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
pyramid(nombre);