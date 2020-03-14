let playerScore = 0
let computerScore = 0
const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}



document.addEventListener('DOMContentLoaded', function(){ 
console.log('document loaded')
document.getElementById("rock").addEventListener('click', playerPlay)
document.getElementById("paper").addEventListener('click', playerPlay)
document.getElementById("scissors").addEventListener('click', playerPlay)
document.getElementById("lizard").addEventListener('click', playerPlay)
document.getElementById("spock").addEventListener('click', playerPlay)

}, false);




function playerPlay() {
    let playerChoice = capitalize(this.id)
    // let playerScore = document.getElementById("player-score").innerHTML = 0
    // let computerScore = document.getElementById("ai-score").innerHTML = 0
    
    function computerPlay() {
        const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock']
        return choices[Math.floor(Math.random() * choices.length)]     
    }
    let computerChoice = capitalize(computerPlay())

    function playRound() {
        // const draw = document.getElementById("gameMessage").innerHTML = "Draw! You've both chosen " + playerChoice + "! Try again!!"
        // const win = document.getElementById("gameMessage").innerHTML = "You win! " + playerChoice + " will always beat " + computerChoice + "!! You lucky!"
        // const loose = document.getElementById("gameMessage").innerHTML = "Loser! " + computerChoice + " will always beat " + playerChoice + "!! A.I. will always be smarter than a mere human!"

        if (computerChoice === playerChoice) {
            return document.getElementById("gameMessage").innerHTML = "Draw! You've both chosen " + playerChoice + "! Try again!!"}

        if (playerChoice == 'Rock' && computerChoice == 'Lizard') {
            playerScore = document.getElementById("player-score").innerHTML = ++playerScore
            return document.getElementById("gameMessage").innerHTML = "You win! " + playerChoice + " will always beat " + computerChoice + "!! You lucky!"}

        if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
            playerScore = document.getElementById("player-score").innerHTML = ++playerScore
            return document.getElementById("gameMessage").innerHTML = "You win! " + playerChoice + " will always beat " + computerChoice + "!! You lucky!"}

        if (playerChoice == 'Paper' && computerChoice == 'Rock') {
            playerScore = document.getElementById("player-score").innerHTML = ++playerScore
            return document.getElementById("gameMessage").innerHTML = "You win! " + playerChoice + " will always beat " + computerChoice + "!! You lucky!"}

        if (playerChoice == 'Paper' && computerChoice == 'Spock') {
            playerScore = document.getElementById("player-score").innerHTML = ++playerScore
            return document.getElementById("gameMessage").innerHTML = "You win! " + playerChoice + " will always beat " + computerChoice + "!! You lucky!"}

        if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
            playerScore = document.getElementById("player-score").innerHTML = ++playerScore
            return document.getElementById("gameMessage").innerHTML = "You win! " + playerChoice + " will always beat " + computerChoice + "!! You lucky!"}

        if (playerChoice == 'Scissors' && computerChoice == 'Lizard') {
            playerScore = document.getElementById("player-score").innerHTML = ++playerScore
            return document.getElementById("gameMessage").innerHTML = "You win! " + playerChoice + " will always beat " + computerChoice + "!! You lucky!"}

        if (playerChoice == 'Lizard' && computerChoice == 'Paper') {
            playerScore = document.getElementById("player-score").innerHTML = ++playerScore
            return document.getElementById("gameMessage").innerHTML = "You win! " + playerChoice + " will always beat " + computerChoice + "!! You lucky!"}

        if (playerChoice == 'Lizard' && computerChoice == 'Spock') {
            playerScore = document.getElementById("player-score").innerHTML = ++playerScore
            return document.getElementById("gameMessage").innerHTML = "You win! " + playerChoice + " will always beat " + computerChoice + "!! You lucky!"}

        if (playerChoice == 'Spock' && computerChoice == 'Scissors') {
            playerScore = document.getElementById("player-score").innerHTML = ++playerScore
            return document.getElementById("gameMessage").innerHTML = "You win! " + playerChoice + " will always beat " + computerChoice + "!! You lucky!"}

        if (playerChoice == 'Spock' && computerChoice == 'Rock') {
            playerScore = document.getElementById("player-score").innerHTML = ++playerScore
            return document.getElementById("gameMessage").innerHTML = "You win! " + playerChoice + " will always beat " + computerChoice + "!! You lucky!"}

        else {
            computerScore = document.getElementById("ai-score").innerHTML = ++computerScore
            return document.getElementById("gameMessage").innerHTML = "Loser! " + computerChoice + " will always beat " + playerChoice + "!! A.I. will always be smarter than a mere human!"}
    
    }
    
    console.log(playerChoice)
    console.log(computerChoice)
    console.log(playRound())

}


