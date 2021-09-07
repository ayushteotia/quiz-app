const quizData = [
    {
        question: " What is true about Machine Learning? ",
        a: "  Machine Learning (ML) is that field of computer science",
        b: "ML is a type of artificial intelligence that extract patterns out of raw data by using an algorithm or method",
        c: " The main focus of ML is to allow computer systems learn from experience without being explicitly programmed or human intervention.",
        d:  "All of the above",
        correct : "d",
    },
    {
        question: "who is the president of US?",
        a: "joe biden",
        b: "Donald trump",
        c: "Kamla harris",
        d:  "hilary clinton",
        correct : "b",
    },
    {
        question: "when was javascript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d:  "none of the above",
        correct : "d",
    },
    {
        question: "Which of the following methods do we use to find the best fit line for data in Linear Regression?",
        a: ") Least Square Error",
        b: "Maximum Likelihood ",
        c: " Logarithmic Loss",
        d:  "Both A and B",
        correct : "a",
    },
 
    {
        question: "Which of the following statement is true about outliers in Linear regression? ",
        a: "Linear regression is sensitive to outliers",
        b: " Linear regression is not sensitive to outliers",
        c: " Can’t say",
        d:  " None of these",
        correct : "a",
    },
];



const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});