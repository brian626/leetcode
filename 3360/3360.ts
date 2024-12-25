function canAliceWin(n: number): boolean {
    let aliceWon = true;
    let stonesToRemove = 10;

    while (true) {
        // Alice's turn
        if (n >= stonesToRemove) {
            n -= stonesToRemove;
            stonesToRemove--;
        } else {
            aliceWon = false;
            break;
        }

        // Bob's turn
        if (n >= stonesToRemove) {
            n -= stonesToRemove;
            stonesToRemove--;
        } else {
            aliceWon = true;
            break;
        }
    }

    return aliceWon;
};

const n = 1;
console.log(canAliceWin(n));
