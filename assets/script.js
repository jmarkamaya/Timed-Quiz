var submitButton = document.querySelector(".submit");
var startButton = document.querySelector(".start");
var body = document.body;
var questionEl = document.querySelector(".question");
var answerEl = document.querySelector(".answer");
var olEl = document.querySelector('.choices')
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
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft;
    if (secondsLeft === 0) {

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
    var skip = document.createElement("br");
    var li = document.createElement("li");
    li.appendChild(skip);
    li.setAttribute("style", "display: inline-block; color: white; margin: 10px; border: 10px; padding: 10px; background-color: blue; border-radius: 25px")
    li.setAttribute("class", "list")
    li.textContent = choiceOption;
    // var inputEl = document.createElement("input");
    // li.appendChild(inputEl);
    // inputEl.setAttribute("type", "radio");
    // inputEl.setAttribute("name", "option");
    // inputEl.setAttribute("value", choiceOption);

    olEl.appendChild(li);


    console.log(index);



  };

  var elements = document.querySelectorAll(".list");

  elements.forEach(function (element) {
    element.addEventListener("click", function(event) {
      // Event functionality
      console.log("Clicked on an element!");
      // Add your code here to handle the event
      if (index < 4) {
        index++;
        olEl.textContent = "";
        startQuiz();
        console.log(event.target)
      }
      else {
        console.log("Hellow");
      };

    });
  });


};















startButton.addEventListener("click", function () {
  this.setAttribute("style", "display: none");
  startQuiz();
  setTime();

});



