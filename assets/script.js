var startButton = document.querySelector(".start");
var body = document.body;
var questionEl = document.querySelector(".question");
var answerEl = document.querySelector(".answer");
var listEl = document.querySelector('.choices')
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
var currentQuestion = questions[0]



function startQuiz() {

  questionEl.textContent = currentQuestion.title;

  for (var i = 0; i < currentQuestion.choices.length; i++) {

    var choiceOption = currentQuestion.choices[i];

    var li = document.createElement("li");
    li.setAttribute("style", "list-style: none")
    li.textContent = choiceOption;
    var inputEl = document.createElement("input");
    li.appendChild(inputEl);
    inputEl.setAttribute("type", "radio");
    inputEl.setAttribute("name", "option");
    inputEl.setAttribute("value", choiceOption);
    
    listEl.appendChild(li);

  };

};

startButton.addEventListener("click", function () {
  this.setAttribute("style", "display: none")
  startQuiz()
});

