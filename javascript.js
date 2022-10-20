//Rock paper scissor game

let scorePlayer = 0; let scoreComputer = 0;                                   //Start with 0 scores for player and computer

//One round of game will take 2 parameters (player and computer selections)
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

//Specify win/lose (and who) in each round
let playerWin_round = 'Player wins this round'
let computerWin_round = 'Computer wins this round'
let tie_round = 'No one wins or loses'

//One game = 5 round. ENTER USER INPUT HERE
for (let i = 1; i < 6; i++) {
    console.log("Turn " + i);                                                 //Indicate turn #

    //User input - type - rock/paper/scissor
    let playerInput = prompt("Enter rock, paper, or scissor");
    let playerSelection = playerInput.toLowerCase();                          //Make user's input case insensitive
    console.log("Player selected " + playerSelection);                        //Print player selection

    //Computer's input:
    let array = ['rock', 'paper', 'scissor'];
    function getComputerChoice() {                                            //Parameter/argument is blank because randomized
        return array[Math.floor(Math.random() * array.length)];               //Randomly pick rock/paper/scissor from the array
    }

    const computerSelection = getComputerChoice();                            //Define and call function as computer selection
    console.log("Computer selected " + computerSelection);                    //Print computer selection

    let roundResult = playRound(playerSelection, computerSelection);          //See Line 6: 2 parameters needed

    //Result of a round:
    console.log(roundResult);                                                 //Print result of 1 round
    gameScore(roundResult);                                                   //Call scoring function
    console.log("Player's score is " + scorePlayer);                          //Print player's score
    console.log("Computer's score is " + scoreComputer);                      //Print computer's score

}

//Track/keep score function

//NOTE: REMEMBER: input argument (roundResult) inside the function. Otherwise, no argument = no result.
//Need to insert argument as it is not random.
//roundResult = argument because value is fixed/returned from prior used function
function gameScore(roundResult) {
    if (roundResult == playerWin_round) {
        scorePlayer++;
    }
    else if (roundResult == computerWin_round) {
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
