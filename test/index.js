var node = {
  loc: {
    start: {
      line: 1,
      column: 5
    }
  }
};

var { loc: { start: { line }} } = node;
console.log(line) // 1
console.log(loc)  // error: loc is undefined
console.log(start) // error: start is undefined