class Solution {
 public boolean searchMatrix(int[][] matrix, int target) {
    int rowLeft = 0;
    int rowRight = matrix.length - 1;

    while (rowLeft <= rowRight) {
      int rowMid = (rowLeft + rowRight) / 2;
      if (target <= matrix[rowMid][matrix[rowMid].length - 1] &&
          target >= matrix[rowMid][0]) {
        int left = 0;
        int right = matrix[rowMid].length - 1;
        while (left <= right) {
          int mid = (left + right) / 2;
          if (target == matrix[rowMid][mid])
            return true;
          if (target < matrix[rowMid][mid]) {
            right = mid - 1;
          } else {
            left = mid + 1;
          }
        }
        return false;
      } else if (target < matrix[rowMid][0]) {
        rowRight = rowMid - 1;
      } else {
        rowLeft = rowMid + 1;
      }
    }
    return false;
  }
}