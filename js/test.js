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

function playRound (playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log("You chose " + playerSelection + "-----" + "Computer chose " + computerSelection);
        console.log("its a TIE!");
        return 1
    } else if ((playerSelection === "rock" && computerSelection === "paper") 
    || (playerSelection === "paper" && computerSelection === "scissor") 
    || (playerSelection === "scissor" && computerSelection === "rock")) { // ++ the computer score when Computer wins
        console.log("You chose " + playerSelection + "-----" + "Computer chose " + computerSelection);
        console.log("You Lose!")
        
        computerScore = document.getElementById("computer-score");
        computerScore.textContent++;
        return 2
    } else { // + the player score when player wins
        console.log("You chose " + playerSelection + "-----" + "Computer chose " + computerSelection);
        console.log("You WON! CONGRATULATIONS!!!")
        
        playerScore = document.getElementById("player-score");
        playerScore.textContent++;
        return 3
    }

}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");

rock.addEventListener("click", (e) => {
    console.log(e.target.id)
    playRound(e.target.id,getComputerChoice());
});
paper.addEventListener("click", (e) => {
    playRound(e.target.id,getComputerChoice());
});
scissor.addEventListener("click", (e) => {
    playRound(e.target.id,getComputerChoice());
});


