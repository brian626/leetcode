function winningPlayer(x: number, y: number): string {
    let turns = 0;

    while ((x > 0) && (y > 3)) {
        turns++;
        x -= 1;
        y -= 4;
    }

    return turns % 2 === 0 ? 'Bob' : 'Alice';
};
