// AS A coding boot camp student
// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

//var for inputs
var trueButton = document.getElementsByClassName(".true");
var falseButton = document.getElementsByClassName(".false");
var startButton = document.querySelector(".start-button");
var resetButton = document.getElementById("#reset");

//var for time
var timerEl = document.getElementById("Timer");

var timeRemaining = 60;

//var for question tracking
var totalQuestions = 20;
var questionsRemaining = totalQuestions;
var questionList = ["#q1", "#q2", "#q3", "#q4", "#q5", "#q6", "#q7"];
// var usedQuestions = [, "#q8", "#q9", "#q10", "#q11", "#q12", "#q13", "#q14", "#q15", "#q16", "#q17", "#q18", "#q19", "#q20"]

//var for score
var score = 0;

function countdown() {
    var timerInterval = setInterval(function() {
        timeRemaining--;
        timerEl.textContent = `${timeRemaining} seconds.`;
        if (questionsRemaining === 0 || timeRemaining === 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
}

function getQuestion() {
    // function randomQuestion() {
    //     Math.floor(Math.random * questionList.length)
    // }
    var displayQuestion = document.getElementById(`q${Math.floor(Math.random * questionList.length)}`);
    // var displayElement = document.getElementsById(displayQuestion);
    // var state = document.displayQuestion.getAttribute("data-state");
    // document.getElementById(displayQuestion).setAttribute("display", "block");
    document.getElementById(displayQuestion).style.display("block");
    console.log(displayQuestion);
};    

//shuffles ul li on each question
// var ul = document.querySelectorAll('ul');
// for (var i = this.ul.children.length; i >= 0; i--) {
//     this.ul.appendChild(this.ul.children[Math.random() * i | 0]);
// }
//Doesn't appear to work with multiple uls?...

//functions


//start game function
function startGame() {
    countdown();
    getQuestion();
}

//event listeners for buttons

startButton.addEventListener("click", function() {
    startGame();
});

// //answer checker.  Use .true .false classes in answers.
// trueButton.addEventListener("click", function() {
//     score++;
//     questionsRemaining --;
//     getQuestion();
// });

// falseButton.addEventListener("click", function() {
//     timeRemaining - 5;
//     questionsRemaining --;
//     getQuestion();
// });
    //event listener keyed to clicks; either get values from HTML or listener can be keyed to ".correct" or ".incorrect"
    //correct answers ++ to score and change style of current question to Display: None, and change Display property of next question.
    //incorrect answers -5s to time and advance to next question just like correct answers
    //consider using data-set?  Could probably switch the display property that way, possibly number questions?