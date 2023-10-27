/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
      const brackets = new Map();
  brackets.set(")", "(");
  brackets.set("]", "[");
  brackets.set("}", "{");
  const test = [];
  // if s starts with close bracket, return false
  if (brackets.has(s[0])) return false;
  for (let i = 0; i < s.length; i++) {
    if (brackets.has(s[i])) {
      if (test.length !== 0 && test[test.length - 1] === brackets.get(s[i])) {
        test.pop();
      } else {
        return false;
      }
    } else {
      test.push(s[i]);
    }
  }
  if (test.length === 0) {
    return true;
  } else {
    return false;
  }
};