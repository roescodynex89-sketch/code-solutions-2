/**
 * LeetCode #41 - First Missing Positive
 * Difficulty: Hard
 *
 * Problem:
 * Given an unsorted integer array nums,
 * return the smallest positive integer that is missing.
 *
 * Example:
 * nums = [1,2,0]
 * Output: 3
 *
 * nums = [3,4,-1,1]
 * Output: 2
 *
 * nums = [7,8,9,11,12]
 * Output: 1
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
function firstMissingPositive(nums: number[]): number {
  const n = nums.length;

  // Put each positive number in its correct position.
  for (let i = 0; i < n; i++) {
    while (
      nums[i] > 0 &&
      nums[i] <= n &&
      nums[nums[i] - 1] !== nums[i]
    ) {
      const correctIndex = nums[i] - 1;

      // Swap current number to its correct position
      [nums[i], nums[correctIndex]] = [
        nums[correctIndex],
        nums[i],
      ];
    }
  }

  // Find the first position where the number is incorrect
  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  // If 1 to n are all present
  return n + 1;
}

// Test Cases
console.log(firstMissingPositive([1, 2, 0])); 
// 3

console.log(firstMissingPositive([3, 4, -1, 1])); 
// 2

console.log(firstMissingPositive([7, 8, 9, 11, 12])); 
// 1

console.log(firstMissingPositive([1])); 
// 2

console.log(firstMissingPositive([1, 2, 3])); 
// 4

console.log(firstMissingPositive([2, 1])); 
// 3

console.log(firstMissingPositive([3, 4, -1, 1, 2])); 
// 5