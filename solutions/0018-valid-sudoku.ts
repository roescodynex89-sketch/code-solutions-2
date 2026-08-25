/**
 * LeetCode #36 - Valid Sudoku
 * Difficulty: Medium
 *
 * Problem:
 * Determine if a 9 x 9 Sudoku board is valid.
 *
 * Rules:
 * 1. Each row must contain digits 1-9 without repetition.
 * 2. Each column must contain digits 1-9 without repetition.
 * 3. Each 3 x 3 box must contain digits 1-9 without repetition.
 *
 * Only filled cells need to be validated.
 *
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

/**
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSudoku(board: string[][]): boolean {
  // Check rows
  for (let row = 0; row < 9; row++) {
    const seen = new Set<string>();

    for (let col = 0; col < 9; col++) {
      const value = board[row][col];

      // Ignore empty cells
      if (value === ".") {
        continue;
      }

      // Duplicate found
      if (seen.has(value)) {
        return false;
      }

      seen.add(value);
    }
  }

  // Check columns
  for (let col = 0; col < 9; col++) {
    const seen = new Set<string>();

    for (let row = 0; row < 9; row++) {
      const value = board[row][col];

      // Ignore empty cells
      if (value === ".") {
        continue;
      }

      // Duplicate found
      if (seen.has(value)) {
        return false;
      }

      seen.add(value);
    }
  }

  // Check 3 x 3 boxes
  for (let boxRow = 0; boxRow < 9; boxRow += 3) {
    for (let boxCol = 0; boxCol < 9; boxCol += 3) {
      const seen = new Set<string>();

      for (let row = boxRow; row < boxRow + 3; row++) {
        for (let col = boxCol; col < boxCol + 3; col++) {
          const value = board[row][col];

          // Ignore empty cells
          if (value === ".") {
            continue;
          }

          // Duplicate found
          if (seen.has(value)) {
            return false;
          }

          seen.add(value);
        }
      }
    }
  }

  return true;
}
