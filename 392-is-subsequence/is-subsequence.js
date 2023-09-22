/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let sIdx = 0;
  let tIdx = 0;

  while (sIdx < s.length && tIdx < t.length) {
    if (s[sIdx] === t[tIdx]) {
      sIdx++;
    }
    tIdx++;
  }
  console.log(sIdx === s.length);
  return sIdx === s.length;
};

