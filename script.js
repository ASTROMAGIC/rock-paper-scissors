console.log("Hello World!")

function game() {
    function getComputerChoice() {
        const words = ["rock", "paper", "scissor"];
        const n = Math.floor(Math.random() * words.length);
        
        return words[n];

    }
    function playerRound (player Selection, computer) {
        
        let player = playerSelection.toLowerCase();

        if (player === computer) {
            return "Draw Match";
        }   else if (player === 'rock') && computer === 'paper') {
            computerScore += 1; 
            return "You Lose ... 'Paper beats Rock'";
        } 


    }
}