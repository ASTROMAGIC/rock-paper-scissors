// ROCK PAPER SCISSORS 

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
let playerScore = 0; 
let computerScore = 0;


// we need a function called "playGame" that accepts one argument that is the player's choice 

function playGame (playerChoice){
    
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "IT'S A TIE!";
    }
    else{
        switch(playerChoice){
            case "rock":
                (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break; 
            case "paper":
                (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break; 
            case "scissors": 
                (computerChoice === "paper") ? "YOU WIN" : "YOU LOSE!";
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    return result; 
}


