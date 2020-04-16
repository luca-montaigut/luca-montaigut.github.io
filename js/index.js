let token;
let submit = document.getElementById("submit");
let api = document.getElementById("apikey");
let selector = document.getElementById("movie");

const showMore = (code, plot) => {
  let modal = document.getElementById(`${code}`);
  document.querySelector(`#${code} .plot`).innerHTML = plot;
  modal.style.display = "block";
  //close modal with close-cross or with a click on outside of it
  let span = document.querySelector(`#${code} .close`).firstChild;
  span.addEventListener("click", () => {
    modal.style.display = "none";
  });
  window.addEventListener("click", () => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
};

const readMore = (film) => {
  console.log(film);
  let code = film.target.dataset.code;
  const URL_MOVIE = `http://www.omdbapi.com/?apikey=${token}&i=${code}`;
  fetch(URL_MOVIE)
    .then((response) => response.json())
    .then((response) => {
      showMore(code, response.Plot);
    })
    .catch((error) => console.error(error));
};

const showMovie = (selector, name, year, poster, code) => {
  selector.innerHTML += `
    <div class="row border">
      <div class="col-3 d-flex justify-content-center align-items-center">  
      <img class="small-img" src="${poster}" alt="">
      </div>
      <div class="col-9 d-flex flex-column justify-content-center">
        <h2>${name.toUpperCase()}</h2>
        <p><b>${year}</b></p>
        <div>
          <input type="submit" data-code="${code}" value="Read more" class="btn btn-info">
        </div>
      </div>
    </div>
    <!-- The Modal -->
    <div id="${code}" class="modal">
      <div class="modal-content">
        <span class="close"><i class="far fa-times-circle"></i></span>
        <div class="row">
          <div class="col-3 d-flex justify-content-center align-items-center">  
            <img src="${poster}" alt="">
          </div>
          <div class="col-9 d-flex flex-column justify-content-center">
            <h2><b>${name.toUpperCase()}</b></h2>
            <p>${year}</p>
            <p class="plot"></p>
          </div>
        </div>
      </div>
    </div> 
`;
};

const searchMovies = () => {
  selector.innerHTML = "";
  if (token == null) {
    alert("Please enter a valid API Key first");
    return false;
  }
  let finder = document.getElementById("findmovie").value;
  let URL = `http://www.omdbapi.com/?apikey=${token}&s=${finder}`;
  fetch(URL)
    .then((response) => response.json())
    .then((response) => {
      selector.innerHTML = "";
      response.Search.forEach((response) => {
        showMovie(
          selector,
          response.Title,
          response.Year,
          response.Poster,
          response.imdbID
        );
      });
      document.querySelectorAll("#movie input").forEach((readmore) => {
        readmore.addEventListener("click", readMore);
      });
    })
    .then(() => look())
    .catch((error) => {
      console.error(error);
      selector.innerHTML += `
        <div class="text-center mt-5">
          <b>No movie fill your reseach, please try something else</b>
        </div>`;
    });
};

submit.addEventListener("click", searchMovies);

const getApi = () => {
  token = prompt("Please enter your API Key from OMDb");
  if (token == null) {
    return false;
  }
  let URL = `http://www.omdbapi.com/?apikey=${token}&s=batman`;
  fetch(URL)
    .then((response) => response.json())
    .then((response) => {
      selector.innerHTML = "";
      response.Search.forEach((response) => {
        console.log("API Key Valid");
      });
      alert("Valid API Key, you can use seach engine now");
    })
    .catch((error) => {
      console.error(error);
      alert("Wrong API key");
      token = null;
    });
};

apikey.addEventListener("click", getApi);

// Lauch seach on Enter keypress in the form
document.querySelector(".form-control").addEventListener("keypress", (e) => {
  if (e.code == "Enter") {
    searchMovies();
  }
});
