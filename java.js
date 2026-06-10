

const wordList = ["Schere", "Stein", "Papier"];
const schereBtn = document.querySelector("#Schere");
const steinBtn = document.querySelector("#Stein");
const papierBtn = document.querySelector("#Papier");
const results = document.querySelector("#results");
const score = document.querySelector("#score");
const newButton = document.querySelector("#newButton");



let humanScore = 0;
    let computerScore = 0;

results.textContent = "Viel Glück beim Spielen :)";


function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    return wordList[randomIndex];
}

// Button für das Spiel Geschehen
schereBtn.addEventListener("click", function() {
    playRound("Schere", getComputerChoice());
});

steinBtn.addEventListener("click", function() {
    playRound("Stein", getComputerChoice());
});

papierBtn.addEventListener("click", function() {
    playRound("Papier", getComputerChoice());
});

newButton.addEventListener("click", function() {
    resetGame();
});

function resetGame () {
    humanScore = 0;
    computerScore = 0;

    results.textContent = "Viel Glück beim spielen! :D";
    score.textContent = "Score - Du: 0  ||  Computer: 0";
    console.log(humanScore, computerScore);
}



function playRound(humanChoice, computerChoice) {
    let roundMessage = "";

    // Beendet das Spiel wenn jemand 5 Punkte hat.
    if (humanScore === 5 || computerScore === 5) {
        return;
    }

    if (humanChoice === computerChoice) {
        roundMessage = `Unentschieden! - Beide haben ${humanChoice}`;
    } else if (
        (humanChoice === "Stein" && computerChoice === "Schere" || 
         humanChoice === "Schere" && computerChoice === "Papier" ||
         humanChoice === "Papier" && computerChoice === "Stein")  
        ) {
            roundMessage = `${humanChoice} schlägt ${computerChoice}! - Du gewinnst diese Runde!`;
            humanScore++
        } else {
            roundMessage = `${computerChoice} schlägt ${humanChoice}! - Der Computer gewinnt diese Runde!`
            computerScore++
        }


    results.textContent = `${roundMessage}`;
    score.textContent = `Score - Du: ${humanScore} || Computer: ${computerScore}`;


  if (humanScore === 5) {
    results.textContent = "Du hast das Spiel gewonnen!";
  } else if (computerScore === 5) {
    results.textContent = "Der Computer hat das Spiel gewonnen!"
  }

}