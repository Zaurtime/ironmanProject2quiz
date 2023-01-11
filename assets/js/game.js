const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull= document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswer = true
let score = 0 
let quistionCounter = 0
let availableQuestions = []

let questions = [ 
    {
        question: 'What is the most difficult IronMan?'
        choice1: 'Patagonman, Chile'
        choice2: 'Cork, Ireland'
        choice3: 'Lanzarote, Canary Islands'
        choice4: 'Norseman Xtreme, Norway'
        answer: 1
    },
    {
        question: 'What is the most difficult IronMan?'
        choice1: 'Patagonman, Chile'
        choice2: 'Cork, Ireland'
        choice3: 'Challenge Wanaka, New Zealand'
        choice4: 'Norseman Xtreme, Norway'
        answer: 1
    },
    {
        question: 'What is the most difficult IronMan?'
        choice1: 'Patagonman, Chile'
        choice2: 'Cork, Ireland'
        choice3: 'Challenge Wanaka, New Zealand'
        choice4: 'Norseman Xtreme, Norway'
        answer: 1
    },
    {
        question: 'What is the most difficult IronMan?'
        choice1: 'Patagonman, Chile'
        choice2: 'Cork, Ireland'
        choice3: 'Challenge Wanaka, New Zealand'
        choice4: 'Norseman Xtreme, Norway'
        answer: 1
    },
    {
        question: 'What is the most difficult IronMan?'
        choice1: 'Patagonman, Chile'
        choice2: 'Cork, Ireland'
        choice3: 'Challenge Wanaka, New Zealand'
        choice4: 'Norseman Xtreme, Norway'
        answer: 1
    },
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 5