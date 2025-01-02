function findKthLargest(nums: number[], k: number): number {
    return nums.sort((a,b) => (a - b))[nums.length - k]
};

console.log(findKthLargest([3,2,1,5,6,4], 2)) // Output: 5
console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4)) // Output: 4
