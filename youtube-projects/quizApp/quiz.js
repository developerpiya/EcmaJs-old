const questions = [
    {
        question: "What country has the highest life expectancy?",
        answers: [
            { text: "Hong Kong", correct: true },
            { text: "USA", correct: false },
            { text: "UK", correct: false },
            { text: "Bangladesh", correct: false },
        ]
    },
    {
        question: "Which language has the more native speakers: English or Spanish?",
        answers: [
            { text: "English", correct: false },
            { text: "Hindi", correct: false },
            { text: "Urdu", correct: false },
            { text: "Spanish", correct: true },
        ]
    },
    {
        question: "How many minutes are in a full week?",
        answers: [
            { text: "86600", correct: false },
            { text: "10080", correct: true },
            { text: "60500", correct: false },
            { text: "15300", correct: false },
        ]
    },
    {
        question: "How many elements are in the periodic table? ",
        answers: [
            { text: "126", correct: false },
            { text: "120", correct: false },
            { text: "118", correct: true },
            { text: "131", correct: false },
        ]
    },
]

const questionElements = document.getElementById('que');
const answerButtons = document.getElementById('answer-buttons');
const nextBtn = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;


function startQuiz() {
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElements.innerHTML = questionNo + ". " + currentQuestion.question;


    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}

function selectAnswer(e) {
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if (isCorrect) {
        selectBtn.classList.add("correct");
        score++;
    }else {
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct")
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    }else{
        startQuiz()
    }
})

function handleNextButton() {
    currentQuestionIndex++;
    console.log(currentQuestionIndex);
    console.log(questions.length);
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else{
        showScore();
    }
   
}

function showScore() {
    resetState();
    questionElements.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display = "block";
    
}

function resetState() {
    nextBtn.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
startQuiz();

