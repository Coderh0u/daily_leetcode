/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  const sChars = s.split("");
  const tChars = t.split("");
  // default to true
  let output = true;
  // if s is a single character, check if it exists in t
  if (s.length === 1 && tChars.indexOf(sChars[0]) === -1) {
    output = false;
  }
  // if s is a string,
  for (let i = 0; i < sChars.length; i++) {
    const posA = tChars.indexOf(sChars[i]);
    tChars.splice(0, posA + 1);
    // check if character exists
    if (posA === -1) {
      output = false;
    }
  }
  console.log(output);
  return output;
};
