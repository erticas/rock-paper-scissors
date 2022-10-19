//Rock paper scissor game

//User input/choice: Rock/paper/scissor
let playerInput = prompt("Enter rock, paper, or scissor");

//to make it case insensitive:
let playerSelection = playerInput.toLowerCase();

//Computer input: randomly pick rock/paper/scissor from an array
let array = ['rock', 'paper', 'scissor'];
function getComputerChoice() {
    return array[Math.floor(Math.random() * array.length)];
}

//One round of game, taking 2 parameters (player and computer selections):
function playRound(playerSelection, computerSelection) {

    //Results:
    if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log("You win! Paper beats Rock");
    }

    else if (playerSelection === 'rock' && computerSelection === 'scissor') {
        console.log("You win! Rock beats Scissor");
    }

    else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        console.log("You win! Scissor beats Paper");
    }

    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log("You lose! Paper beats Rock");
    }

    else if (playerSelection === 'scissor' && computerSelection === 'rock') {
        console.log("You lose! Rock beats Scissor");
    }

    else if (playerSelection === 'paper' && computerSelection === 'scissor') {
        console.log("You lose! Scissor beats Paper");
    }

    else if (playerSelection === 'paper' && computerSelection === 'paper') {
        console.log("It's a tie! Paper can't beat Paper");
    }

    else if (playerSelection === 'scissor' && computerSelection === 'scissor') {
        console.log("It's a tie! Scissor can't beat Scissor");
    }

    else if (playerSelection === 'rock' && computerSelection === 'rock') {
        console.log("It's a tie! Rock can't beat Rock");
    }
    else {
        console.log("Did you type incorrectly?");
    }
}

const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))

//Keep score and reports winner/loser for a 5 round game

//for (let i = 0; i < 5; i++) {
//    function game() {
//        playRound(playerSelection, computerSelection)
//        let scorePlayer = 0; let scoreComputer = 0;
//        
//        console.log(playRound(playerSelection, computerSelection))
//    }
//}