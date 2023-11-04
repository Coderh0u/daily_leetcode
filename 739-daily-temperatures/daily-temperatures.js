/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const output = new Array(temperatures.length);
  output.fill(0);
  const stack = [];
  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length > 0 && temperatures[i] > stack[stack.length - 1][1]) {
      const index = stack.pop()[0];
      output[index] = i - index;
    }
    stack.push([i, temperatures[i]]);
  }

  return output;
};