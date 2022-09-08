function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 3) +1;
    if (randomNumber == 1) {
        return "rock";
    } else if (randomNumber == 2) {
        return "paper";
    } else {
        return "scissor";
    };
}

function playerText (player,computer) {
    const roundChoicePlayer = document.getElementById("round-choice-player");
    roundChoicePlayer.textContent = "You chose " + player;
    
    const roundChoiceComputer = document.getElementById("round-choice-computer");
    roundChoiceComputer.textContent = "Computer chose " + computer;

}


let computerScore = document.getElementById("computer-score");
let playerScore = document.getElementById("player-score");
let endScore = document.getElementById("end-score");
const roundConclusion = document.getElementById("round-conclusion")

function playRound (playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        
        playerText(playerSelection,computerSelection);
        roundConclusion.textContent = "its a Tie!";
        return 1

    } else if ((playerSelection === "rock" && computerSelection === "paper") 
    || (playerSelection === "paper" && computerSelection === "scissor") 
    || (playerSelection === "scissor" && computerSelection === "rock")) { // ++ the computer score when Computer wins
        
        playerText(playerSelection,computerSelection);
        roundConclusion.textContent = "You Lost";
        computerScore.textContent++;
        return 2
    
    } else {                    // + the player score when player wins
        
        playerText(playerSelection,computerSelection);
        roundConclusion.textContent = "You Won!";
        playerScore.textContent++;
        return 3
    }



}



        const rock = document.querySelector("#rock");
        const paper = document.querySelector("#paper");
        const scissor = document.querySelector("#scissor");
        
        rock.addEventListener("click", (e) => {
            playRound(e.target.id,getComputerChoice());
        });
        paper.addEventListener("click", (e) => {
            playRound(e.target.id,getComputerChoice());
        });
        scissor.addEventListener("click", (e) => {
            playRound(e.target.id,getComputerChoice());
        });

