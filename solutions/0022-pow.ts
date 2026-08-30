/**
 * LeetCode #50 - Pow(x, n)
 * Difficulty: Medium
 *
 * Problem:
 * Implement pow(x, n), which calculates x raised to the power n.
 *
 * Example:
 * x = 2, n = 10
 * Output = 1024
 *
 * x = 2.1, n = 3
 * Output = 9.261
 *
 * x = 2, n = -2
 * Output = 0.25
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
function myPow(x: number, n: number): number {
  // Handle negative exponent
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  let result = 1;

  while (n > 0) {
    // If n is odd
    if (n % 2 === 1) {
      result *= x;
    }

    // Square x
    x *= x;

    // Divide n by 2
    n = Math.floor(n / 2);
  }

  return result;
}

// Test Cases
console.log(myPow(2, 10));   // 1024
console.log(myPow(2.1, 3));  // 9.261
console.log(myPow(2, -2));   // 0.25
console.log(myPow(5, 0));    // 1
console.log(myPow(3, 4));    // 81