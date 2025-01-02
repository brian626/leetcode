function findPeakElement(nums: number[]): number {
    if (nums.length == 1) { return 0 }

    nums.unshift(Math.pow(-2, 31) - 1)
    nums.push(Math.pow(-2, 31) - 1)

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] < nums[i+1] && nums[i+1] > nums[i+2]) {
            return i
        }
    }
};

console.log(findPeakElement([1,2,3,1]))
// Output: 2

console.log(findPeakElement([1,2,1,3,5,6,4]))
// Output: 1 or 5

console.log(findPeakElement([1]))
console.log(findPeakElement([2,1]))
console.log(findPeakElement([3,2,1]))
console.log(findPeakElement([1,2,3,4]))
