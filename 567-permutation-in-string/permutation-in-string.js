/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const s1Chars = new Array(26).fill(0);
  const s2Chars = new Array(26).fill(0);

  for (let i = 0; i < s1.length; i++) {
    s1Chars[s1.charCodeAt(i) - "a".charCodeAt(0)]++;
  }

  let left = 0;
  let right = left + s1.length;
  while (right < s2.length + 1) {
    s2Chars.fill(0);
    for (let i = left; i < right; i++) {
      s2Chars[s2.charCodeAt(i) - "a".charCodeAt(0)]++;
    }

    let matches = true;
    for (let i = 0; i < 26; i++) {
      if (s1Chars[i] != s2Chars[i]) {
        matches = false;
      }
    }
    if (matches) return true;

    left++;
    right++;
  }
  return false;
};
