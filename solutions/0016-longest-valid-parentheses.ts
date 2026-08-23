/**
 * LeetCode #32 - Longest Valid Parentheses
 * Difficulty: Hard
 *
 * Problem:
 * Given a string containing only '(' and ')',
 * return the length of the longest valid parentheses substring.
 *
 * Example:
 * Input: s = "(()"
 * Output: 2
 *
 * Input: s = ")()())"
 * Output: 4
 *
 * Input: s = ""
 * Output: 0
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * @param {string} s
 * @return {number}
 */
function longestValidParentheses(s: string): number {
  const stack: number[] = [-1];
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    // Opening bracket
    if (s[i] === "(") {
      stack.push(i);
    } else {
      // Remove the matching opening bracket
      stack.pop();

      // If stack becomes empty, current ')' is invalid
      if (stack.length === 0) {
        stack.push(i);
      } else {
        // Calculate the current valid substring length
        const length = i - stack[stack.length - 1];

        maxLength = Math.max(maxLength, length);
      }
    }
  }

  return maxLength;
}

// Test Cases
console.log(longestValidParentheses("(()"));      // 2
console.log(longestValidParentheses(")()())"));   // 4
console.log(longestValidParentheses(""));         // 0
console.log(longestValidParentheses("()"));       // 2
console.log(longestValidParentheses("()()"));     // 4
console.log(longestValidParentheses("(()())"));   // 6
console.log(longestValidParentheses("((("));      // 0
console.log(longestValidParentheses("())"));      // 2