let homeScore = 0
let awayScore = 0
let homeScoreEl = document.getElementById("home-score")
let awayScoreEl = document.getElementById("away-score")

// Home Buttons
function plusOneHome() {
    homeScore += 1
    homeScoreEl.innerText = homeScore
}

function plusTwoHome() {
    homeScore += 2
    homeScoreEl.innerText = homeScore
}

function plusThreeHome() {
    homeScore += 3
    homeScoreEl.innerText = homeScore
}

function resetHome() {
    homeScore = 0
    homeScoreEl.innerText = homeScore
}

// Away Buttons
function plusOneAway() {
    awayScore += 1
    awayScoreEl.innerText = awayScore
}

function plusTwoAway() {
    awayScore += 2
    awayScoreEl.innerText = awayScore
}

function plusThreeAway() {
    awayScore += 3
    awayScoreEl.innerText = awayScore
}

function resetAway() {
    awayScore = 0
    awayScoreEl.innerText = awayScore
}