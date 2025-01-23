function minimumOperations(nums: number[]): number {
    let count = 0;

    while (!elementsAreUnique(nums)) {
        count++;
        nums = nums.slice(3);
    }

    return count;
};


function elementsAreUnique(nums: number[]): boolean {
    const frequencies: Map<number, number> = new Map<number, number>();

    for (const num of nums) {
        frequencies.set(num, (frequencies.get(num) || 0) + 1);
    }

    let isUnique = true;
    for (const [num, frequency] of frequencies) {
        if (frequency > 1) {
            isUnique = false;
            break;
        }
    }

    return isUnique;
}

const nums = [1, 2, 3, 4, 2, 3, 3, 5, 7];

console.log(minimumOperations(nums));
