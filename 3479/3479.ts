function numOfUnplacedFruits(fruits: number[], baskets: number[]): number {
    let placedFruits = 0;

    for (let i = 0; i < fruits.length; i++) {
        let placedFruit = false;

        for (let j = 0; j < baskets.length; j++) {
            if (baskets[j] >= fruits[i]) {
                placedFruit = true;
                baskets[j] = 0;
                break;
            }
        }

        if (placedFruit) {
            placedFruits++;
        }
    }

    return fruits.length - placedFruits;
};
