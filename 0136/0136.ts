function singleNumber(nums: number[]): number {
    if (nums.length == 1) { return nums[0]; }

    nums.sort((a,b) => a - b);
    let i = 0;
    while (i < nums.length) {
        if (nums[i] != nums[i+1]) { return nums[i]; }
        i += 2;
    }
};

console.log(singleNumber([2,2,1]))
// Output: 1

console.log(singleNumber([4,1,2,1,2]))
// Output: 4

console.log(singleNumber([1]))
// Output: 1

console.log(singleNumber([1,2,2,4,4]))
console.log(singleNumber([1,1,2,4,4]))
console.log(singleNumber([1,1,2,2,4]))
