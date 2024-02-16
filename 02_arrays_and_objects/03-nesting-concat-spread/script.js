let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'raspberry'];

// fruits.push(berries);

// x = fruits[3][1];

const allFruits = [fruits, berries];

x = allFruits[1][0];

// CONCAT - not this same as nesting, but puts arrays together
x = fruits.concat(berries);

// Spread Operator - can be used with both arrays and objects
x = [...fruits, ...berries];

// Flatten Aarrays
const arr = [1, 2, [3, 4], 5, [6, 7], 8]
x = arr.flat();

// Static Methods on Array Object 
x = Array.isArray(fruits); // checks to see if something is an Array

x = Array.from('12345');

const a = 1;
const b = 2;
const c = 3;

x = Array.of(a,b,c);

console.log(x);