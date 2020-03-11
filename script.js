let playerChoice = playerPlay()
let computerChoice = computerPlay()


function playerPlay(clicked_id) {
    return clicked_id
    
}

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    return choices[Math.floor(Math.random() * choices.length)];
    
}

function playRound(playerChoice, computerChoice) {
    let playerSelection =  playerChoice;
    let computerSelection = computerChoice;

    if (computerSelection == playerSelection) {
        return "Draw! You've both chosen ${playerSelection}! Try again!!"
    } else if (
        computerSelection == 'rock' && playerSelection == 'lizard' ||
        computerSelection == 'rock' && playerSelection == 'scissors' ||
        computerSelection == 'paper' && playerSelection == 'rock' ||
        computerSelection == 'paper' && playerSelection == 'spock' ||
        computerSelection == 'scissors' && playerSelection == 'paper' ||
        computerSelection == 'scissors' && playerSelection == 'lizard' ||
        computerSelection == 'lizard' && playerSelection == 'paper' ||
        computerSelection == 'lizard' && playerSelection == 'spock' ||
        computerSelection == 'spock' && playerSelection == 'scissors' ||
        computerSelection == 'spock' && playerSelection == 'rock'
    ) {
        return "You win! ${playerSelection} will always beat ${computerSelection}!!"
    } else {
        return "Loser! ${computerSelection} will always beat ${playerSelection}!! AI will always be smarter than a mere human!"
    }
}

function game() {
    let playGame = playRound()
    document.getElementById("gameMessage").innerHTML = playGame
}