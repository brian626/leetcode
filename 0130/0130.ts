/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
    printBoard(board);

    for (let r = 1; r < board.length - 1; r++) {
        for (let c = 1; c < board[0].length - 1; c++) {
            if (board[r][c] === 'O') {
                console.log(`flipping [${r},${c}] from O to Y`);
                // if (isSurrounded(board, r, c)) {
                board[r][c] = 'Y';
                // }
            }
        }
    }

    printBoard(board);

    let captured = true;
    while (captured) {
        captured = false;

        for (let r = 1; r < board.length - 1; r++) {
            for (let c = 1; c < board[0].length - 1; c++) {
                if (board[r][c] === 'Y') {
                    if (canCapture(board, r, c)) {
                        console.log(`flipping [${r},${c}] from Y to O`);
                        captured = true;
                        board[r][c] = 'O';
                    }
                }
            }
        }
    }

    printBoard(board);

    for (let r = 1; r < board.length - 1; r++) {
        for (let c = 1; c < board[0].length - 1; c++) {
            if (board[r][c] === 'Y') {
                board[r][c] = 'X';
            }
        }
    }

    printBoard(board);
};


function isSurrounded(board: string[][], row: number, col: number): boolean {
    return board[row - 1][col] === 'X' || board[row + 1][col] === 'X' || board[row][col - 1] === 'X' || board[row][col + 1] === 'X';
}

function canCapture(board: string[][], row: number, col: number): boolean {
    return board[row - 1][col] === 'O' || board[row + 1][col] === 'O' || board[row][col - 1] === 'O' || board[row][col + 1] === 'O';
    // return (board[row - 1][col] === 'X' || board[row - 1][col] === 'Y') &&
    //     (board[row + 1][col] === 'X' || board[row + 1][col] === 'Y') &&
    //     (board[row][col - 1] === 'X' || board[row][col - 1] === 'Y') &&
    //     (board[row][col + 1] === 'X' || board[row][col + 1] === 'Y');
}

function printBoard(board: string[][]) {
    for (let r = 0; r < board.length; r++) {
        console.log(board[r].join(''));
    }

    console.log();
}

const board = [
    ["O", "X", "X", "O", "X"],
    ["X", "O", "O", "X", "O"],
    ["X", "O", "X", "O", "X"],
    ["O", "X", "O", "O", "O"],
    ["X", "X", "O", "X", "O"]
];

solve(board);
console.log(board);
