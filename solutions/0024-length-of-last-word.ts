/**
 * LeetCode #58 - Length of Last Word
 * Difficulty: Easy
 *
 * Problem:
 * Given a string containing words and spaces,
 * return the length of the last word.
 *
 * Example:
 * "Hello World" → 5
 * "   fly me   to   the moon  " → 4
 * "luffy is still joyboy" → 6
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLastWord(s: string): number {
  let length = 0;
  let i = s.length - 1;

  // Skip spaces at the end
  while (i >= 0 && s[i] === " ") {
    i--;
  }

  // Count characters of the last word
  while (i >= 0 && s[i] !== " ") {
    length++;
    i--;
  }

  return length;
}

// Test Cases
console.log(lengthOfLastWord("Hello World"));
// 5

console.log(lengthOfLastWord("   fly me   to   the moon  "));
// 4

console.log(lengthOfLastWord("luffy is still joyboy"));
// 6

console.log(lengthOfLastWord("Hello"));
// 5

console.log(lengthOfLastWord("a "));
// 1