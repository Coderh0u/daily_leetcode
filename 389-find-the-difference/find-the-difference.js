/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  const tArr = t.split("");
  const sArr = s.split("");
  for (let i = 0; i < s.length; i++) {
    if (tArr.find((elem) => elem === sArr[i])) {
      const idx = tArr.indexOf(sArr[i]);
      tArr.splice(idx, 1);
    }
  }
  return tArr.toString();
};