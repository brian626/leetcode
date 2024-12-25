// 37. Sudoku Solver

// Write a program to solve a Sudoku puzzle by filling the empty cells.

// A sudoku solution must satisfy all of the following rules:

// Each of the digits 1-9 must occur exactly once in each row.
// Each of the digits 1-9 must occur exactly once in each column.
// Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
// The '.' character indicates empty cells.

// Example 1:

// Input: board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
// Output: [["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]
// Explanation: The input board is shown above and the only valid solution is shown below:

// Constraints:

// board.length == 9
// board[i].length == 9
// board[i][j] is a digit or '.'.
// It is guaranteed that the input board has only one solution.

/**
 Do not return anything, modify board in-place instead.
 */
// function solve(sudokuMap: Map<[number, number], string[]>): void {
//     for (let r = 0; r < 9; r++) {
//         for (let c = 0; c < 9; c++) {
//             let guesses: string[] = sudokuMap.get([r,c]);
//             if (guesses.length === undefined) {
//                 let row: string[] =
//             }
//         }
//     }
// }

function solveSudoku(board: string[][]): void {
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            if (board[r][c] === '.') {
                // figure out guesses
                let knownValuesInRow: string[] = Array.from(board[r]);

                let knownValuesInCol: string[] = []
                for (let x = 0; x < 9; x++) { knownValuesInCol.push(board[x][c]); }

                let knownValuesInBox: string[] = []
            }
        }
    }
    // let sudokuMap: Map<[number, number],string[]> = new Map<[number, number], string[]>();
    // for (let r = 0; r < 9; r++) {
    //     for (let c = 0; c < 9; c++) {
    //         if (board[r][c] != '.') {
    //             sudokuMap.set([r,c], [board[r][c]]);
    //         }
    //     }
    // }

    // while (true) {
    //     solve(sudokuMap);
    //     if (finished(sudokuMap)) {
    //         break;
    //     }
    // }
};
