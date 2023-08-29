const gameBoard = document.getElementById("gameboard");
const info = document.getElementById("info");
const startCells = [
    "", "", "", "", "", "", "", "", ""
];

function createBoard() {
    startCells.forEach((cell, index) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('square');
        cellElement.id = index;
        gameBoard.append(cellElement);

        cellElement.addEventListener('click', addGo)
    });
};

createBoard();

function addGo(event)  {
    const goDisplay = document.createElement('div');
    goDisplay.classList.add('cross');
    event.target.append(goDisplay);
}