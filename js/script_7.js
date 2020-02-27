function acneBot(){
  let speaker = "";
  while (speaker !== "Q") {
    speaker = prompt("Dites quelques choses à l'Acné-bot (Q pour quitter)");
    console.log(`Vous : \"${speaker}\"`)
    if (speaker.includes("Fornite")) {
    console.log("Acné-Bot : \"on s' fait une partie soum-soum ?\"");
    } else if (speaker[speaker.length - 1] == "?") {
      console.log("Acné-Bot : \"Ouais ouais...\"");
    } else if (speaker === "Q") {
      console.log("Acné-Bot : \"Ciao boloss\"");
    } else if (speaker === "") {
      console.log("Acné-Bot : \"t'es en PLS ?\"");
    } else if (speaker == 0) {
      console.log("\n\n  |-------------------------------------------------------------|");
      console.log('  | "...zZzzz..zZzz...zZz...Hum ?! what ! Du JavaScript ?!      |');
      console.log("  | Pourquoi pas après tout... Courage moussaillon !            |");
      console.log('  |-------------------------------------------------------------|');
      console.log('                                           |');
      console.log('                                           |');
      console.log('                                           |_____________   _/)/)');
      console.log('                                                           (-.- )');
      console.log("                                                         (\")(\")_o\n");
    } else if (speaker == speaker.toUpperCase()) {
      console.log("Acné-Bot : \"Pwa, calme-toi...\"");
    } else {
      console.log("Acné-Bot : \"balek\"");
    }
  }
}


acneBot();
