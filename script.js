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
var totalQuestions = 10;
var questionsRemaining = totalQuestions;
var questionList = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9", "q10"];
var usedQuestions = []

//questions will be in objects, with question number, question, answers, and true answer 

var questions = [
    {
        "number": "q1",
        "question": "4+5=?",
        "answers": ["1", "7", "9", "3"],
        "trueAnswer": "9",
    },
    {
        "number": "q2",
        "question": "3x2=?",
        "answers": ["2", "4", "6", "0"],
        "trueAnswer": "6",
    }, 
    {
        "number": "q3",
        "question": "4x5=?",
        "answers": ["10", "19", "9", "20"],
        "trueAnswer": "20",
    }, 
    {
        "number": "q4",
        "question": "2+5=?",
        "answers": ["7", "3", "11", "10"],
        "trueAnswer": "7",
    },
    {
        "number": "q5",
        "question": "10-2=?",
        "answers": ["12", "7", "10", "8"],
        "trueAnswer": "8",
    },
    {
        "number": "q6",
        "question": "12-7=?",
        "answers": ["19", "5", "8", "3"],
        "trueAnswer": "5",
    }, 
    {
        "number": "q7",
        "question": "14+5=?",
        "answers": ["19", "15", "9", "0"],
        "trueAnswer": "19",
    }, 
    {
        "number": "q8",
        "question": "4/2=?",
        "answers": ["1", "8", "2", "3"],
        "trueAnswer": "2",
    },
    {
        "number": "q9",
        "question": "20/4=?",
        "answers": ["5", "2", "80", "24"],
        "trueAnswer": "5",
    },
    {
        "number": "q10",
        "question": "7x7=?",
        "answers": ["50", "17", "14", "49"],
        "trueAnswer": "49",
    }
]

//var for score
var score = 0;

//functions

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
    var selectedQuestion = questionList[Math.floor(Math.random() * questionList.length)];
    console.log(selectedQuestion);
    // console.log(selectedQuestion.number);
    // console.log(selectedQuestion.question);
    // console.log(selectedQuestion.answers);
    // console.log(selectedQuestion.trueAnswer);
    
    
};

//start game function
function startGame() {
    // countdown();
    getQuestion();
}

function endGame() {
    console.log("the game has eneded");
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