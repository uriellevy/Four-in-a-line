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
            tile.id = `${r}-${c}`;
            tile.classList.add("tile");
            tile.addEventListener("click", setPiece);
            (_a = document.getElementById("board")) === null || _a === void 0 ? void 0 : _a.append(tile);
        }
        board.push(row);
    }
};
const setPiece = (event) => {
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
    board[r][c] = currPlayer;
    let tile = document.getElementById(r.toString() + "-" + c.toString());
    if (currPlayer === playerOne) {
        tile === null || tile === void 0 ? void 0 : tile.classList.add("red-piece");
        currPlayer = playerTwo;
    }
    else {
        tile === null || tile === void 0 ? void 0 : tile.classList.add("yellow-piece");
        currPlayer = playerOne;
    }
    r--; //update the row height for that column
    currColumns[c] = r; //update the array
    checkWinner();
};
const checkWinner = () => {
    //horizontal check
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns - 3; c++) {
            if (board[r][c] !== " ") {
                const fourEqual = board[r][c] === board[r][c + 1] && board[r][c + 1] === board[r][c + 2] && board[r][c + 2] === board[r][c + 3];
                if (fourEqual) {
                    setWinner(r, c);
                    return;
                }
            }
        }
    }
    //vertical check 
    for (let r = 0; r < rows - 3; r++) {
        for (let c = 0; c < columns - 1; c++) {
            if (board[r][c] !== " ") {
                const fourEqual = board[r][c] === board[r + 1][c] && board[r + 1][c] === board[r + 2][c] && board[r + 2][c] === board[r + 3][c];
                if (fourEqual) {
                    setWinner(r, c);
                    return;
                }
            }
        }
    }
    // anti diagonal check
    for (let r = 0; r < rows - 3; r++) {
        for (let c = 0; c < columns - 3; c++) {
            if (board[r][c] != ' ') {
                const fourEqual = board[r][c] == board[r + 1][c + 1] && board[r + 1][c + 1] == board[r + 2][c + 2] && board[r + 2][c + 2] == board[r + 3][c + 3];
                if (fourEqual) {
                    setWinner(r, c);
                    return;
                }
            }
        }
    }
    // diagonal check
    for (let r = 3; r < rows; r++) {
        for (let c = 0; c < columns - 3; c++) {
            if (board[r][c] != ' ') {
                const fourEqual = board[r][c] == board[r - 1][c + 1] && board[r - 1][c + 1] == board[r - 2][c + 2] && board[r - 2][c + 2] == board[r - 3][c + 3];
                if (fourEqual) {
                    setWinner(r, c);
                    return;
                }
            }
        }
    }
};
const setWinner = (r, c) => {
    const winner = document.getElementById("winner");
    if (winner) {
        board[r][c] === playerOne ? winner.innerText = "Red Wins" : winner.innerText = "Yellow Wins";
    }
    gameOver = true;
};
