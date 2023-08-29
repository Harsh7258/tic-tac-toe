const gameBoard = document.getElementById("gameboard");
const infoDisplay = document.getElementById("info");
const startCells = [
    "", "", "", "", "", "", "", "", ""
];

let go = "circle";
infoDisplay.textContent = "Circle turn first";

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
    goDisplay.classList.add(go);
    event.target.append(goDisplay);
    go = go === "circle" ? "cross" : "circle";
    infoDisplay.textContent = "it is now " + go + "'s turn";
    event.target.removeEventListener("click", addGo);
    checkScore();
}

function checkScore() {
    const allSquares = document.querySelectorAll(".square");
    const winningCombos = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ];
    console.log(allSquares);

    winningCombos.forEach(arr => {
        const circleWins = arr.every(cell => allSquares[cell].firstChild?.classList.contains('circle'));

        if(circleWins){
            infoDisplay.textContent = "Circle Wins!!";
            allSquares.forEach(sq => sq.replaceWith(sq.cloneNode(true)))
            return
        }
    })

    winningCombos.forEach(arr => {
        const crossWins = arr.every(cell => allSquares[cell].firstChild?.classList.contains('cross'));

        if(crossWins){
            infoDisplay.textContent = "Cross Wins!!";
            allSquares.forEach(sq => sq.replaceWith(sq.cloneNode(true)))
            return
        }
    })
}
