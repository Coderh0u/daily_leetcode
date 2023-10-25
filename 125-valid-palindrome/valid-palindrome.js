var isPalindrome = function (s) {
  const arr = s
    .toLowerCase()
    .replace(/[\p{P}\s\$1,(`)]/gu, "")
    .split("");
  let inc = 0;
  let dec = arr.length - 1;
  while (inc < dec) {
    if (arr[inc] !== arr[dec]) {
      return false;
    }
    inc++;
    dec--;
  }
  return true;
};
