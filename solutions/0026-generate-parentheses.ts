/**
 * LeetCode #22 - Generate Parentheses
 * Difficulty: Medium
 *
 * Problem:
 * Given n pairs of parentheses, generate all combinations
 * of well-formed parentheses.
 *
 * Example:
 * n = 3
 * Output:
 * ["((()))","(()())","(())()","()(())","()()()"]
 *
 * n = 1
 * Output:
 * ["()"]
 *
 * Time Complexity: O(4^n / sqrt(n))
 * Space Complexity: O(n) excluding the output array
 */

/**
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n: number): string[] {
  const result: string[] = [];

  function backtrack(
    current: string,
    open: number,
    close: number
  ): void {
    // If we used all pairs
    if (current.length === n * 2) {
      result.push(current);
      return;
    }

    // Add '(' if we still have opening brackets
    if (open < n) {
      backtrack(current + "(", open + 1, close);
    }

    // Add ')' only if there are unmatched '('
    if (close < open) {
      backtrack(current + ")", open, close + 1);
    }
  }

  backtrack("", 0, 0);

  return result;
}

// Test Cases
console.log(generateParenthesis(1));
// ["()"]

console.log(generateParenthesis(2));
// ["(())", "()()"]

console.log(generateParenthesis(3));
// ["((()))", "(()())", "(())()", "()(())", "()()()"]

