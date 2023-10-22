/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const anagrams = new Map();
  for (let i = 0; i < strs.length; i++) {
    const sortedWord = strs[i].split("").sort().join("");

    if (!anagrams.has(sortedWord)) {
      anagrams.set(sortedWord, [strs[i]]);
    } else {
      anagrams.get(sortedWord).push(strs[i]);
    }
  }
  return Array.from(anagrams.values());
};