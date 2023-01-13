const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector ('finalScore')
const mostRecentScore = document.querySelector ('#mostResentScore')

const highScore = JSON.parse(localStorage.getItem('highScores')) || []

const MAX_HIGH_SCORES = 5 