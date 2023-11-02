/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = new Stack();
  var math = {
    "+": function (x, y) {
      return x + y;
    },
    "-": function (x, y) {
      return x - y;
    },
    "*": function (x, y) {
      return x * y;
    },
    "/": function (x, y) {
      if (x / y >= 0) return Math.floor(x / y);
      if (x / y < 0) return Math.ceil(x / y);
    },
  };
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i].match(/\d/)) {
      stack.push(tokens[i]);
    } else {
      const int1 = parseInt(stack.peek());
      stack.pop();
      const int2 = parseInt(stack.peek());
      stack.pop();
      const result = math[tokens[i]](int2, int1);

      stack.push(result);
    }
  }
  return stack.peek();
};

class Stack {
  constructor() {
    this.stack = [];
  }

  push(val) {
    this.stack.push(val);
  }
  pop() {
    this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }
}