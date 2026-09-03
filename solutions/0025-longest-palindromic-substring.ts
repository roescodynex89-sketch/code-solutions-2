/**
 * LeetCode #5 - Longest Palindromic Substring
 * Difficulty: Medium
 *
 * Problem:
 * Given a string s, return the longest palindromic substring.
 *
 * Example:
 * "babad" → "bab"
 * "cbbd"  → "bb"
 *
 * Time Complexity: O(n²)
 * Space Complexity: O(1)
 */

/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s: string): string {
  if (s.length < 2) {
    return s;
  }

  let start = 0;
  let end = 0;

  // Expand from the center
  function expand(left: number, right: number): number {
    while (
      left >= 0 &&
      right < s.length &&
      s[left] === s[right]
    ) {
      left--;
      right++;
    }

    // Length of palindrome
    return right - left - 1;
  }

  for (let i = 0; i < s.length; i++) {
    // Odd length palindrome
    const oddLength = expand(i, i);

    // Even length palindrome
    const evenLength = expand(i, i + 1);

    const maxLength = Math.max(oddLength, evenLength);

    if (maxLength > end - start + 1) {
      start = i - Math.floor((maxLength - 1) / 2);
      end = i + Math.floor(maxLength / 2);
    }
  }

  return s.substring(start, end + 1);
}

// Test Cases
console.log(longestPalindrome("babad"));
// "bab" or "aba"

console.log(longestPalindrome("cbbd"));
// "bb"

console.log(longestPalindrome("a"));
// "a"

console.log(longestPalindrome("ac"));
// "a" or "c"

console.log(longestPalindrome("racecar"));
// "racecar"

console.log(longestPalindrome("abba"));
// "abba"