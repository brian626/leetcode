function canThreePartsEqualSum(arr: number[]): boolean {
    const totalSum = arr.reduce((a, b) => a + b, 0);
    if (totalSum % 3 !== 0) { return false; }

    const partSum = totalSum / 3;

    let i = 1;
    let partSum1 = arr[0];
    while (partSum1 !== partSum && i < arr.length) {
        partSum1 += arr[i];
        i++;
    }

    let j = i + 1;
    let partSum2 = arr[i];
    while (partSum2 !== partSum && j < arr.length) {
        partSum2 += arr[j];
        j++;
    }

    const partSum3 = j < arr.length ? arr.slice(j).reduce((a, b) => a + b, 0) : -1;

    return partSum1 === partSum && partSum2 === partSum && partSum3 === partSum;
};

const arr = [1, -1, 1, -1]
console.log(canThreePartsEqualSum(arr));
