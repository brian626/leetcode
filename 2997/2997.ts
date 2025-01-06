function minOperations(nums: number[], k: number): number {
    const xorOfNums = nums.reduce((a, b) => a ^ b, 0);

    const oneBitsInNums: number[] = xorOfNums.toString(2).padStart(20, '0').split('').map(x => parseInt(x));

    // const oneBitsInNums: number[] = Array(20).fill(0);

    // for (const n of nums) {
    //     const bits: string[] = n.toString(2).padStart(20, '0').split('');
    //     for (let i = bits.length; i >= 0; i--) {
    //         if (bits[i] === '1') {
    //             oneBitsInNums[i]++;
    //         }
    //     }
    // }

    console.log(oneBitsInNums.join(''));

    const oneBitsInK: number[] = k.toString(2).padStart(20, '0').split('').map(x => parseInt(x));

    console.log(oneBitsInK.join(''));

    let operations = 0;

    for (let i = 0; i < oneBitsInK.length; i++) {
        if ((oneBitsInNums[i] % 2) !== oneBitsInK[i]) {
            operations++;
        }
        // if ((oneBitsInNums[i] % 2) === 0 && oneBitsInK[i] === 0) {
        //     ;
        // } else if ((oneBitsInNums[i] % 2) === 0 && oneBitsInK[i] === 1) {
        //     operations++;
        // } else if ((oneBitsInNums[i] % 2) === 1 && oneBitsInK[i] === 0) {
        //     operations++;
        // } else if ((oneBitsInNums[i] % 2) === 1 && oneBitsInK[i] === 1) {
        //     ;
        // }
    }

    return operations;
};

const nums = [2,1,3,4];
const k = 1;

console.log(minOperations(nums, k));
