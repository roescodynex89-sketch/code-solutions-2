/**
 * LeetCode #15 - 3Sum
 * Difficulty: Medium
 *
 * Problem:
 * Given an integer array nums, return all unique triplets
 * [nums[i], nums[j], nums[k]] such that:
 *
 * nums[i] + nums[j] + nums[k] === 0
 *
 * The solution must not contain duplicate triplets.
 *
 * Example:
 * Input: nums = [-1,0,1,2,-1,-4]
 * Output: [[-1,-1,2],[-1,0,1]]
 *
 * Input: nums = [0,1,1]
 * Output: []
 *
 * Input: nums = [0,0,0]
 * Output: [[0,0,0]]
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1) excluding the output array
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];

  // Sort the array
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicate first numbers
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([
          nums[i],
          nums[left],
          nums[right],
        ]);

        // Skip duplicate left values
        while (
          left < right &&
          nums[left] === nums[left + 1]
        ) {
          left++;
        }

        // Skip duplicate right values
        while (
          left < right &&
          nums[right] === nums[right - 1]
        ) {
          right--;
        }

        left++;
        right--;
      } else if (sum < 0) {
        // Need a bigger sum
        left++;
      } else {
        // Need a smaller sum
        right--;
      }
    }
  }

  return result;
}

// Test Cases
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// [[-1, -1, 2], [-1, 0, 1]]

console.log(threeSum([0, 1, 1]));
// []

console.log(threeSum([0, 0, 0]));
// [[0, 0, 0]]

console.log(threeSum([-2, 0, 1, 1, 2]));
// [[-2, 0, 2], [-2, 1, 1]]

console.log(threeSum([]));
// []