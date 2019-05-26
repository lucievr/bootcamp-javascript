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

// calculate salary using DOM

const calcSalary = () => {
    const inputHours = document.querySelector('#hours');
    const inputDays = document.querySelector('#days');
    const inputPay = document.querySelector('#pay');

    let hours = inputHours.value;
    let days = inputDays.value;
    let pay = inputPay.value;

    let result = parseInt(hours) * parseInt(days) * parseInt(pay);

    let output = document.querySelector('#result');

    output.textContent= result + 'eur';
}

// create elementsfrom arrays
const items = [
    'peter', 'jane', 'tarzan', 'louise', 'superman',
  ];
  
  const update = () => {
    const container = document.querySelector('.container');
    container.innerHTML = '';
  
    for(let i = 0; i < items.length; i++) {
      const liElm = document.createElement('li');
      liElm.className = 'item';
      liElm.innerHTML = `<strong>${items[i]}</strong>`;
      container.appendChild(liElm);
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    update();
    
    document.addEventListener('click', () => {
      const item = 'donald';
      items.push(item); 
      
      update();
    });
  });

  // create elements from objects

  const groceryItems = [
    {name: 'apples',
    amount: 10}, 
    {name: 'bananas',
    amount: 5}, 
    {name: 'bread',
    amount: 1}, 
    {name: 'carrots',
    amount: 8}, 
];

const update = () => {

    const list = document.querySelector('#list');
    list.innerHTML = '';

    for (i=0; i < groceryItems.length; i++) {
        
        const listItem = document.createElement('div');
        listItem.innerHTML = `${groceryItems[i].name}, ${groceryItems[i].amount}`;
        listItem.className = 'item';
    
        list.appendChild(listItem);
    }
}

const addItem = () => {
    const itemName = document.querySelector('#itemname').value;
    const itemAmount = document.querySelector('#itemamount').value;

    const list = document.querySelector('#list');
    const listItem = document.createElement('div');

    listItem.innerHTML = `${itemName}, ${itemAmount}`;
    listItem.className = 'item';
    
    list.appendChild(listItem);
}

document.addEventListener('DOMContentLoaded', () => {
    update();

    const button = document.querySelector('#button');

    button.addEventListener('click', () => {
        addItem();
    })
})