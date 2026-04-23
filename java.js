const wordList = ["Schere", "Stein", "Papier"];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    return wordList[randomIndex];
}

console.log(getComputerChoice());

function getHumanChoice() {
    const question = prompt("Schere, Stein oder Papier?");
    return question
   
}

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

}