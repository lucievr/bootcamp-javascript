// six-sided dice (nums 1-6)
const roll = () => {
    return Math.round(1 + Math.random() * 5);
  }

roll();

// find int between lower and upper
const randint = (lower, upper) => {
    let distance = upper - lower; 
    return Math.round(lower + Math.random() * distance);
  }

randint(1, 6);

// calculate circle area
function circleArea(radius) {
    return Math.PI * radius ** 2;
}

// calc square area
const square = (number) => {
    return number ** 2;
}

// calc square root of (a squared + b squared)
const hypotenuse = (a, b) => {
    return Math.sqrt((square(a)) + (square(b)));
}
// calculate salary and taxed salary
const salary = (pay, hours, days) => {
    return hours * days * pay;
}

const taxedSalary = (salary, tax) => {
    return salary * (1 - tax);
}

const mySalary = taxedSalary(salary(20, 8, 21), 0.25);

// random nums

let limit = parseInt(prompt('Input a limit'));
Math.floor(1 + Math.random() * limit);

// with min & max
let min = parseInt(prompt('Input minimum number:'));
let max = parseInt(prompt('Input maximum number:'));

Math.round(min + (Math.random() * (max-min)));

