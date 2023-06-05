let questions = [
{
question: "Inside which HTML element do we put the JavaScript?",
  answers: [
    { text: "<js>", correct: False},
    { text: "<script>", correct: True},
    { text: "<scripting>", correct: False},
    { text: "<javascript>", correct: False},
]
},
{
    question: "How do you write "Hello World" in an alert box?" ,
  answers: [
    { text: "alert("Hello World")", correct: True},
    { text: "msgBox("Hello World")", correct: False},
    { text: "alerBox("Hello World")", correct: False},
    { text: "msg("Hello World")", correct: False},
]
},
{
    question: "How do you call a function named "myFunction"?" ,
    answers: [
      { text: "call myFunction()", correct: False},
      { text: "call function myFunction()", correct: False},
      { text: "myFunction()", correct: True},
      { text: "Whatsyourfunction()", correct: False},
  ]



},

    {
        question: "Which operator is used to assign a value to a variable"?", 
        answers: [
          { text: "-", correct: False},
           { text: "+", correct: False},
          { text: ";]", correct: False},
          { text: "=", correct: True},
      ]
    
    
    
    
}
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