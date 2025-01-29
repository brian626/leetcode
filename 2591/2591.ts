function distMoney(money: number, children: number): number {
    const distribution: number[] = Array(children).fill(0);
    for (let i = 0; i < children; i++) {
        distribution[i] = 1;
        money -= 1;

        if (money < 0) { return -1; }
    }

    for (let i = 0; i < children; i++) {
        const moneyForChild = Math.min(7, money);
        distribution[i] += moneyForChild;
        money -= moneyForChild;

        if (money === 0) {
            break;
        }
    }

    console.log(distribution);

    let moneyToRedistribute = money;
    for (let i = 0; i < distribution.length; i++) {
        if (distribution[i] === 4) {
            distribution[i] = 3;
            moneyToRedistribute++;
        }
    }

    if (moneyToRedistribute > 0) {
        for (let i = 0; i < distribution.length; i++) {
            if (distribution[i] !== 8 && distribution[i] !== 3) {
                distribution[i] += moneyToRedistribute;
                moneyToRedistribute = 0;
            }
        }
    }

    if (moneyToRedistribute > 0) {
        distribution[0] += moneyToRedistribute;
    }

    if (distribution.filter(x => x < 1).length > 0) {
        return -1;
    }

    return distribution.filter(x => x === 8).length;
};
