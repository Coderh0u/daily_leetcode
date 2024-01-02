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
  seenChar.add(s[l]);
  while (r < s.length) {
    if (!seenChar.has(s[r])) {
      seenChar.add(s[r]);
      r++;
      maxCounter = Math.max(maxCounter, seenChar.size);
    } else {
      while (seenChar.has(s[r])) {
        seenChar.delete(seenChar.delete(s[l]));
        l++;
      }
      seenChar.add(s[r]);
      r++;
    }
  }
  return maxCounter;
};