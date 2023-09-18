const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            {text: "script", correct: true},
            {text: "js", correct: false},
            {text: "scripting", correct: false},
            {text: "javascript", correct: false},         
        ]
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        answers: [
            {text: "head", correct: false},
            {text: "head & body", correct: false},
            {text: "body", correct: true},
            {text: "footer", correct: false},       
        ]
    }, 
    {
        question: "What is the correct syntax for referring to an external script called xxx.js?",
        answers: [
            {text: "script href='script.js'", correct: false},
            {text: "script src='xxx.js'", correct: true},
            {text: "script name='xxx.js'", correct: false},
            {text: "script insert='xxx.js'", correct: false},         
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answerbutton");
const nextButton = document.getElementById("nextbut");

let currentQuestionIndex = 0;
let score = 0;
function startQuiz(){
    currentQuestionIndex = 0
    score = 0 
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
});
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
    }else{
        selectedBtn.classList.add("incorrect");
    }
}

startQuiz();