function numberGame(nums: number[]): number[] {
    let arr: number[] = [];

    while(nums.length > 0) {
        const alice = Math.min(...nums);
        let minNumIndex = nums.indexOf(alice);
        nums.splice(minNumIndex, 1);

        const bob = Math.min(...nums);
        minNumIndex = nums.indexOf(bob);
        nums.splice(minNumIndex, 1);

        arr.push(bob);
        arr.push(alice);
    }

    return arr;
};

const nums = [4,4,3,8]
console.log(numberGame(nums));
