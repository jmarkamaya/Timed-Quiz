var submitButton = document.querySelector(".submit");
var startButton = document.querySelector(".start");
var body = document.body;
var questionEl = document.querySelector(".question");
var answerEl = document.querySelector(".answer");
var ulEl = document.querySelector('.choices')
var index = 0;
var secondsLeft = 100;
var timerEl = document.querySelector(".timer-count");
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








function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = secondsLeft;
    if(secondsLeft === 0) {
      
      clearInterval(timerInterval);
    }

  }, 1000);
};


function startQuiz() {
  var li = document.createElement("li");
  var currentQuestion = questions[index];
  questionEl.textContent = currentQuestion.title;

  for (var i = 0; i < currentQuestion.choices.length; i++) {

    var choiceOption = currentQuestion.choices[i];
    var li = document.createElement("li");
    li.setAttribute("style", "list-style: none; color: red; padding: 10px")
    li.textContent = choiceOption;
    var inputEl = document.createElement("input");
    li.appendChild(inputEl);
    inputEl.setAttribute("type", "radio");
    inputEl.setAttribute("name", "option");
    inputEl.setAttribute("value", choiceOption);
    
    ulEl.appendChild(li);

    
    console.log(index);

  };

  

};

submitButton.addEventListener("click", function() {
  if(index < 4) {
    index++;
    ulEl.textContent = "";
   startQuiz();
  }
   else {
   console.log("Hellow");
   };
   
});







  





startButton.addEventListener("click", function () {
  this.setAttribute("style", "display: none");
  startQuiz();
  setTime();
  
});



