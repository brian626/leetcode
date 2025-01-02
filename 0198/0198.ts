function rob(nums: number[]): number {
    if (nums.length === 0) { return 0; }

    let prev2 = 0;
    let prev1 = nums[0];
    for (let i = 1; i < nums.length; i++) {
        let temp = prev1;
        prev1 = Math.max(prev2 + nums[i], prev1);
        prev2 = temp;
    }

    return prev1;
}

console.log(rob([1,2,3,1])); // 4
console.log(rob([2,7,9,3,1])); // 12
console.log(rob([2,1,1,2])); // 4
console.log(rob([0])); // 0
console.log(rob([1,3,1])); // 3
