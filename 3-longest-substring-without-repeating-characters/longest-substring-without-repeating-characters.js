/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length == 0) return 0;
  let l = 0;
  let r = 1;
  let maxCounter = 1;
  const seenChar = new Set();

  while (r < s.length) {
    seenChar.add(s[l]);
    if (!seenChar.has(s[r])) {
      seenChar.add(s[r]);
      maxCounter = Math.max(maxCounter, seenChar.size);
      r++;
    } else {
      seenChar.clear();
      l++;
      r = l + 1;
    }
  }
  return maxCounter;
};