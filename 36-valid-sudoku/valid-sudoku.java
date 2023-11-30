class Solution {
  public boolean isValidSudoku(char[][] board) {
    Set<Character> seen = new HashSet<Character>();
    for (int i = 0; i < board.length; i++) {
      for (int j = 0; j < board[i].length; j++) {
        // checking rows

        if (Character.isDigit(board[i][j]) && !seen.contains(board[i][j])) {
          seen.add(board[i][j]);
        } else if (Character.isDigit(board[i][j]) && seen.contains(board[i][j])) {
          return false;
        }
      }
      seen.clear();
    }

    // checking columns
    for (int i = 0; i < board.length; i++) {
      for (int j = 0; j < board[i].length; j++) {
        if (Character.isDigit(board[j][i]) && !seen.contains(board[j][i])) {
          seen.add(board[j][i]);
        } else if (Character.isDigit(board[j][i]) && seen.contains(board[j][i])) {
          return false;
        }
      }
      seen.clear();
    }

    // checking grid
    // create hashmap for grid
    HashMap<String, List<Character>> grid = new HashMap<String, List<Character>>();
    for (int i = 0; i < 3; i++) {
      for (int j = 0; j < 3; j++) {
        int[] gridKeyArr = new int[] { i, j };
        String gridKey = Arrays.toString(gridKeyArr);
        List<Character> gridValues = new ArrayList<>();
        grid.put(gridKey, gridValues);
      }
    }

    // populate and check grid
    for (int i = 0; i < 9; i++) {
      for (int j = 0; j < 9; j++) {
        int[] gridKeyArr = new int[] { i / 3, j / 3 };
        String gridKey = Arrays.toString(gridKeyArr);
        if (Character.isDigit(board[i][j]) && !(grid.get(gridKey).contains(board[i][j]))) {
          grid.get(gridKey).add(board[i][j]);
        } else if (Character.isDigit(board[i][j]) && (grid.get(gridKey).contains(board[i][j]))) {
          return false;
        }
      }
    }
    return true;
  }
}