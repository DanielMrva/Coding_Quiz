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


//var for time
var timerEl = document.querySelector(".Timer");

var timeRemaining = 60;

function countdown() {
    var timerInterval = setInterval(function() {
        timeRemaining--;
        timerEl.textContent = `${timeRemaining} seconds.`

        if (timeRemaining === 0) {
            clearInterval(timerInterval);

            endGame();
        }
    }, 1000);
}

//var for score

//shuffles ul li on each question
// var ul = document.querySelectorAll('ul');
// for (var i = this.ul.children.length; i >= 0; i--) {
//     this.ul.appendChild(this.ul.children[Math.random() * i | 0]);
// }
//Doesn't appear to work with multiple uls?...

//functions

//answer checker.  Use .true .false classes in answers.  
    //event listener keyed to clicks; either get values from HTML or listener can be keyed to ".correct" or ".incorrect"
    //correct answers ++ to score and change style of current question to Display: None, and change Display property of next question.
    //incorrect answers -5s to time and advance to next question just like correct answers
    //consider using data-set?  Could probably switch the display property that way, possibly number questions?


//start game function
function starGame() {
    countdown();
}

//end game function?

//timer

//answer array to cycle through questions; 
//if timer === 0 or questions === 0 then quiz ends