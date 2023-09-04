let awayScore = document.getElementById("away-score")
awayScore.innerText = 0

let homeScore = document.getElementById("home-score")
homeScore.innerText = 0

function away() {
    let currentScore = parseInt(awayScore.innerText)
    awayScore.innerText = currentScore + 1
}

function home() {
    let currentScore = parseInt(homeScore.innerText)
    homeScore.innerText = currentScore + 1
}

function reset() {
    awayScore.innerText = 0
    homeScore.innerText = 0
}