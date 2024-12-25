// 529. Minesweeper

// Let's play the minesweeper game (Wikipedia, online game)!

// You are given an m x n char matrix board representing the game board where:

// 'M' represents an unrevealed mine,
// 'E' represents an unrevealed empty square,
// 'B' represents a revealed blank square that has no adjacent mines (i.e., above, below, left, right, and all 4 diagonals),
// digit ('1' to '8') represents how many mines are adjacent to this revealed square, and
// 'X' represents a revealed mine.

// You are also given an integer array click where click = [clickr, clickc] represents the
// next click position among all the unrevealed squares ('M' or 'E').

// Return the board after revealing this position according to the following rules:

// If a mine 'M' is revealed, then the game is over. You should change it to 'X'.
// If an empty square 'E' with no adjacent mines is revealed, then change it to a revealed
//   blank 'B' and all of its adjacent unrevealed squares should be revealed recursively.
// If an empty square 'E' with at least one adjacent mine is revealed, then change it to a
//   digit ('1' to '8') representing the number of adjacent mines.
// Return the board when no more squares will be revealed.


// Example 1:

// Input: board = [["E","E","E","E","E"],["E","E","M","E","E"],["E","E","E","E","E"],["E","E","E","E","E"]], click = [3,0]
// Output: [["B","1","E","1","B"],["B","1","M","1","B"],["B","1","1","1","B"],["B","B","B","B","B"]]

// Example 2:

// Input: board = [["B","1","E","1","B"],["B","1","M","1","B"],["B","1","1","1","B"],["B","B","B","B","B"]], click = [1,2]
// Output: [["B","1","E","1","B"],["B","1","X","1","B"],["B","1","1","1","B"],["B","B","B","B","B"]]


// Constraints:

// m == board.length
// n == board[i].length
// 1 <= m, n <= 50
// board[i][j] is either 'M', 'E', 'B', or a digit from '1' to '8'.
// click.length == 2
// 0 <= clickr <= m
// 0 <= clickc <= n
// board[clickr][clickc] is either 'M' or 'E'.

function countSurroundingMines(board: string[][], click: number[]): number {
    let numMines = 0
    const clickr = click[0]
    const clickc = click[1]
    const canMoveLeft  = clickc > 0
    const canMoveRight = clickc < board[0].length - 1
    const canMoveUp    = clickr > 0
    const canMoveDown  = clickr < board.length - 1

    if (canMoveUp) {
        if (canMoveLeft &&  board[clickr - 1][clickc - 1] == "M") { numMines++ }
        if (                board[clickr - 1][clickc    ] == "M") { numMines++ }
        if (canMoveRight && board[clickr - 1][clickc + 1] == "M") { numMines++ }
    }
    if (canMoveLeft &&  board[clickr    ][clickc - 1] == "M") { numMines++ }
    if (canMoveRight && board[clickr    ][clickc + 1] == "M") { numMines++ }
    if (canMoveDown) {
        if (canMoveLeft &&  board[clickr + 1][clickc - 1] == "M") { numMines++ }
        if (                board[clickr + 1][clickc    ] == "M") { numMines++ }
        if (canMoveRight && board[clickr + 1][clickc + 1] == "M") { numMines++ }
    }

    return numMines
}

function evaluateClick(board: string[][], click: number[]): void {
    const clickr = click[0]
    const clickc = click[1]
    const canMoveLeft  = clickc > 0
    const canMoveRight = clickc < board[0].length - 1
    const canMoveUp    = clickr > 0
    const canMoveDown  = clickr < board.length - 1

    const numMines = countSurroundingMines(board, click)
    if (numMines == 0) {
        board[clickr][clickc] = "B"
        if (canMoveUp) {
            if (canMoveLeft &&  board[clickr - 1][clickc - 1] == "E") { evaluateClick(board, [clickr - 1, clickc - 1]) }
            if (                board[clickr - 1][clickc    ] == "E") { evaluateClick(board, [clickr - 1, clickc    ]) }
            if (canMoveRight && board[clickr - 1][clickc + 1] == "E") { evaluateClick(board, [clickr - 1, clickc + 1]) }
        }
        if (canMoveLeft &&  board[clickr    ][clickc - 1] == "E") { evaluateClick(board, [clickr    , clickc - 1]) }
        if (canMoveRight && board[clickr    ][clickc + 1] == "E") { evaluateClick(board, [clickr    , clickc + 1]) }
        if (canMoveDown) {
            if (canMoveLeft &&  board[clickr + 1][clickc - 1] == "E") { evaluateClick(board, [clickr + 1, clickc - 1]) }
            if (                board[clickr + 1][clickc    ] == "E") { evaluateClick(board, [clickr + 1, clickc    ]) }
            if (canMoveRight && board[clickr + 1][clickc + 1] == "E") { evaluateClick(board, [clickr + 1, clickc + 1]) }
        }
    }
    else {
        board[clickr][clickc] = numMines.toString()
    }
}

function updateBoard(board: string[][], click: number[]): string[][] {
    const clickr = click[0]
    const clickc = click[1]

    if (board[clickr][clickc] == "M") {
        board[clickr][clickc] = "X"
    }
    else {
        board[clickr][clickc] = "?"
        evaluateClick(board, click)
    }

    return board
};


// console.log(updateBoard([["E","E","E","E","E"],
//                          ["E","E","M","E","E"],
//                          ["E","E","E","E","E"],
//                          ["E","E","E","E","E"]], [3,0]))
// Output: [["B","1","E","1","B"],
//          ["B","1","M","1","B"],
//          ["B","1","1","1","B"],
//          ["B","B","B","B","B"]]

console.log(updateBoard([["B","1","E","1","B"],
                         ["B","1","M","1","B"],
                         ["B","1","1","1","B"],
                         ["B","B","B","B","B"]], [1,2]))
// Output: [["B","1","E","1","B"],
//          ["B","1","X","1","B"],
//          ["B","1","1","1","B"],
//          ["B","B","B","B","B"]]
