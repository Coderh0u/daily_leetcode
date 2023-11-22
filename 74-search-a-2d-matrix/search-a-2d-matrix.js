/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
      let rowLeft = 0;
  let rowRight = matrix.length - 1;

  while (rowLeft <= rowRight) {
    let rowMid = Math.floor((rowLeft + rowRight) / 2);
    if (
      target <= matrix[rowMid][matrix[rowMid].length - 1] &&
      target >= matrix[rowMid][0]
    ) {
      let left = 0;
      let right = matrix[rowMid].length - 1;
      while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (target === matrix[rowMid][mid]) return true;
        if (target < matrix[rowMid][mid]) {
          right = mid - 1;
        }
        if (target > matrix[rowMid][mid]) {
          left = mid + 1;
        }
      }
      break;
    } else if (target < matrix[rowMid][0]) {
      rowRight = rowMid - 1;
    } else if (target > matrix[rowMid][matrix[rowMid].length - 1]) {
      rowLeft = rowMid + 1;
    }
  }
  return false;
};