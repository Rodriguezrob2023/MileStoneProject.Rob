// Questions for the Sport trivia game that I'm asking the User/Player to answer.

let questions = [
  {
    question: "How many championships has Kobe Bryant won?",
    answers: [
      { text: "5", correct: true },
      { text: "4", correct: false },
      { text: "2", correct: false },
      { text: "1", correct: false },
    ],
  },
  {
    question: "What year was the Vegas Golden Knights founded?",
    answers: [
      { text: "2021", correct: false },
      { text: "2020", correct: false },
      { text: "2018", correct: false },
      { text: "2017", correct: true },
    ],
  },
  {
    question: "What year did the Las Vegas Aces win the championship?",
    answers: [
      { text: "2000", correct: false },
      { text: "2022", correct: true },
      { text: "2016", correct: false },
      { text: "2018", correct: false },
    ],
  },
  {
    question: "What year did Steph Curry get drafted?",
    answers: [
      { text: "2007", correct: false },
      { text: "2009", correct: true },
      { text: "2010", correct: false },
      { text: "2003", correct: false },
    ],
  },
  {
    question: "How many Super Bowl rings does Tom Brady have?",
    answers: [
      { text: "7", correct: true },
      { text: "9", correct: false },
      { text: "10", correct: false },
      { text: "3", correct: false },
    ],
  },
  {
    question: "What's the longest field goal in NFL history?",
    answers: [
      { text: "62 yards", correct: false },
      { text: "63 yards", correct: false },
      { text: "64 yards", correct: true },
      { text: "52 yards", correct: false },
    ],
  },
  {
    question: "Who has the best record in PGA history?",
    answers: [
      { text: "Byron Nelson", correct: false },
      { text: "Billy Casper", correct: false },
      { text: "Tiger Woods", correct: true },
      { text: "Ben Hogan", correct: false },
    ],
  },
  {
    question: "How many times have the Vegas Golden Knights been to the Stanley Cup Finals?",
    answers: [
      { text: "1", correct: false },
      { text: "3", correct: false },
      { text: "5", correct: false },
      { text: "2", correct: true },
    ],
  },
  {
    question: "What year did Oakland Raiders become the Las Vegas Raiders?",
    answers: [
      { text: "2022", correct: false },
      { text: "2020", correct: true },
      { text: "2021", correct: false },
      { text: "2019", correct: false },
    ],
  },
  {
    question: "What year was the Las Vegas Aviators founded?",
    answers: [
      { text: "1983", correct: true },
      { text: "1973", correct: false },
      { text: "1980", correct: false },
      { text: "1985", correct: false },
    ],
  },

];

// Variables that are defining the elements --QUESTION/ANSWER/NEXT---

let questionElement = document.getElementById("question");
let answerButtonElement = document.getElementById("answer-buttons");
let nextButton = document.getElementById("next-btn");

//

let currentQuestionIndex = 0;
let score = 0;

// 


function startGame() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    let button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    button.addEventListener("click", selectAnswer);
    answerButtonElement.appendChild(button);
  });

  nextButton.style.display = "none";
}

function resetState() {
  nextButton.style.display = "none";
  answerButtonElement.innerHTML = "";
}

function selectAnswer(event) {
  let selectedButton = event.target;
  let currentQuestion = questions[currentQuestionIndex];

  if (selectedButton.innerHTML === currentQuestion.answers.find((answer) => answer.correct).text) {
    score++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionElement.innerHTML = "Quiz completed! Your score: " + score + " out of " + questions.length;
  nextButton.innerHTML ="Quiz completed! Your score: " + score + " out of " + questions.length;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

startGame();
nextButton.addEventListener("click", function () {
  if (currentQuestionIndex === questions.length) {
    startGame();
  } else {
    showQuestion();
  }
});