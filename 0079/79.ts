function exist(board: string[][], word: string): boolean {
    let starts: number[][] = [];

    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[0].length; c++) {
            if (board[r][c] === word[0]) {
                starts.push([r, c]);
            }
        }
    }

    for (const start of starts) {
        if (canFinish(start, board, word)) {
            return true;
        }
        console.log();
    }

    return false;
};


function canFinish(start: number[], board: string[][], word: string): boolean {
    let [rPos, cPos] = start;
    console.log(`[${rPos},${cPos}]: ${board[rPos][cPos]}`);
    const cellsVisited: Set<string> = new Set<string>([`${rPos},${cPos}`]);

    let success = true;

    for (let i = 1; i < word.length; i++) {
        let rNext = rPos, cNext = cPos;

        if (rPos < board.length - 1 && board[rPos + 1][cPos] === word[i]) {
            rNext = rPos + 1;
        } else if (rPos > 0 && board[rPos - 1][cPos] === word[i]) {
            rNext = rPos - 1;
        } else if (board[rPos][cPos + 1] === word[i]) {
            cNext = cPos + 1;
        } else if (board[rPos][cPos - 1] === word[i]) {
            cNext = cPos - 1;
        } else {
            console.log(`no neighbor to [${rPos},${cPos}] matches ${word[i]}`);
            success = false;
            break;
        }

        console.log(cellsVisited);
        if (cellsVisited.has(`${rNext},${cNext}`)) {
            console.log(`already seen this path`);
            return false;
        }
        cellsVisited.add(`${rNext},${cNext}`);
        rPos = rNext;
        cPos = cNext;
        console.log(`[${rPos},${cPos}]: ${board[rPos][cPos]}`);
    }

    return success;
}




const board = [["C","A","A"],["A","A","A"],["B","C","D"]]
const word = "AAB"

console.log(exist(board, word));
