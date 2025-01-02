/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    if (nums.length < 2) { return }

    let i: number = 0
    let numShifts: number = 0
    while (i < (nums.length - numShifts)) {
        if (nums[i] == 0) {
            nums.splice(i,1)
            nums.push(0)
            numShifts++
        }
        else {
            i++
        }
    }
};

let nums = [0,1,0,3,12]
moveZeroes(nums)
console.log(nums) // Output: [1,3,12,0,0]

nums = [0]
moveZeroes(nums)
console.log(nums) // Output: [0]

nums = [0,0]
moveZeroes(nums)
console.log(nums) // Output: [0,0]

nums = [0,0,0]
moveZeroes(nums)
console.log(nums) // Output: [0,0,0]

nums = [1,0,0,0]
moveZeroes(nums)
console.log(nums) // Output: [1,0,0,0]

nums = [0,1,0,0]
moveZeroes(nums)
console.log(nums) // Output: [1,0,0,0]

nums = [0,0,1,0]
moveZeroes(nums)
console.log(nums) // Output: [1,0,0,0]

nums = [0,0,0,1]
moveZeroes(nums)
console.log(nums) // Output: [1,0,0,0]
