let title = document.querySelector("h1");
let insert = document.getElementById("quizz");
let quizz;
let answers = new Array();
let userAnswers = new Array();
let userResults = new Array();
let userPoints = 0;
let questionNumber = 0;

const animate = (move) =>
  anime({
    targets: "#qblock",
    translateX: move,
    duration: 400,
    easing: "linear",
  });

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const howManyQuestions = () => {
  title.innerHTML = `Trivia THP Next`;
  insert.innerHTML = ``;
  insert.innerHTML = `
  <h3 class="text-center">Setup your game and let's begin !</h3>
  <div class="form-inline justify-content-center"> 
    <label for="number">Number of question(s)  </label>
    <select id="number" name="level" class="form-control mx-3">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5" selected="selected">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
      <option value="11">11</option>
      <option value="12">12</option>
      <option value="13">13</option>
      <option value="14">14</option>
      <option value="15">15</option>
      <option value="16">16</option>
      <option value="17">17</option>
      <option value="18">18</option>
      <option value="19">19</option>
      <option value="20">20</option>
    </select>
    <label for="category">of</label>
    <select id="category" name="category" class="form-control mx-3">
      <option value="9">General Knowledge</option>
      <option value="10">Entertainment: Books</option>
      <option value="11">Entertainment: Film</option>
      <option value="12">Entertainment: Music</option>
      <option value="13">Entertainment: Musicals &amp; Theatres</option>
      <option value="14">Entertainment: Television</option>
      <option value="15">Entertainment: Video Games</option>
      <option value="16">Entertainment: Board Games</option>
      <option value="17">Science &amp; Nature</option>
      <option value="18">Science: Computers</option>
      <option value="19">Science: Mathematics</option>
      <option value="20">Mythology</option>
      <option value="21">Sports</option>
      <option value="22">Geography</option>
      <option value="23">History</option>
      <option value="24">Politics</option>
      <option value="25">Art</option>
      <option value="26">Celebrities</option>
      <option value="27">Animals</option>
      <option value="28">Vehicles</option>
      <option value="29">Entertainment: Comics</option>
      <option value="30">Science: Gadgets</option>
      <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
      <option value="32">Entertainment: Cartoon &amp; Animations</option>
    </select>
    <select id="level" name="level" class="form-control">
      <option value="easy">Easy</option>
      <option value="medium">Medium</option>
      <option value="hard">Hard</option>
    </select>
    <p id="launch" class="mx-5 my-5 btn btn-danger btn-lg">Go !</p>  
  </div>
  `;
  document.getElementById("launch").addEventListener("click", () => {
    chosenNumber = document.getElementById("number").value;
    chosenCategory = document.getElementById("category").value;
    chosenLevel = document.getElementById("level").value;
    let URL = `https://opentdb.com/api.php?amount=${chosenNumber}&category=${chosenCategory}&difficulty=${chosenLevel}`;
    getQuizz(URL);
  });
};

const getQuizz = (URL) => {
  fetch(URL)
    .then((response) => response.json())
    .then((response) => {
      quizz = response.results;
      quizz.forEach((question) => {
        answers.push(question.correct_answer);
      });
      displayQuestion();
    })
    .catch((error) => console.error(error));
};

const displayQuestion = () => {
  title.innerHTML = `Question ${questionNumber + 1} / ${quizz.length}`;
  let currentQuestion = quizz[questionNumber];
  insert.innerHTML = "";
  animate([-2000, 0]);
  insert.innerHTML = `<h2 class="mb-3">${currentQuestion.question}</h2>`;
  if (currentQuestion.type === "boolean") {
    insert.innerHTML += `
    <br>  
      <div class='row' style="height: 30vh;">
        <div class='col d-flex flex-column'>
          <p class='my-4 btn btn-outline-danger'>True</p>
        </div>
        <div class='col d-flex flex-column'>
          <p class='my-4 btn btn-outline-danger'>False</p>
        </div>
      </div>
      `;
  }
  if (currentQuestion.type === "multiple") {
    let multiple = [
      currentQuestion.correct_answer,
      currentQuestion.incorrect_answers[0],
      currentQuestion.incorrect_answers[1],
      currentQuestion.incorrect_answers[2],
    ];
    shuffleArray(multiple);
    insert.innerHTML += `
    <br>  
    <div class='row' style="height: 30vh;">
      <div class='col d-flex flex-column'>
        <p class="my-2 btn btn-outline-danger">${multiple[0]}</p>
        <p class="my-2 btn btn-outline-danger">${multiple[1]}</p>
      </div>
      <div class='col d-flex flex-column'>
        <p class="my-2 btn btn-outline-danger">${multiple[2]}</p>
        <p class="my-2 btn btn-outline-danger">${multiple[3]}</p>
      </div>
    </div>
    `;
  }

  document.querySelectorAll(".btn-outline-danger").forEach((userAnswers) => {
    userAnswers.addEventListener("click", selectAnswer);
  });
};

const selectAnswer = (e) => {
  userAnswers.push(e.target.innerHTML);
  questionNumber += 1;
  animate([0, 2000]);
  setTimeout(() => {
    if (questionNumber >= quizz.length) {
      return endGame();
    }
    displayQuestion();
  }, 400);
};

const endGame = () => {
  gameResult();
  title.innerHTML = `Your result : ${userPoints}/${quizz.length}`;
  setTimeout(() => {
    document.getElementById("qblock").style.transform = "translateX(0px)";
  }, 50);
  insert.innerHTML = `
  <table class="table table-bordered">
    <thead class="thead-light">
      <th>Question</th>
      <th>Answer</th>
      <th>Your answer</th>
      <th>Result</th>
    </thead>
    <tbody  id="result">
    </tbody>
  </table>`;
  for (let i = 0; i < quizz.length; i++) {
    console.log(i);
    document.getElementById("result").innerHTML += `
    <tr>
      <td>${quizz[i].question}</td>
      <td>${answers[i]}</td>
      <td>${userAnswers[i]}</td>
      <td>${userResults[i]}</td>
    </tr>
    `;
  }
  insert.innerHTML += `<p id="restart" class="mx-5 mt-5 mb-2 btn btn-danger btn-lg">Play again ?</p>`;
  document.getElementById("restart").addEventListener("click", playAgain);
};

const gameResult = () => {
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === userAnswers[i]) {
      userResults.push("<i class='far fa-check-circle fa-lg'></i>");
      userPoints += 1;
    } else {
      userResults.push("<i class='far fa-times-circle fa-lg'></i>");
    }
  }
};

const playAgain = () => {
  answers = new Array();
  userAnswers = new Array();
  userResults = new Array();
  userPoints = 0;
  questionNumber = 0;
  howManyQuestions();
};

howManyQuestions();
