
var startButton = document.querySelector(".start");
var quizContainer = document.querySelector(".quiz");
var questionEl = document.querySelector(".question");
var answerEl = document.querySelector(".answer");
var olEl = document.querySelector('.choices');
var resultEl = document.querySelector('.result');
var scoreEl = document.querySelector('.score');
var scoreTotal = 0;

var previousScore = document.querySelector(".previous-scores");
var playAgain = document.querySelector('.play-again');
var timerContainer = document.querySelector(".card");
var index = 0;
var secondsLeft = 45;
var timerEl = document.querySelector(".timer-count");
var overEl = document.querySelector('.over')

var submitButton = document.getElementById('submitButton');

var questions = [
  {
    title: 'Commonly used data types DO NOT include:',
    choices: ['strings', 'booleans', 'alerts', 'numbers',],
    answer: 'alerts',
  },
  {
    title: 'The condition in an if / else statement is enclosed within ____.',
    choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
    answer: 'parentheses',
  },
  {
    title: 'Arrays in JavaScript can be used to store ____.',
    choices: [
      'numbers and strings',
      'other arrays',
      'booleans',
      'all of the above',
    ],
    answer: 'all of the above',
  },
  {
    title:
      'String values must be enclosed within ____ when being assigned to variables.',
    choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
    answer: 'quotes',
  },
  {
    title:
      'A very useful tool used during development and debugging for printing content to the debugger is:',
    choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
    answer: 'console.log',
  },
];

function init() {
  getScoreInput();

}

function endQuiz() {

console.log("Quiz Over");
quizContainer.textContent = "";
timerContainer.textContent = "";
overEl.textContent = "Quiz Over!";
setScore()

}


function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft;
    if (secondsLeft === 0) {

      clearInterval(timerInterval);
      endQuiz()
      
    }

  }, 1000);
};


function startQuiz() {

 

  var li = document.createElement("li");
  var currentQuestion = questions[index];
  questionEl.textContent = currentQuestion.title;

  for (var i = 0; i < currentQuestion.choices.length; i++) {

    var choiceOption = currentQuestion.choices[i];
    var skip = document.createElement("br");
    var li = document.createElement("li");
    li.appendChild(skip);
    li.setAttribute("style", "list-style-type: numbers; display: inline-block; color: white; margin: 10px; border: 10px; padding: 10px; background-color: blue; border-radius: 25px")
    li.setAttribute("class", "list")
    li.textContent = choiceOption;
    olEl.appendChild(li);

  };

  var elements = document.querySelectorAll(".list");

  elements.forEach(function (element) {
    element.addEventListener("click", function (event) {


      if (event.target.textContent === questions[index].answer) {
        resultEl.textContent = "Correct"
        scoreTotal++;
      }
      else {
        resultEl.textContent = "Incorrect";
        secondsLeft -= 10;
      };

      if (index < 4) {
        index++;
        olEl.textContent = "";
        startQuiz();
        console.log(event.target.textContent)
        
      }
      else {
        
        endQuiz()
        
      };
      
      
     

    });
  });


};




function setScore() {
  scoreEl.textContent = "Final Score: " + scoreTotal;
  localStorage.setItem("score",scoreTotal);
};
function setInput() {
  var inputField = document.getElementById('myInput');
var enteredValue = inputField.value;
localStorage.setItem("inputValue",enteredValue);
  console.log(enteredValue);
}

function getScoreInput() {
  
  var storedScore = localStorage.getItem("score");
  var storedInput = localStorage.getItem("inputValue");

  var liEl = document.createElement("li");
  liEl.textContent = storedInput + ": " + storedScore
  previousScore.appendChild(liEl)

}


submitButton.addEventListener('click', function() {
  // Perform further actions with the entered value
  setInput();
  getScoreInput();
  
});


 startButton.addEventListener("click", function () {
  this.setAttribute("style", "display: none");
  startQuiz();
  setTime();

});

playAgain.addEventListener("click", function(){
  window.location.reload();
});

init()












