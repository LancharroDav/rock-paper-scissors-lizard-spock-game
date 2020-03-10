function computerPlay() {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice
}

function playRound() {
    let playerSelection =  playerPlay();
    let computerSelection = computerPlay();

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

function playerPlay() {
    let playerChoice = Array.from(document.querySelectorAll("button"));
    return playerChoice
}

function game() {
    let playGame = playRound()
    alert playGame
}