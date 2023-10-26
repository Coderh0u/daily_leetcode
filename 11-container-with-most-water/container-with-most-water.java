class Solution {
  public int maxArea(int[] height) {
    int left = 0;
    int right = height.length - 1;
    int maxArea = (right - left) * Math.min(height[left], height[right]);
    while (left < right) {
      int area = (right - left) * Math.min(height[left], height[right]);
      maxArea = Math.max(maxArea, area);
      if (height[left] <= height[right]) {
        left++;
      } else if (height[right] < height[left]) {
        right--;
      }
    }
    return maxArea;
  }
}