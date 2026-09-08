/**
 * LeetCode #11 - Container With Most Water
 * Difficulty: Medium
 *
 * Problem:
 * Given an integer array height, find two lines that together
 * with the x-axis form a container that can store the most water.
 *
 * Example 1:
 * Input: height = [1,8,6,2,5,4,8,3,7]
 * Output: 49
 *
 * Example 2:
 * Input: height = [1,1]
 * Output: 1
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;

  let maxWater = 0;

  while (left < right) {
    // Width between two lines
    const width = right - left;

    // Water height is determined by the shorter line
    const currentHeight = Math.min(height[left], height[right]);

    // Calculate current area
    const currentArea = width * currentHeight;

    // Update maximum water
    maxWater = Math.max(maxWater, currentArea);

    // Move the pointer with the smaller height
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
}

// Test Cases
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
// Output: 49

console.log(maxArea([1, 1]));
// Output: 1

console.log(maxArea([1, 2, 1]));
// Output: 2

console.log(maxArea([4, 3, 2, 1, 4]));
// Output: 16