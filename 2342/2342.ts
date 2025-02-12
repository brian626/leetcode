function maximumSum(nums: number[]): number {
    const digitSums: Map<number, number[]> = new Map<number, number[]>();

    for (const num of nums) {
        const sum = digitSum(num);
        const currentSet = digitSums.get(sum) || [];
        currentSet.push(num);
        digitSums.set(sum, currentSet);
    }

    console.log(digitSums);

    let maxSum = -1;

    for (const [k, v] of digitSums) {
        if (v.length > 1) {
            v.sort((a, b) => b - a);
            maxSum = Math.max(maxSum, v[0] + v[1]);
        }
    }

    return maxSum;
};

function digitSum(num: number): number {
    return num.toString().split('').map(x => parseInt(x)).reduce((a, b) => a + b, 0);

}

const nums = [18, 43, 36, 13, 7];

console.log(maximumSum(nums));
