/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  // checking for duplicates in rows
  for (let i = 0; i < board.length; i++) {
    const seen = new Set();
    for (let j = 0; j < 9; j++) {
      if (parseInt(board[i][j]) && seen.has(board[i][j])) {
        return false;
      } else {
        seen.add(board[i][j]);
      }
    }
  }

  // checking for duplicates in columns
  const columns = new Map();
  for (let i = 0; i < board.length; i++) {
    columns.set(
      i,
      board.map((subBoard) => subBoard[i])
    );
  }

  for (let i = 0; i < 9; i++) {
    const column = columns.get(i);
    const seen = new Set();
    for (let j = 0; j < 9; j++) {
      if (parseInt(column[j]) && seen.has(column[j])) {
        return false;
      } else {
        seen.add(column[j]);
      }
    }
  }

  //testing individual grids
  const square = new Map();
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      square.set([i, j].toString(), []);
    }
  }
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const key = [Math.floor(i / 3), Math.floor(j / 3)].toString();

      square.get(key).push(board[i][j]);
    }
  }
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const grid = square.get([i, j].toString());
      const seen = new Set();
      for (let k = 0; k < 9; k++) {
        if (parseInt(grid[k]) && seen.has(grid[k])) {
          return false;
        } else {
          seen.add(grid[k]);
        }
      }
    }
  }

  return true;
};