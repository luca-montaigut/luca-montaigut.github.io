speaker = ""

while (speaker !== "Q") {
  speaker = prompt("Dites quelques choses à l'Acné-bot (Q pour quitter)")
  if (speaker[speaker.length - 1] == "?") {
    console.log("Ouais ouais...")
  } else if (speaker === "Q") {
    console.log("Ciao boloss")
  } else if (speaker === "") {
    console.log("t'es en PLS ?")
  } else if (speaker == speaker.toUpperCase()) {
    console.log("Pwa, calme-toi...")
  } else if (speaker.includes("Fornite")) {
    console.log("on s' fait une partie soum-soum ?")
  } else {
    console.log("balek")
  }
}
