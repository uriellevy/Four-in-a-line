"use strict";
const playerOne = "first";
const playerTwo = "second";
let currPlayer = playerOne;
let gameOver = false;
let board;
const rows = 6;
const columns = 7;
let currColumns = [];
window.onload = function () {
    setGame();
};
const setGame = () => {
    var _a;
    currColumns = [5, 5, 5, 5, 5, 5, 5];
    board = [];
    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            row.push(" ");
            const tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.addEventListener("click", setPiece);
            (_a = document.getElementById("board")) === null || _a === void 0 ? void 0 : _a.append(tile);
        }
        board.push(row);
    }
};
function setPiece(event) {
    if (gameOver)
        return;
    //get coords of tile clicked
    const elementCoords = event.srcElement.id.split("-");
    let r = parseInt(elementCoords[0]);
    const c = parseInt(elementCoords[1]);
    // figure out which row the current column should be on
    r = currColumns[c];
    if (r < 0) { // board[r][c] != ' '
        return;
    }
    console.log(board);
}
