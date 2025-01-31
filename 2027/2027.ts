function minimumMoves(s: string): number {
    let moves = 0;

    let i = 0;
    const c = s.split('');

    while (i < c.length) {
        if (c[i] === 'X') {
            moves++;
            c[i] = 'O';
            if (i < c.length - 1) { c[i + 1] = 'O'; }
            if (i < c.length - 2) { c[i + 2] = 'O'; }
            i += 3;
        } else {
            i++;
        }
    }

    console.log(c.join(''));

    return moves;
};

console.log(minimumMoves('XXOX'));
