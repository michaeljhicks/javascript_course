let x;
let y;

x = Math.floor(Math.random() * 100 + 1);
y = Math.round(Math.random() * 50 + 1);

const sum = x + y;
const difference = x - y;
const product = x * y;
const quotient = x / y;
const rm = x % y;

const sumOutput = `The sum of ${x} + ${y} = ${sum}`;
const differenceOutput = `The difference of ${x} - ${y} = ${difference}`;
const productOutput = `The product of ${x} * ${y} = ${product}`;
const quotientOutput = `The quotient of ${x} / ${y} = ${quotient}`;
const rmOutput = `The remainder of ${x} % ${y} = ${rm}`;

console.log(x);
console.log(y);

console.log(sumOutput);
console.log(differenceOutput);
console.log(productOutput);
console.log(quotientOutput);
console.log(rmOutput);
