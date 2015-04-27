////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

/* ---------- FUNCTION CALL SECTION ---------- */
 
        getPlayerMove();
        getComputerMove();
        getWinner();

/* ---------- PLAYER MOVE SECTION ---------- */

    function getPlayerMove(move) {
// Write an expression that operates on a variable called `move`
// If a `move` has a value, your expression should evaluate to that value.
// However, if `move` is not specified / is null, your expression should equal `getInput()`.
        move ? move : getInput();
            return move ;
    }

/* ---------- COMPUTER MOVE SECTION ---------- */

    function getComputerMove(move) {
// Write an expression that operates on a variable called `move`
// If a `move` has a value, your expression should evaluate to that value.
// However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
        move ? move : randomPlay();
            return move ;
    }

/* ---------- WINNER DECLARATION SECTION ---------- */

    function getWinner(playerMove,computerMove) {
        var winner;
// Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
// Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
// The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
/* YOUR CODE HERE */
        if(playerMove === computerMove) {
            winner = 'Tie';
        }else if(getWinner('rock','scissors') || getWinner('scissors','paper')) {
            winner = 'Player';
        }else {
            winner = 'Computer';
            return winner;
    }
    }
