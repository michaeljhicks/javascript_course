// helpful for when you need to find the square root of simething or round down/up

let x;

x = Math.sqrt(9);

x = Math.abs(-9);

x = Math.round(4.6); // returns 5 as it rounds up

x = Math.ceil(4.2); // this always rounds up

x = Math.floor(4.9); // rounds down, returns 4

x = Math.pow(2, 3); // 2 to the 3rd power (2*2*2)

x = Math.min(4, 5); // returns the smallest number given
x = Math.max(4, 5); // returns the largest number given

x = Math.random(); // gives decimal between 0-1
x = Math.random() * 10; // gives decmial from 0 - 9
x = Math.random() * 10 + 1; // gives decmial from 1 - 10
x = Math.floor(Math.random() * 100 + 1); // wrap the random potion in a round down method

console.log(x);
