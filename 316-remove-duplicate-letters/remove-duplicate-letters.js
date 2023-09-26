/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
  const arr = []
  const sOccurence = {};

  // track last occurence of char in input string
  for (let i = 0; i < s.length; i++) {
    sOccurence[s[i]] = i;
  }

  const repeatedChar = new Set();

  for (let i = 0; i < s.length; i++) {
    // check if the char is already in the arr
    if (!repeatedChar.has(s[i])) {
      // if s[i] is smaller than last elem of array and will occur later in string
      while (
        arr.length > 0 &&
        s[i] < arr[arr.length - 1] &&
        i < sOccurence[arr[arr.length - 1]]
      ) {
        // delete the current char from set
        repeatedChar.delete(arr.pop());
      }

      // add the current char to the array
      arr.push(s[i]);
      // add the current char to set for tracking (repeated chars will be deleted in the while loop)
      repeatedChar.add(s[i]);
    }
  }

  return arr.join("");
}