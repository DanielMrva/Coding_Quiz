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
var startButton = document.querySelector(".start-button");
// var resetButton = document.getElementById("#reset");
var initialsInput = document.getElementById("initials");
var initialsBtn = document.getElementById("submit");

//var for time
var timerEl = document.getElementById("Timer");
timerEl.textContent = "_";
var timeRemaining = 60;

//var for question tracking
var questionList = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9", "q10"];
var questionsRemaining = 10;

//var for rendering html elements
var container = document.getElementById("question-container");
var questionText=document.getElementById("question-text")
var questionH3 = document.createElement("h3");
var ulEl = document.getElementById("answers");
var hsParent = document.getElementById("HS-Div");

//Var for question array, each question is an object with properties of number, question, answers (an array), and a correct answer.  Also a var for question index.

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
];

var i = 0;


//var for score
var scoreEl = document.getElementById("score");
var s = 0;
var score = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
scoreEl.innerText = `Score: ${score[s]}`;
var scoreBoard = [];

//functions

    //timer function
function countdown() {
    var timerInterval = setInterval(function() {
        timerEl.textContent = `${timeRemaining} seconds.`;
        timeRemaining--;
        if (questionsRemaining === 0 || timeRemaining <= 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
}

    //renders questions from questions array
function getQuestion() {
    var selectedQuestion = questions[i];
    console.log(selectedQuestion.question);
    console.log(selectedQuestion.answers);
    console.log(selectedQuestion.trueAnswer);
    questionText.innerText = `${selectedQuestion.question}`;
    for (var index = 0; index < selectedQuestion.answers.length; index++) {
        var newLi = document.createElement("li");
        var newBtn = document.createElement("button");
        newBtn.innerText = `${selectedQuestion.answers[index]}`
        ulEl.append(newLi);
        newLi.append(newBtn);
        newLi.classList.add(`a${index}`)
        newBtn.classList.add("aButt")
    }
};

function init() {
    var storedHigh = JSON.parse(localStorage.getItem("storedHigh"))
    if (storedHigh !== null) {
        scoreBoard = storedHigh;
    }
    console.log(storedHigh);
    renderScores();
    startButton.disabled = false;
    s = 0;
}

    //start game function; begins coundown, renders the first question, and disables the start button
function startGame() {
    timeRemaining = 60;
    countdown();
    getQuestion();
    startButton.disabled = true;
}

    //clears out the dynamicaly rendered questions.
function clearQuestion () {
    while (ulEl.firstChild) {
        ulEl.removeChild(ulEl.firstChild);
        console.log("element removed");
    };
}
    //end game function
function endGame() {
    console.log("the game has eneded");
    console.log(`You scored ${score[s]} points with ${timeRemaining} seconds remaining!`);
    startButton.disabled = false;
    init();
};
    //stores scoreBoard array to local storage
function storeScore() {
    localStorage.setItem("storedHigh", JSON.stringify(scoreBoard));
};

function clearScores() {
    while (hsParent.firstChild) {
        hsParent.removeChild(hsParent.firstChild);
    }
};

function renderScores() {
    clearScores();
    for (var j = 0; j < scoreBoard.length; j++) {
        var high = scoreBoard[j];
        var li = document.createElement("li");
        hsParent.appendChild(li);
        li.textContent = high;
      }
};

//event listeners for buttons

startButton.addEventListener("click", function() {
    startGame();
});

ulEl.addEventListener('click', function (e) {
    if (e.target.classList.contains("aButt")) {
      console.log(`${e.target.innerHTML} touched the butt`)
      answerCheck();
      function answerCheck() {
        var selectedQuestion = questions[i];
        if (e.target.innerHTML === selectedQuestion.trueAnswer) {
          score[s++];
          scoreEl.innerText = `Score: ${score[s]}`;
          clearQuestion();
          questions[i++];
          questionsRemaining--;
          console.log("correct");
        } else {
          timeRemaining -=4;
          clearQuestion();
          questions[i++];
          questionsRemaining--;
          console.log("incorrect");
        } if (i === questions.length) {
            i = 0;
            questionText.innerText = "";
        } else {
            getQuestion();
        }
      }
    }
  });

  initialsBtn.addEventListener("click", function(event) {
    event.preventDefault();
    var highScore = `${initialsInput.value.trim()} scored ${score[s]} with ${timeRemaining} seconds left!`;
    
    scoreBoard.push(highScore)
    initialsInput.value="";

    storeScore();
    init();
  });

  
init();