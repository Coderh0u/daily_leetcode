/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  if (height.length < 3) return 0;
  let left = 0;
  let right = height.length - 1;
  let maxLeft = height[left];
  let maxRight = height[right];
  let totalVol = 0;
  while (left < right) {
    if (maxLeft <= maxRight) {
      left++;
      maxLeft = Math.max(maxLeft, height[left]);
      totalVol += maxLeft - height[left];
    } else {
      right--;
      maxRight = Math.max(maxRight, height[right]);
      totalVol += maxRight - height[right];
    }
  }
  return totalVol;
};