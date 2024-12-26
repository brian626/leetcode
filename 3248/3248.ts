function finalPositionOfSnake(n: number, commands: string[]): number {
    let rSnake = 0, cSnake = 0;

    for (const command of commands) {
        switch (command) {
            case 'UP': rSnake--; break;
            case 'DOWN': rSnake++; break;
            case 'LEFT': cSnake--; break;
            case 'RIGHT': cSnake++; break;
        }
    }

    return (rSnake * n) + cSnake;
};

const n = 3
const commands = ["DOWN","RIGHT","UP"]

console.log(finalPositionOfSnake(n, commands));
