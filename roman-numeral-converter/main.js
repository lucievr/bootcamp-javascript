const romanDigit = (digit, r1, r2, r3) => {
    if(digit === 0) {
      return ''
    } else if (digit < 4) {
      return r1.repeat(digit);
    } else if (digit === 4) {
      return r1 + r2;
    } else if (digit < 9) {
      return r2 + r1.repeat(digit-5);
    } else {
      return r1 + r3;
    }
  }
  const toRoman = (num) => {
    let result = 'M'.repeat(Math.trunc(num / 1000));
    num = num % 1000;
    result += romanDigit(Math.trunc(num / 100), 'C', 'D', 'M')
    num = num % 100;
    result += romanDigit(Math.trunc(num / 10), 'X', 'L', 'C')
    num = num % 10;
    result += romanDigit(Math.trunc(num), 'I', 'V', 'X')
    return result;
  }