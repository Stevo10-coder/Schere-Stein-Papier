const wordList = ["Schere", "Stein", "Papier"];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    return wordList[randomIndex];
}

function getHumanChoice() {
    const question = prompt("Wähle Schere, Stein oder Papier?");
    return question[0].toUpperCase() + question.slice(1).toLowerCase();
   
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    computerChoice === computerChoice.toLowerCase();

    if (humanChoice === computerChoice){
        console.log("Unentschieden!");
    } else if (humanChoice === "Papier" && computerChoice === "Stein") {
        console.log("Papier schlägt Stein! Du hast gewonnen!");
        humanScore++;
        console.log("HumanScore:", + humanScore);
    } else if (humanChoice === "Stein" && computerChoice === "Schere") {
        console.log("Stein schlägt Schere! Du hast gewonnen!");
        humanScore++;
        console.log("HumanScore:", + humanScore);
    } else if (humanChoice === "Schere" && computerChoice === "Papier") {
        console.log("Schere schlägt Papier! Du hast gewonnen!");
        humanScore++;
        console.log("HumanScore:", + humanScore);
    } else {
        console.log("Du hast verloren!");
        computerScore++;
        console.log("ComputerScore:", + computerScore);
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log("Du:", humanSelection);
console.log("Computer:", computerSelection);

playRound(humanSelection, computerSelection);