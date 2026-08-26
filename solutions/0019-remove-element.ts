/**
 * LeetCode #27 - Remove Element
 * Difficulty: Easy
 *
 * Problem:
 * Given an integer array nums and an integer val,
 * remove all occurrences of val in-place.
 *
 * Return the number of elements that are not equal to val.
 *
 * The first k elements of nums must contain the elements
 * that are not equal to val.
 *
 * Example:
 * Input: nums = [3,2,2,3], val = 3
 * Output: 2
 * nums = [2,2,_,_]
 *
 * Example:
 * Input: nums = [0,1,2,2,3,0,4,2], val = 2
 * Output: 5
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums: number[], val: number): number {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    // Keep only elements that are not equal to val
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}

// Test Cases
const nums1 = [3, 2, 2, 3];
const k1 = removeElement(nums1, 3);

console.log(k1);    // 2
console.log(nums1); // [2, 2, 2, 3]


const nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
const k2 = removeElement(nums2, 2);

console.log(k2);    // 5
console.log(nums2); // [0, 1, 3, 0, 4, 2, 2, 2]