let URL;
let title = document.querySelector("h1");
let insert = document.getElementById("quizz");
let next = document.querySelector(".btn");
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

const getQuizz = () => {
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
    insert.innerHTML += `<br>  
      <div class='row' style="height: 30vh;">
        <div class='col d-flex flex-column'>
          <p class='my-4 btn btn-outline-danger'>True</p>
        </div>
        <div class='col d-flex flex-column'>
          <p class='my-4 btn btn-outline-danger'>False</p>
        </div>
      </div>`;
  }
  if (currentQuestion.type === "multiple") {
    let multiple = [
      currentQuestion.correct_answer,
      currentQuestion.incorrect_answers[0],
      currentQuestion.incorrect_answers[1],
      currentQuestion.incorrect_answers[2],
    ];
    shuffleArray(multiple);
    insert.innerHTML += `  <br>  
    <div class='row' style="height: 30vh;">
      <div class='col d-flex flex-column'>
        <p class="my-2 btn btn-outline-danger">${multiple[0]}</p>
        <p class="my-2 btn btn-outline-danger">${multiple[1]}</p>
      </div>
      <div class='col d-flex flex-column'>
        <p class="my-2 btn btn-outline-danger">${multiple[2]}</p>
        <p class="my-2 btn btn-outline-danger">${multiple[3]}</p>
      </div>
    </div>`;
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
};

const gameResult = () => {
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === userAnswers[i]) {
      userResults.push("<i class='far fa-check-circle'></i>");
      userPoints += 1;
    } else {
      userResults.push("<i class='far fa-times-circle'></i>");
    }
  }
};

const howManyQuestion = () => {
  title.innerHTML = `Trivia THP Next`;
  insert.innerHTML = ``;
  insert.innerHTML = `
  <h3 class="text-center">How many question(s) do you want to answer ?</h3>
  <div class="form-inline justify-content-center">
    <input type="number" class="form-control pl-5" value="5">
    <p id="launch" class="mx-5 my-5 btn btn-danger btn-lg">Go !</p>  
  </div>
  `;
  document.getElementById("launch").addEventListener("click", () => {
    chosenNumber = document.querySelector("input").value;
    URL = `https://opentdb.com/api.php?amount=${chosenNumber}`;
    getQuizz();
  });
};

howManyQuestion();
