/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;
  const set1 = new Set(nums);
  const testArr = Array.from(set1);
  const arr = [];
  for (let i = 0; i < testArr.length; i++) {
    let start;
    let seqLength = 0;
    if (!set1.has(testArr[i] - 1)) {
      start = testArr[i];
      console.log(start);
      while (set1.has(start)) {
        seqLength++;
        start++;
      }
    }
    arr.push(seqLength);
  }
  console.log(arr);
  return Math.max(...arr);
};