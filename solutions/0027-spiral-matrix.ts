/**
 * LeetCode #54 - Spiral Matrix
 * Difficulty: Medium
 *
 * Problem:
 * Given an m x n matrix, return all elements
 * of the matrix in spiral order.
 *
 * Example:
 * Input:
 * [
 *   [1,2,3],
 *   [4,5,6],
 *   [7,8,9]
 * ]
 *
 * Output:
 * [1,2,3,6,9,8,7,4,5]
 *
 * Time Complexity: O(m * n)
 * Space Complexity: O(1) excluding the output array
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
function spiralOrder(matrix: number[][]): number[] {
  const result: number[] = [];

  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    // 1. Left → Right
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }

    top++;

    // 2. Top → Bottom
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }

    right--;

    // 3. Right → Left
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }

      bottom--;
    }

    // 4. Bottom → Top
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }

      left++;
    }
  }

  return result;
}

// Test Cases
console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
// [1,2,3,6,9,8,7,4,5]

console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);
// [1,2,3,4,8,12,11,10,9,5,6,7]

console.log(
  spiralOrder([[1, 2, 3]])
);
// [1,2,3]

console.log(
  spiralOrder([[1], [2], [3]])
);
// [1,2,3]