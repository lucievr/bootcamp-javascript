const numbers = [18, 8, -24, 28, -17, 14, -10, 24, 12, -31, 19, 32, -14, -10, 13, 8, -15, -2, 17];

// sum of all

const sum = numbers.reduce((a,b) => a+b, 0);
console.log(sum);

// Output all the numbers which are greater then their predecessor in the array.

for (i=1; i < numbers.length; i++) {
    if (numbers[i] > numbers[i-1]) {
        console.log(numbers[i]);
    }
}

// Output all the peaks in the array. A peak is a number whose predecessor and succesor are both smaller then the number itself.

for (i=1; i < numbers.length; i++) {
    if (numbers[i] > numbers[i-1] && numbers[i] > numbers[i+1]) {
        console.log(numbers[i]);
    }
}

// Count how many negative numbers are there in the array.

let count = 0;
numbers.forEach( num => {
    if (num < 0) {
        count = count + 1;
    }
})
console.log(count)

// Compute the sum of all the positive numbers in the array.

let positive = [];

for (i=0; i<numbers.length; i++) {
    if (numbers[i] > 0) {
        positive.push(numbers[i]);
    }
}

const sum2 = positive.reduce((a,b) => a+b, 0);
console.log(sum2);

// average number

let avg = sum / numbers.length;

const diff = numbers.map( num => ((avg - num) * (avg - num)));

// Find the length of the longest ascending sequence of consecutive numbers in the array.

let max=0;
counterr = 1;
for ( let i = 1; i < numbers.length; i++) {
 if (numbers[i] > numbers[i-1]) {
     counterr++;
 }
 if (counterr>max) {
     counterr = max;
 }
}

console.log(max);