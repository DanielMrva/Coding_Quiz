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
//var for score

//functions

//answer checker.  Use .correct .incorrect classes in answers.  
    //event listener keyed to clicks; either get values from HTML or listener can be keyed to ".correct" or ".incorrect"
    //correct answers ++ to score and change style of current question to Display: None, and change Display property of next question.
    //incorrect answers -5s to time and advance to next question just like correct answers
    //consider using data-set?  Could probably switch the display property that way, possibly number questions?

//timer

//answer array to cycle through questions; 
//if timer === 0 or questions === 0 then quiz ends