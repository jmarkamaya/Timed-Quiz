
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


var highScores = JSON.parse(window.localStorage.getItem("highScores")) || []; 

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
  showScore();
 }

function endQuiz() {

console.log("Quiz Over");
quizContainer.textContent = "";
timerContainer.textContent = "";
overEl.textContent = "Quiz Over!";
// setScore()
scoreEl.textContent = "Final Score: " + scoreTotal; 

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

//  showScore();
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
        resultEl.textContent = "Correct!"
        resultEl.setAttribute("style", "color: green; font-size: 25px;")
        scoreTotal++;
      }
      else {
        resultEl.textContent = "Incorrect!";
        resultEl.setAttribute("style", "color: red; font-size: 25px;")
        secondsLeft -= 10;
      };

      if (index < questions.length - 1) {
        index++;
        olEl.textContent = "";
        startQuiz();
        //console.log(event.target.textContent)
        
      }
      else {
        
        endQuiz()
        
      };
      
      
     

    });
  });


};



//would I need to do a .push? to have multiple scores scored. like an object with an array inside?
// so i would want to creat an object and then push the username and scores to that object? 
//so create an object in local storage and then push the inputs to it?
// then take the last 5 objects in that array and and push it to the dom?
//for each to add each new item to the array?


function setScore() {  
var inputField = document.getElementById('myInput');
var enteredValue = inputField.value;
var scoreObject = enteredValue + ": " + scoreTotal;
highScores.push(scoreObject);
localStorage.setItem("highScores", JSON.stringify(highScores));
};


function showScore() {

var storedScores = JSON.parse(localStorage.getItem("highScores"));

  for (var i = 0; i < storedScores.length; i++) {      // how to get the last 5? if i just do if i < 5 it will always show the same first 5 scores unless i refresh local storage.

  var liEl = document.createElement("li");
  liEl.textContent = storedScores[i];
  previousScore.appendChild(liEl);
  };
};


submitButton.addEventListener('click', function() {
  setScore();
  // showScore();
  window.location.reload();
});


 startButton.addEventListener("click", function () {
  this.setAttribute("style", "display: none");
  startQuiz();
  setTime();
});

// playAgain.addEventListener("click", function(){
//   window.location.reload();
// });

init()





// create logic so you can only submit score once for each game. and page refreshes
// also so score can only be submitted if name is enter in input value
// add event listner on previous scores that hides and unhides list of scores, make previous scores a button?
// add hover for click events






