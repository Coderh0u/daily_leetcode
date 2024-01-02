/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  const chars = new Map();
  let l = 0;
  let r = 0;
  let result = 1;
  chars.set(s[l], 1);
  while (r < s.length) {
    const maxCount = Math.max(...chars.values());
    if (r - l + 1 - maxCount <= k) {
      result = Math.max(result, r - l + 1);
      r++;
      chars.set(s[r], (chars.get(s[r]) || 0) + 1);
    } else {
      chars.set(s[l], chars.get(s[l]) - 1);
      l++;
    }
  }
  return result;
};