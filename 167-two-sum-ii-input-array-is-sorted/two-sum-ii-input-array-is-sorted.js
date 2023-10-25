/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
      const idx = {};
  for (let i = 0; i < numbers.length; i++) {
    const idx2 = target - numbers[i];
    if (idx2 in idx) {
      return [idx[idx2] + 1, i + 1];
    }
    idx[numbers[i]] = i;
  }
};