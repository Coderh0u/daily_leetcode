/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const res = [];
  const output = [];
  const generate = (open, close) => {

    if (open === close && open === n) {
      res.push(output.join(""));
      return;
    }
    if (open < n) {
      output.push("(");
      generate(open + 1, close);
      // console.log(output);
      output.pop();
    }
    if (close < open) {
      output.push(")");
      generate(open, close + 1);
      // console.log(output);
      output.pop();
    }
  };
  generate(0, 0);

  return res;
};