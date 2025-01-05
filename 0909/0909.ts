function snakesAndLadders(board: number[][]): number {
    const n = board.length;
    let row = n - 1;
    let col = 0;
    const visited: boolean[] = [];
    visited[1] = true;

    const moves = [];
    moves.push({ square: 1, rolls: 0 });

    let minRolls = Infinity;

    while (moves.length > 0) {
        const m = moves.shift();
        if (m.square === Math.pow(n, 2)) {
            minRolls = Math.min(minRolls, m.rolls);
            console.log(`reached the end in ${m.rolls} moves:`);
            console.log(m);
            continue;
        } else if ((m.rolls >= minRolls) || (m.rolls >= Math.pow(n, 2) - 1)) {
            continue;
        }

        for (let i = m.square + 1; i <= Math.min(m.square + 6, Math.pow(n, 2)); i++) {
            const [moveRow, moveCol] = mapSquareToCoords(n, i);
            if (board[moveRow][moveCol] === -1) {
                if (visited[i] === undefined) {
                    visited[i] = true;
                    console.log(`pushing move {${i},${m.rolls + 1}}`);
                    moves.push({ square: i, rolls: m.rolls + 1 });
                }
            } else {
                if (visited[board[moveRow][moveCol]] === undefined) {
                    visited[board[moveRow][moveCol]] = true;
                    console.log(`pushing move {${board[moveRow][moveCol]},${m.rolls + 1}}`);
                    moves.push({ square: board[moveRow][moveCol], rolls: m.rolls + 1 });
                }
            }
        }
    }

    return minRolls === Infinity ? -1 : minRolls;
};

function mapSquareToCoords(n: number, s: number): number[] {
    let row = (n - 1) - Math.floor((s - 1) / n);
    let col = 0;
    if (n % 2 === 0) {
        if (row % 2 === 1) {
            col = (s - 1) % n;
        } else {
            col = (n - 1) - ((s - 1) % n);
        }
    } else {
        if (row % 2 === 0) {
            col = (s - 1) % n;
        } else {
            col = (n - 1) - ((s - 1) % n);
        }
    }

    console.log(`mapping square ${s} to [${row},${col}]`);
    return [row, col];
}


const board = [[1, 1, -1], [1, 1, 1], [-1, 1, 1]];

console.log(snakesAndLadders(board));
