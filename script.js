// let playerChoice = ''
// let computerChoice = 
let round = ''
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
    
    function computerPlay() {
        const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock']
        return choices[Math.floor(Math.random() * choices.length)]     
    }
    let computerChoice = capitalize(computerPlay())

    function playRound() {
        const draw = "Draw! You've both chosen " + playerChoice + "! Try again!!"
        const win = "You win! " + playerChoice + " will always beat " + computerChoice + "!! You lucky!"
        const loose = "Loser! " + computerChoice + " will always beat " + playerChoice + "!! A.I. will always be smarter than a mere human!"

        if (computerChoice === playerChoice) return draw;
        if (playerChoice == 'Rock' && computerChoice == 'Lizard') return win;
        if (playerChoice == 'Rock' && computerChoice == 'Scissors') return win;
        if (playerChoice == 'Paper' && computerChoice == 'Rock') return win;
        if (playerChoice == 'Paper' && computerChoice == 'Spock') return win;
        if (playerChoice == 'Scissors' && computerChoice == 'Paper') return win;
        if (playerChoice == 'Scissors' && computerChoice == 'Lizard') return win;
        if (playerChoice == 'Lizard' && computerChoice == 'Paper') return win;
        if (playerChoice == 'Lizard' && computerChoice == 'Spock') return win;
        if (playerChoice == 'Spock' && computerChoice == 'Scissors') return win;
        if (playerChoice == 'Spock' && computerChoice == 'Rock') return win;
        else {
            return loose
        }
    }
    console.log(playerChoice)
    console.log(computerChoice)
    console.log(playRound())
    document.getElementById("gameMessage").innerHTML = playRound()
}





function game() {
    document.getElementById("gameMessage").innerHTML = playerPlay()
}

// function score(round) {
    
// }