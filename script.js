const startButton = document.getElementById('start'); 
const quizQuestion = document.getElementById('question-container'); 
const answersContainer = document.getElementById('answers-container'); 
const nextButton = document.getElementById('next'); 
const quizContainer = document.getElementById('quiz-container'); 
let h3 = document.querySelectorAll('h3'); 
const roasts = document.getElementById('roasts'); 

let shuffledQuestions, currentQuestionIndex

const questions = [
    {question: 'Who first discovered America?', 
    answer: [
        {text: 'Christopher Columbus', correct: false}, 
        {text: 'Jaques Cluseau', correct: false}, 
        {text: 'Leif Erikson', correct: true}, 
        {text: 'Eve Gluon', correct: false}, 
    ]
    }, 
    {question: 'What city was the first capital of America?', 
    answer: [
        {text: 'Boston, MA', correct: false}, 
        {text: 'New York City', correct: true}, 
        {text: 'Washington, D.C.', correct: false}, 
        {text: 'Honolulu, HI', correct: false}, 
    ]
    }, 
    {question: 'When did the pilgrims land in America?', 
    answer: [
        {text: '1598', correct: false}, 
        {text: '1615', correct: false}, 
        {text: '1620', correct: true}, 
        {text: '1667', correct: false}, 
    ]
    }, 
    {question: 'When did the civil war end?', 
    answer: [
        {text: '1865', correct: true}, 
        {text: '1791', correct: false}, 
        {text: '1866', correct: false}, 
        {text: '1818', correct: false}, 
    ]
    }, 
    {question: 'Why did the pilgrims come to America?', 
    answer: [
        {text: 'Religious Freedom', correct: false}, 
        {text: 'Economic Opportunity', correct: true}, 
        {text: 'For fun', correct: false}, 
        {text: 'To escape oppression', correct: false}, 
    ]
    }, 
    {question: 'Who invented the first car?', 
    answer: [
        {text: 'Karl Benz', correct: true}, 
        {text: 'Elon Musk', correct: false}, 
        {text: 'Yoshi Honda', correct: false}, 
        {text: 'Henry Ford', correct: false}, 
    ]
    }, 
    {question: 'Who invented the light bulb?', 
    answer: [
        {text: 'Benjamin Franklin', correct: false}, 
        {text: 'Nikola Tesla', correct: false}, 
        {text: 'Thomas Edison', correct: false}, 
        {text: 'Who knows', correct: true}, 
    ]
    }, 
    
]

//START QUIZ 
startButton.addEventListener('click', startQuiz); 

function startQuiz() {
    startButton.classList.add('hide'); 
    shuffledQuestions = questions.sort(() => Math.random() - .5); 
    currentQuestionIndex = 0; 
    console.log(shuffledQuestions); 
    setNextQuestion();  
}

function setNextQuestion() {
    resetAnswers(); 
    showNextQuestion(shuffledQuestions[currentQuestionIndex]); 
}

function showNextQuestion(question) {
    nextButton.classList.add('hide');
    quizQuestion.innerText = question.question; 
    question.answer.forEach((answer) => {
        const button = document.createElement('button'); 
        button.innerText = answer.text; 
        button.classList.add('btn'); 
        answersContainer.appendChild(button); 
        if (answer.correct) {
            button.dataset.correct = answer.correct; 
        }
        button.addEventListener('click', selectedAnswer); 
    })
}

function resetAnswers() {
    nextButton.classList.add('hide');
    while (answersContainer.firstChild) {
        answersContainer.removeChild 
        (answersContainer.firstChild)
    }
    while (roasts.firstChild) {
        roasts.removeChild
        (roasts.firstChild)
    }
}

//CHECK RIGHT OR WRONG
function selectedAnswer(e) {
    selectedButton = e.target; 
    if (selectedButton.dataset.correct) {
        selectedButton.classList.add('correct'); 
        nextButton.classList.remove('hide'); 
        // quizContainer.removeChild(roasted); 
        // roasts.classList.add('hide'); 
        while (roasts.firstChild) {
            roasts.removeChild
            (roasts.firstChild)
        }
    } else {
        selectedButton.classList.add('wrong'); 
        // let roasted = document.createElement('h3'); 
        // roasted.innerHTML = 'lol ur dumb'; 
        // roasted.classList.add('roasted'); 
        // quizContainer.appendChild(roasted); 
        roasts.innerText = "lol ur dumb"; 
       
    }
}


//GO TO NEXT QUESTION

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++; 
        console.log(currentQuestionIndex); 
        setNextQuestion(); 
    } else {
        quizQuestion.innerText = 'You finished the quiz!';
        // answersContainer.classList.add('hide'); 
        while (answersContainer.firstChild) {
            answersContainer.removeChild
            (answersContainer.firstChild); 
        }
        nextButton.classList.add('hide'); 
        startButton.innerText = 'Restart'; 
        startButton.classList.remove('hide'); 
    }
    
})

//RESTART QUIZ

// startButton.addEventListener('click', startQuiz); 