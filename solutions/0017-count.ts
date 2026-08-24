/**
 * LeetCode #38 - Count and Say
 * Difficulty: Medium
 *
 * Problem:
 * Given a positive integer n, return the nth element
 * of the count-and-say sequence.
 *
 * countAndSay(1) = "1"
 *
 * Each next string is created by counting consecutive
 * identical digits from the previous string.
 *
 * Example:
 * n = 4
 *
 * 1 → "1"
 * 2 → "11"
 * 3 → "21"
 * 4 → "1211"
 *
 * Time Complexity: O(n * m)
 * Space Complexity: O(m)
 */

/**
 * @param {number} n
 * @return {string}
 */
function countAndSay(n: number): string {
  // Base case
  let result = "1";

  // Generate each next sequence
  for (let i = 2; i <= n; i++) {
    let next = "";
    let count = 1;

    for (let j = 1; j < result.length; j++) {
      if (result[j] === result[j - 1]) {
        // Same digit → increase count
        count++;
      } else {
        // Different digit → save count + digit
        next += count + result[j - 1];

        count = 1;
      }
    }

    // Add the last group
    next += count + result[result.length - 1];

    result = next;
  }

  return result;
}

// Test Cases
console.log(countAndSay(1)); // "1"
console.log(countAndSay(2)); // "11"
console.log(countAndSay(3)); // "21"
console.log(countAndSay(4)); // "1211"
console.log(countAndSay(5)); // "111221"
console.log(countAndSay(6)); // "312211"