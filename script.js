// ROCK PAPER SCISSORS 

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0; 
let computerScore = 0;


// we need a function called "playGame" that accepts one argument that is the player's choice 

function playGame (playerChoice){
    
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = " ";

    if(playerChoice === computerChoice){
        result = "IT'S A TIE!";
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break; 
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break; 
            case "scissors": 
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.remove("redText");
            resultDisplay.classList.remove("blackText");
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.remove("greenText");
            resultDisplay.classList.remove("blackText");
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break; 
        case "IT'S A TIE!":
            resultDisplay.classList.remove("redText");
            resultDisplay.classList.remove("greenText");
            resultDisplay.classList.add("blackText");   
            break; 
    }

    if (playerScore === 5) {
        resultDisplay.textContent = "PLAYER WINS!";
        resetGame();
    } else if (computerScore === 5) {
        resultDisplay.textContent = "COMPUTER WINS!";
        resetGame();
    }

    return result;
}

// there are multiple ways to restart this game. I can either write a new function that integrates with the playGame function I have already wrote, or integrate ways of resetting the game into my switch cases. Writing the function will require less code written and is far far cleaner, so I will go that route. 

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    resultDisplay.textContent = "New Game!";
    resultDisplay.classList.remove("redText", "greenText", "blackText");
}

// there is a slight issue with this method. It is clear who the winner is, the switching to the new game is abrupt and does not visibly declare the winner before before switching to the new game. So let's see how we can solve this. 


