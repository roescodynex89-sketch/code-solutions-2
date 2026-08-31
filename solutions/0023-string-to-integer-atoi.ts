/**
 * LeetCode #8 - String to Integer (atoi)
 * Difficulty: Medium
 *
 * Problem:
 * Convert a string into a 32-bit signed integer.
 *
 * Rules:
 * 1. Ignore leading spaces.
 * 2. Check for '+' or '-'.
 * 3. Read digits until a non-digit character appears.
 * 4. Keep the result inside the 32-bit signed integer range.
 *
 * Range:
 * MIN = -2147483648
 * MAX =  2147483647
 *
 * Examples:
 * "42"       → 42
 * " -042"    → -42
 * "1337c0d3" → 1337
 * "0-1"      → 0
 * "words"    → 0
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {string} s
 * @return {number}
 */
function myAtoi(s: string): number {
  const MAX = 2147483647;
  const MIN = -2147483648;

  let i = 0;
  let sign = 1;
  let result = 0;

  // Step 1: Skip leading spaces
  while (i < s.length && s[i] === " ") {
    i++;
  }

  // Step 2: Check sign
  if (s[i] === "-") {
    sign = -1;
    i++;
  } else if (s[i] === "+") {
    i++;
  }

  // Step 3: Read digits
  while (i < s.length) {
    const digit = s.charCodeAt(i) - 48;

    // Stop if current character is not a digit
    if (digit < 0 || digit > 9) {
      break;
    }

    // Step 4: Check overflow before adding digit
    if (
      result > Math.floor(MAX / 10) ||
      (result === Math.floor(MAX / 10) && digit > 7)
    ) {
      return sign === 1 ? MAX : MIN;
    }

    result = result * 10 + digit;

    i++;
  }

  return result * sign;
}

// Test Cases
console.log(myAtoi("42"));          // 42
console.log(myAtoi(" -042"));       // -42
console.log(myAtoi("1337c0d3"));    // 1337
console.log(myAtoi("0-1"));         // 0
console.log(myAtoi("words"));       // 0
