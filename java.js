const wordList = ["Schere", "Stein", "Papier"];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    return wordList[randomIndex];
}

console.log(getComputerChoice());