// to change to quiz display 
var quizContainer = document.querySelector(".quiz-container");
var quizQuestion = document.querySelector("#title");
var quizAnswerContainer = document.querySelector(".quiz-answers")
var quizAnswers = document.querySelectorAll(".answer");
var quizButton = document.querySelector('#quiz-button');
var quizContentContainer = document.querySelector('.quiz-content');
var timer = document.createElement('p');
var timerMinutes = 2;
var timerSeconds = 30;


function toQuizDisplay () {
    quizContainer.classList.add("active");
    quizQuestion.classList.add("active");   
    quizAnswerContainer.classList.add("active");
    quizButton.textContent = "Next";
    setTimeout(function(){
        for(var i = 0; i < quizAnswers.length; i++) {
            quizAnswers[i].classList.add("active");
        }
    }, 25);
    timer.classList.add("active");
    timer.textContent = timerMinutes + " minutes " + timerSeconds + " seconds";
    var timerInterval = setInterval( function() {
        timerSeconds--;
        timer.textContent = timerMinutes + " minutes " + timerSeconds + " seconds";
        if (timerMinutes === 0 && timerSeconds === 0) {
            clearInterval(timerInterval);
            inputName();
        }
        if (timerSeconds === 0) {
            timerSeconds = 60
            timerMinutes--;
        }
    }, 1000);

    document.querySelector("header").appendChild(timer);
    quizButton.removeEventListener("click", toQuizDisplay);
    nextQuestion();
    quizButton.addEventListener("click", nextQuestion);
}

quizButton.addEventListener("click", toQuizDisplay)


//to begin quiz & to move to next question
var quizAnswer1 = quizAnswers[0];
var quizAnswer2 = quizAnswers[1];
var quizAnswer3 = quizAnswers[2];
var quizAnswer4 = quizAnswers[3];
var quizContent = [
    [
        {question: "Which method is used to set a delay time before a function is called"},
        {correct: "setTimeout()"},
        {incorrect: "setInterval()"},
        {incorrect: "addDelay()"},
        {incorrect: "pauseBefore()"}
    ], [
        {question: "Which method do we call to prevent bubbling"},
        {incorrect: "preventDefault()"},
        {incorrect: "endBubbling()"},
        {correct: "stopPropogation()"},
        {incorrect: "dontPropogate()"}
    ], [
        {question: "What is the purpose of stringify()"},
        {incorrect: "gives developer access to string library"},
        {correct: "converts from an object to a string"},
        {incorrect: "converts from a string to an object"},
        {incorrect: 'creates a variable of type "string"'}
    ], [
        {question: "What does DOM stand for"},
        {incorrect: "Document Open Module"},
        {incorrect: "Data-On Mode"},
        {correct: "Document Object Model"},
        {incorrect: "Days on Market"}
    ], [
        {question: "Which HTML element is used to link an external javascript file"},
        {incorrect: "<javascript>"},
        {incorrect: "<link"},
        {incorrect: "<js>"},
        {correct: "<script>"}
    ], [
        {question: "Which of the following cannot be used to access text in an element"},
        {incorrect: "innerHTML"},
        {correct: "textInside"},
        {incorrect: "textContent"},
        {incorrect: "innerText"}
    ], [
        {question: "Where is the correct location to link an external javascript file"},
        {correct: "body"},
        {incorrect: "footer"},
        {incorrect: "header"},
        {incorrect: "head"}
    ], [
        {question: "How is a function created"},
        {incorrect: "function myFunction = ()"},
        {incorrect: "function:myFunction()"},
        {correct: "function myFunction()"},
        {incorrect: "function => ()"}
    ], [
        {question: "What is the syntax for a callback function"},
        {correct: "myFunction"},
        {incorrect: "call myFunction"},
        {incorrect: "call myFunction()"},
        {incorrect: "myFunction()"}
    ], [
        {question: "How does a while loop start"},
        {incorrect: "while (i = 0; i < 4; i++)"},
        {incorrect: "while i = 1 to i = 4"},
        {incorrect: "while (i < 4; i++)"},
        {correct: "while (i < 4)"}
    ]
]
var questionCounter = 0;
var currentQuestion;
var hasAnswered = false;


function nextQuestion() {
    if (questionCounter < quizContent.length) {
        currentQuestion = quizContent[questionCounter];
        quizQuestion.textContent = Object.values(currentQuestion[0])[0];
        quizAnswer1.textContent = Object.values(currentQuestion[1])[0];
        quizAnswer2.textContent = Object.values(currentQuestion[2])[0];
        quizAnswer3.textContent = Object.values(currentQuestion[3])[0];
        quizAnswer4.textContent = Object.values(currentQuestion[4])[0];
        questionCounter++;

        for (var k = 0; k < quizAnswers.length; k++) {
            quizAnswers[k].classList.remove("incorrect");
            quizAnswers[k].classList.remove("correct");
        }
        hasAnswered = false;
        quizAnswerContainer.addEventListener("click", checkAnswer)

    } else {
        questionCounter = 0;
        quizButton.removeEventListener("click", nextQuestion);
        inputName();
    }

}

// To check answer
var answerSelected;
var correctAnswer;
var correctAnswerIndex;
var score = 0;


function checkAnswer (event) {
    
    for (j = 0; j < currentQuestion.length; j++) {
        if (currentQuestion[j].hasOwnProperty("correct")){
            correctAnswerIndex = j;
        }
    }
    
    correctAnswer = currentQuestion[correctAnswerIndex].correct;
    answerSelected = event.target.textContent

    if (answerSelected === correctAnswer) {
        event.target.classList.add("correct");
        score+=10;
    } else {
        event.target.classList.add("incorrect")
    }

    hasAnswered = true;
    quizAnswerContainer.removeEventListener("click", checkAnswer);
}


// to bring up input after quiz
var createInput;
function inputName () {
    quizButton.textContent = "Submit";
    quizQuestion.textContent = "Input your name";
    quizAnswerContainer.classList.remove("active");

    createInput = document.createElement('input');
    quizContentContainer.appendChild(createInput);


    quizButton.addEventListener("click", submitName)
}

function submitName () {
    var name = createInput.value;
    localStorage.setItem("name", name);
    localStorage.setItem("score", score)
    window.location.href = "highscore.html";

}

// to end quiz if timer runs out 