let questions = [
{
question: "How many championships has Kobe Bryant won?",
  answers: [
    { text: "4", correct: False },
    { text: "5", correct: True },
    { text: "2", correct: False },
    { text: "1", correct: False },
],
},
{
    question: "What year was the Vegas Golden Knights founded?" ,
  answers: [
    { text: "2017", correct: True },
    { text: "2018", correct: False },
    { text: "2020", correct: False },
    { text: "2021", correct: False },
],
},
{
    question: "What year did the Las Vegas Aces win the championship?" ,
    answers: [
      { text: "2000", correct: False },
      { text: "2016", correct: False },
      { text: "2022", correct: True },
      { text: "2018", correct: False },
  ],
},
{
        question: "What year did Steph Curry get drafted?", 
        answers: [
          { text: "2007", correct: False},
           { text: "2008", correct: False},
          { text: "2006", correct: False},
          { text: "2009", correct: True},
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
      question: "How many Super Bowl rings does Tom Brady have?",
      answers: [
        { text: "7", correct: true },
        { text: "9", correct: false },
        { text: "10", correct: false },
        { text: "3", correct: false },
      ],
    },
];


let questionElement= document.getElementById("question");
let answerButton = document.getElementById("answer-buttons");
let nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startGame(){
currentQuestionIndex = 0;
score = 0;
nextButton.innerHTML = "Next";
showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + " . " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
      let button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      answerButton.appendChild(button);
    });
}

function resetState(){
nextButton.style.display = "none"

}

startGame();