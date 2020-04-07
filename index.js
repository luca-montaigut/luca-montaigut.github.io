const getRandomIntInclusive = (min = 1, max = 49) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const loto = () => {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let email = document.getElementById("email").value;
  let number1 = document.getElementById("number1").value;
  let number2 = document.getElementById("number2").value;
  let number3 = document.getElementById("number3").value;
  let number4 = document.getElementById("number4").value;
  let number5 = document.getElementById("number5").value;
  let number6 = document.getElementById("number6").value;
  let ticket =
    number1 +
    "/" +
    number2 +
    "/" +
    number3 +
    "/" +
    number4 +
    "/" +
    number5 +
    "/" +
    number6;

  checkLoto(fname, lname, email, ticket);
};

const checkLoto = (fname, lname, email, ticket) => {
  if (fname == "") {
    alert("Veuillez fournir un prénom");
    return false;
  }

  if (lname == "") {
    alert("Veuillez fournir un nom");
    return false;
  }

  if (email == "") {
    alert("Veuillez fournir un email");
    return false;
  }

  let emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,3})$/;

  if (!email.match(emailRegex) || email.length < 8 || email.length > 30) {
    alert(
      "Votre email n'est pas valide (8 à 30 caratères + @ + . + 2 ou 3 lettre après le point)"
    );
    return false;
  }

  if (ticket != winner) {
    alert(
      `Désolé vous avez perdu, les nombres gagnants sont : ${winNumber1}, ${winNumber2}, ${winNumber3}, ${winNumber4}, ${winNumber5}, ${winNumber6}`
    );
    return false;
  } else {
    alert("Félicitations vous avez gagné 1 million !!!!!");
    document.getElementById("lazytalk").innerHTML =
      "Vas y partage frère, fait pas le racro !";
    document.getElementById(
      "lazytalk2"
    ).innerHTML = `Je te mets un petit MJ pour le kiff ;)`;
    document.getElementById("music").currentTime = 16;
    document.getElementById("music").play();
    document.getElementById("music").style.display = "flex";
    document.body.style.backgroundImage = "url('money.webp')";
  }
};

const winNumber1 = String(getRandomIntInclusive());
const winNumber2 = String(getRandomIntInclusive());
const winNumber3 = String(getRandomIntInclusive());
const winNumber4 = String(getRandomIntInclusive());
const winNumber5 = String(getRandomIntInclusive());
const winNumber6 = String(getRandomIntInclusive());

const winner =
  winNumber1 +
  "/" +
  winNumber2 +
  "/" +
  winNumber3 +
  "/" +
  winNumber4 +
  "/" +
  winNumber5 +
  "/" +
  winNumber6;

console.log(`Les numéros gagnant sont : ${winner}`);
document.getElementById("submit").addEventListener("click", loto);

///////// Easter Egg ///////////
const lazytalk = () => {
  if (
    document.getElementById("lazytalk2").innerHTML ==
    "Maintenant laisse moi pioncer..."
  ) {
    document.getElementById("lazytalk").innerHTML = "ZzzZzz... zZz...";
    document.getElementById("lazytalk2").innerHTML = `...Zzz...`;
  } else {
    document.getElementById(
      "lazytalk"
    ).innerHTML = `Frère, les numéros gagnants c'est :\n${winNumber1}, ${winNumber2}, ${winNumber3}, ${winNumber4}, ${winNumber5}, ${winNumber6}`;
    document.getElementById(
      "lazytalk2"
    ).innerHTML = `Maintenant laisse moi pioncer...`;
  }
};

document.getElementById("lazyrabbit").addEventListener("click", lazytalk);
