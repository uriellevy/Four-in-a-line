type Player = "first" | "second";
const playerOne: Player = "first";
const playerTwo: Player = "second";
let currPlayer: Player = playerOne;

let gameOver = false;
let board: any[];

const rows = 6;
const columns = 7;
let currColumns: number[] = [];

window.onload = function () {
    setGame();
}

const setGame = () => {
    currColumns = [5, 5, 5, 5, 5, 5, 5];
    board = [];
    for (let r = 0; r < rows; r++) {
        let row: string[] = [];
        for (let c = 0; c < columns; c++) {
            row.push(" ");
            const tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.addEventListener("click", setPiece)
            document.getElementById("board")?.append(tile);
        }
        board.push(row);
    }
}

function setPiece(event: any) {
    if (gameOver) return;

    //get coords of tile clicked
    const elementCoords = event.srcElement.id.split("-");
    let r = parseInt(elementCoords[0]);
    const c = parseInt(elementCoords[1]);

    // figure out which row the current column should be on
    r = currColumns[c]

    if (r < 0) { // board[r][c] != ' '
        return;
    }

    console.log(board)



}



