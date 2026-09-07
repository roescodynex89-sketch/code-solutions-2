/**
 * LeetCode #43 - Multiply Strings
 * Difficulty: Medium
 *
 * Problem:
 * Given two non-negative integers represented as strings,
 * return their product as a string.
 *
 * You must not use BigInt or convert the entire input directly to integer.
 *
 * Example 1:
 * Input: num1 = "2", num2 = "3"
 * Output: "6"
 *
 * Example 2:
 * Input: num1 = "123", num2 = "456"
 * Output: "56088"
 *
 * Time Complexity: O(m × n)
 * Space Complexity: O(m + n)
 */

function multiply(num1: string, num2: string): string {
  // If either number is 0, product is 0
  if (num1 === "0" || num2 === "0") {
    return "0";
  }

  const m = num1.length;
  const n = num2.length;

  // Maximum possible digits = m + n
  const result: number[] = new Array(m + n).fill(0);

  // Multiply each digit
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      const digit1 = Number(num1[i]);
      const digit2 = Number(num2[j]);

      const product = digit1 * digit2;

      // Current positions
      const position1 = i + j;
      const position2 = i + j + 1;

      const sum = product + result[position2];

      result[position2] = sum % 10;
      result[position1] += Math.floor(sum / 10);
    }
  }

  // Remove leading zeros
  let start = 0;

  while (start < result.length - 1 && result[start] === 0) {
    start++;
  }

  return result.slice(start).join("");
}

// Test Cases
console.log(multiply("2", "3"));
// Output: "6"

console.log(multiply("123", "456"));
// Output: "56088"

console.log(multiply("9", "9"));
// Output: "81"

console.log(multiply("99", "99"));
// Output: "9801"

console.log(multiply("0", "123"));
// Output: "0"