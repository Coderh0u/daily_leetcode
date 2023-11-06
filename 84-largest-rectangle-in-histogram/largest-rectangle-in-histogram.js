var largestRectangleArea = function (heights) {
  const stack = [];
  let maxArea = 0;

  for (let i = 0; i < heights.length; i++) {
    if (stack.length === 0 || stack[stack.length - 1][1] <= heights[i]) {
      stack.push([i, heights[i]]);
    } else if (stack[stack.length - 1][1] > heights[i]) {
      let idx = i;
      while (stack.length > 0 && stack[stack.length - 1][1] > heights[i]) {
        // computing max area
        const currHeight = stack[stack.length - 1][1];
        let currLength = i - stack[stack.length - 1][0];
        maxArea = Math.max(maxArea, currHeight * currLength);
        idx = stack[stack.length - 1][0];
        stack.pop();
      }
      stack.push([idx, heights[i]]);
    }
  }
  for (let i = 0; i < stack.length; i++) {
    const currHeight = stack[i][1];
    const currLength = heights.length - stack[i][0];
    maxArea = Math.max(maxArea, currHeight * currLength);
  }

  return maxArea;
};