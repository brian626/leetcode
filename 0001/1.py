# Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

# You may assume that each input would have exactly one solution, and you may not use the same element twice.

# You can return the answer in any order.



# Example 1:

# Input: nums = [2,7,11,15], target = 9
# Output: [0,1]
# Output: Because nums[0] + nums[1] == 9, we return [0, 1].

# Example 2:

# Input: nums = [3,2,4], target = 6
# Output: [1,2]

# Example 3:

# Input: nums = [3,3], target = 6
# Output: [0,1]


# Constraints:

# 2 <= nums.length <= 103
# -109 <= nums[i] <= 109
# -109 <= target <= 109
# Only one valid answer exists.

from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        first, second = -999, -999

        for i, n in enumerate(nums):
            if second != -999:
                break

            print(f"setting first to {i}")
            first = i

            for j, m in enumerate(nums[(i+1):]):
                if nums[i] + m == target:
                    print(f"setting second to {j + i + 1}")
                    second = (j + i + 1)
                    break

        return [first, second]

s = Solution()

print(s.twoSum([2,7,11,15], 9))
# Output: [0,1]

print(s.twoSum([3,2,4], 6))
# Output: [1,2]

print(s.twoSum([3,3], 6))
# Output: [0,1]

print(s.twoSum([-1,-2,-3,-4,-5], -8))
# [2,4]
