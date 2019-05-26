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

// func greeting 

const greeting = () => {
    const name_element = document.querySelector('#username');
    const par = document.querySelector('#greet');
    const name = name_element.value;
    par.textContent = 'Hello there, ' + name;
    par.style.color = 'white';
    par.style.backgroundColor = 'red';
  }

// calculator addition

let result = 0;

const onPlus = () => {
  const inputElm = document.querySelector('.calc__input');
  const number = parseInt(inputElm.value);
  
  result += number;
  
  const resultElm = document.querySelector('.calc__result');
  resultElm.textContent = result;
};

// checking users

const users = [['frank', 123], [ 'tony', 345], ['jack', 789], [ 'lilly', 876]];
                
const check = () => {
    const inputElm = document.querySelector('.user__input').value;
    let found = false;
    for (let i = 0; i < users.length; i++) {
        if (inputElm === users[i]) {
        found = true;
        }
    }
    if (found === true) {
        document.querySelector("#result").textContent = 'Looking Ok!';
    } else {
        document.querySelector("#result").textContent = 'Username invalid';
    }
};