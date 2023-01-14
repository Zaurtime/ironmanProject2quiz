const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull= document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0 
let questionCounter = 0
let availableQuestions = []

let questions = [ 
    {
        question: 'What is the most difficult IronMan race?',
        choice1: 'Patagonman, Chile',
        choice2: 'Cork, Ireland',
        choice3: 'Lanzarote, Canary Islands',
        choice4: 'Norseman Xtreme, Norway',
        answer: 1,
    },
    {
        question: 'How many km an IronMan run daily?',
        choice1: '10km',
        choice2: '42km',
        choice3: '1km',
        choice4: 'Next Monday 5km',
        answer: 2,
    },
    {
        question: 'How many km can you swim?',
        choice1: '100m',
        choice2: '200m',
        choice3: '2km',
        choice4: '3km and 800meters',
        answer: 4,
    },
    {
        question: 'Your personal best distance in cycling?',
        choice1: '20km or less',
        choice2: '50km',
        choice3: '180km or more',
        choice4: '100km',
        answer: 3,
    },
    {
        question: 'Who won IronMan Pro World Championship?',
        choice1: 'Gustav Iden',
        choice2: 'Sam Laidlow',
        choice3: 'Lionel Sanders',
        choice4: 'Jan Frodeno',
        answer: 1,
    },
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 5

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/finish.html')
    }

    questionCounter++ 
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`


const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
currentQuestion = availableQuestions[questionsIndex]
question.innerText = currentQuestion.question

choices.forEach(choice => {
    const number = choice.dataset['number']
    choice.innerText = currentQuestion['choice' + number]
})



availableQuestions.splice(questionsIndex, 1)

acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
    if(!acceptingAnswers) return

    acceptingAnswers = false
    const selectedChoice = e.target
    const selectedAnswer = selectedChoice.dataset['number']

    let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

    if(classToApply === 'correct') {
    incrementScore(SCORE_POINTS)
}


selectedChoice.parentElement.classList.add(classToApply)

setTimeout(() => {
selectedChoice.parentElement.classList.remove(classToApply)
getNewQuestion()
}, 1000)

})

})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()
