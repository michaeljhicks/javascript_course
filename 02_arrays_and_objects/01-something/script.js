// ARRAYS
// Are a special type of 'object' and a DATA STRUCTURE

let x;


// ARRAY LITERAL ***** THIS IS MORE COMMON *****
const numbers = [12,45,33,29,39];
// ARRAY LITERAL - mixed element values 
const mixed = [12, 'Hello', true, null];

// ARRAY CONSTRUCTOR
const fruits = new Array('apple', 'grape', 'orange');

x = numbers[0];

x = numbers[0] + numbers[3];

x = `My favorite fruit is an ${fruits[2]}`;

x = numbers.length;

fruits[2] = 'pear';

x = fruits;

console.log(x);

