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

function getUserChoice() {
    let userChoice = prompt("Choose Rock, Paper or Scissor. :").toLowerCase();
    return userChoice;
}

function playRound (playerSelection, computerSelection) {
    

    if (playerSelection == computerSelection) {
        console.log("You chose " + playerSelection + "-----" + "Computer chose " + computerSelection);
        console.log("its a TIE!");
        return 1
    } else if ((playerSelection == "rock" && computerSelection == "paper") || playerSelection == "paper" && computerSelection == "scissor") {
        console.log("You chose " + playerSelection + "-----" + "Computer chose " + computerSelection);
        console.log("You Lose!")
        return 2
    } else {
        console.log("You chose " + playerSelection + "-----" + "Computer chose " + computerSelection);
        console.log("You WON! CONGRATULATIONS!!!")
        return 3
    }

}

let playerScore = 0;
let computerScore = 0; 


// for (let i = 1; i < 6; i++) {
//     console.log("Round " + i)
//     let result = playRound(getUserChoice(),getComputerChoice());
//     if (result == 1) {
//     } else if (result == 2) {
//         computerScore += 1;
//     } else {
//         playerScore += 1;
//     }
//     console.log("Scoreboard: ");
//     console.log("Player: " + playerScore + "     " + "Computer: " + computerScore);
//     if (i == 5) {
//         if(computerScore > playerScore) {
//             console.log("Computer WON the Game!");
//         } else if (computerScore < playerScore) {
//             console.log("You WON the Game!");
//         } else {
//             console.log("Game is Tied the Game!");
//         }
//     }

// }

