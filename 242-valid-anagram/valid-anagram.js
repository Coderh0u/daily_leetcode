/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
  if (s.length !== t.length) return false;
  const seenS = {};
  for (let i = 0; i < s.length; i++) {
    if (seenS[s[i]]) {
      seenS[s[i]]++;
    }
    if (!seenS[s[i]]) {
      seenS[s[i]] = 1;
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (!seenS[t[i]]) return false;
    seenS[t[i]]--;
  }
  for (let i = 0; i < Object.values(seenS).length; i++) {
    if (Object.values(seenS)[i] !== 0) {
      return false;
    }
  }
  return true;
};