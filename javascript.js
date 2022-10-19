//Rock paper scissor game

let scorePlayer = 0; let scoreComputer = 0;                         //Start with 0 scores for both player and computer

//One round of game - take 2 parameters (player and computer selections)
function playRound(playerSelection, computerSelection) {

    //Possible results:
    if (playerSelection == 'paper' && computerSelection == 'rock') {
        return playerWin_round;
    }

    else if (playerSelection == 'paper' && computerSelection == 'scissor') {
        return computerWin_round;
    }

    else if (playerSelection == 'rock' && computerSelection == 'scissor') {
        return playerWin_round;
    }

    else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return computerWin_round;
    }

    else if (playerSelection == 'scissor' && computerSelection == 'paper') {
        return playerWin_round;
    }

    else if (playerSelection == 'scissor' && computerSelection == 'rock') {
        return computerWin_round;
    }

    else if (playerSelection == computerSelection) {
        return tie_round;
    }
}

//Specify win/lose round:
let playerWin_round = 'Player wins this round'
let computerWin_round = 'Computer wins this round'
let tie_round = 'No one wins or loses'

//1 game = 5 round. ENTER USER INPUT HERE
for (let i = 1; i < 6; i++) {
    console.log("Turn " + i);                                        //Indicate turn #

    //User input/choice: Rock/paper/scissor
    let playerInput = prompt("Enter rock, paper, or scissor");
    let playerSelection = playerInput.toLowerCase();                 //make it case insensitive
    console.log("Player selected " + playerSelection);               //Print player selection

    //Computer's input:
    //Randomly pick rock/paper/scissor from an array
    let array = ['rock', 'paper', 'scissor'];
    function getComputerChoice() {
        return array[Math.floor(Math.random() * array.length)];
    }

    const computerSelection = getComputerChoice();
    console.log("Computer selected " + computerSelection);          //Print computer selection

    let roundResult = playRound(playerSelection, computerSelection);

    //Result of a round:
    console.log(roundResult);
    gameScore(roundResult);
    console.log("Player's score is " + scorePlayer);
    console.log("Computer's score is " + scoreComputer);

}

//Keep score function - NOTE: something is wrong here; BUG: neither scores are getting added
function gameScore() {
    let gameResult = playRound();
    if (gameResult === playerWin_round) {
        scorePlayer++;
    }
    else if (gameResult === computerWin_round) {
        scoreComputer++;
    }
    else {
        tie_round;
    }
}

if (scorePlayer > scoreComputer) {
    console.log("CONGRATS! YOU WIN THE ROUND XD");
}
else if (scorePlayer === scoreComputer) {
    console.log("It's a tie :)");
}
else {
    console.log("SAD. YOU LOSE THE ROUND. Try again ;)");
}
