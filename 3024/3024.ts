function triangleType(nums: number[]): string {
    if (!isTriangle(nums)) {
        return 'none';
    }

    if (nums[0] === nums[1] && nums[1] === nums[2]) {
        return 'equilateral';
    }

    if (nums[0] === nums[1] || nums[0] === nums[2] || nums[1] === nums[2]) {
        return 'isosceles';
    }

    return 'scalene';
};


function isTriangle(nums: number[]): boolean {
    if ((nums[0] + nums[1]) <= nums[2]) { return false; }
    if ((nums[0] + nums[2]) <= nums[1]) { return false; }
    if ((nums[1] + nums[2]) <= nums[0]) { return false; }

    return true;
}
