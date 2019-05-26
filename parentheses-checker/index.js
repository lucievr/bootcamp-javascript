// Write a program which will check whether a string consisting only of left and right parantheses has a correct parenthesis structure. For example:

// '(()())' - correct
// '(())()' - correct
// '((()))' - correct
// '())' - incorrect
// '))((' - incorrect

const correctParen = (expr) => {
    let counter = 0;
    for(let i = 0; i < expr.length; i++) {
      if (expr[i] === '(') {
        counter++;
      } else if (expr[i] === ')') {
        if (counter === 0) {
          return false;
        }
        counter--;
      } else {
        return false;
      }
    }
    return counter === 0;
  }