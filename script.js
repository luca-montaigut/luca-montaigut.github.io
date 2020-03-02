// Fonctionnalité 1
let footer = document.getElementsByTagName('footer')[0];
let click = 0;

footer.addEventListener("click", function () {
  click++
  console.log(`clic numéro ${click}`);
});

// Fonctionnalité 2
let button = document.getElementsByTagName('button')[0];

button.addEventListener("click", function () {
  document.getElementById('navbarHeader').classList.toggle("collapse");
});


// Fonctionnalité 3
let edit = document.querySelectorAll('.btn-outline-secondary')[0];
let card = document.querySelectorAll('.card-text')[0];

edit.addEventListener("click", function () {
  card.style.color = "red";
});

// Fonctionnalité 4
let edit2 = document.querySelectorAll('.btn-outline-secondary')[1];
let card2 = document.querySelectorAll('.card-text')[1];

edit2.addEventListener("click", function () {
  if (card2.style.color === "") {
    card2.style.color = "green";
  } else {
    card2.style.color = "";
  }
});

// Fonctionnalité 5 
let navbar = document.getElementsByTagName('header')[0];
let bootstrap = document.getElementsByTagName('link')[0];

navbar.addEventListener('dblclick', function() {
  if (bootstrap.getAttribute('href') !== null) {
    bootstrap.removeAttribute('href');
  } else {
    bootstrap.setAttribute('href', "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css");
  }
});

// Fonctionnalité 6
let view = document.querySelectorAll('.btn-success');
let text = document.querySelectorAll('.card-text');
let img =  document.querySelectorAll('.card-img-top');

for (let i = 0; i < view.length; i++) {
  view[i].addEventListener('mouseover', function() {
    if (text[i].style.display !== "none") {
      img[i].style.width = "20%";
      text[i].style.display = "none";
    } else {
      img[i].style.width = "100%";
      text[i].style.display = "";
    }
  });
}

// Fonctionnalité 7
let parent = document.querySelector('.album .row');
let btn = document.querySelector('section .btn-secondary');

btn.addEventListener("click", function(e) {
  e.preventDefault();
  parent.insertBefore(parent.lastElementChild, parent.firstElementChild);
})


// Fonctionnalité 8
let btn2 = document.querySelector('section .btn-primary');

btn2.removeAttribute("href")

btn2.addEventListener("click", function(e) {
  e.preventDefault();
  parent.insertBefore(parent.firstElementChild, parent.lastElementChild.nextSibling);
})


// Fonctionnalité 9
function action() {
  if (window.getSelection().anchorNode !== null) {
    if (window.getSelection().anchorNode.data === "JS & Events"){
      console.log("Bienvenu sur le cheatcode : \nPressez a / y / p ou b and enjoy !")
      addEventListener('keypress', function(e) {
        console.log(`${e.code}`);
        switch (e.code) {
          case 'KeyQ':
            document.body.className = "";
            document.body.classList.add('col-4');
            break;
          case 'KeyY':
            document.body.className = "";
            document.body.classList.add('col-4', 'offset-4');
            break;
          case 'KeyP':
            document.body.className = "";
            document.body.classList.add('col-4', 'offset-8');
            break;
          case 'KeyB':
            document.body.className = "";
            break;
          default:
            break;
        }
      })
    }
  }
}

addEventListener('mouseup', action)
