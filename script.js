function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"]
    let number = Math.floor(Math.random()*3)
    return choice[number]
}



function result(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection == "paper") {
        console.log("You lose! Paper beats rock!")
    }
    else if(playerSelection==="rock" && computerSelection == "scissors"){
        console.log("You win! Rock beats scissors")
    } 
    else if (playerSelection === "paper" && computerSelection=="rock") {
        console.log("You win! Paper beats rock!")
    }
    else if (playerSelection == "paper" && computerSelection=="scissors"){
        console.log("You lose! Scissors beats paper!")
    }
    else if(playerSelection == "scissors" && computerSelection=="rock"){
        console.log("You lose! Rock beats scissors!")
    }
    else if (playerSelection=="scissors" && computerSelection=="paper"){
        console.log("You win! Scissors beats paper!")
    }
    else {
        console.log("Try again!")
    }

}

function game() {
    for (let i=0;i <5;i++){
        let playerSelection = prompt("Choose rock, paper or scissors: ")
        playerSelection = playerSelection.toLowerCase()
        let computerSelection = getComputerChoice() 
        result(playerSelection, computerSelection)
    }

}


