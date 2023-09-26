/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  const patternObj = {};
  const sArr = s.split(" ");
  
  if (pattern.length !== sArr.length) return false

  for (let i = 0; i < pattern.length; i++) {
    if (!Object.keys(patternObj).includes(pattern[i])) {
      if (Object.values(patternObj).indexOf(sArr[i]) > -1) return false
      patternObj[pattern[i]] = sArr[i];
    }
  }
  console.log(patternObj);

  for (let i = 0; i < pattern.length; i++) {
    if (Object.keys(patternObj).includes(pattern[i])) {
      if (sArr[i] !== patternObj[pattern[i]]) {
        return false;
      } else {
        continue;
      }
    }
  }
  return true;
};