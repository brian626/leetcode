function totalFruit(fruits: number[]): number {
    const treeCount: Map<number, number> = new Map<number, number>();
    for (let i = 0; i < fruits.length; i++) {
        treeCount.set(fruits[i], (treeCount.get(fruits[i]) || 0) + 1);
    }
    if (treeCount.size < 3) { return fruits.length; }

    let tree1 = 0;
    let maxFruits = 0;

    while (tree1 < fruits.length) {
        const fruit1 = fruits[tree1];
        let tree2 = tree1 + 1;
        while (fruits[tree2] === fruit1) {
            tree2++;
        }
        const fruit2 = fruits[tree2] === undefined ? -1 : fruits[tree2];

        // console.log(tree1, tree2);
        // console.log(fruit1, fruit2);

        let fruitCount = 0;
        for (let i = tree1; i < fruits.length; i++) {
            if (fruits[i] === fruit1) {
                fruitCount++;
            } else if (fruits[i] !== fruit2) {
                break;
            }
        }

        for (let i = tree2; i < fruits.length; i++) {
            if (fruits[i] === fruit2) {
                fruitCount++;
            } else if (fruits[i] !== fruit1) {
                break;
            }
        }

        maxFruits = Math.max(maxFruits, fruitCount);
        tree1++;
    }

    return maxFruits;
};

const fruits = [1, 0]

console.log(totalFruit(fruits));
