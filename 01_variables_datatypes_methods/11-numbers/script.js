let x;

const num = new Number(5);

x = num.toString();

x = num.toString().length;

x = num.toFixed(2); // specify the number of decimal points. It rounds up or down

x = num.toPrecision(2); // if num = 5.66, you'll get 5.7

x = num.toExponential(2);

x = num.toLocaleString('ar-EG')// converts to Egyptian symbols

x = num.valueOf();

// x = Number.MAX_VALUE;

// console.log(x, typeof x);

x = Number.MAX_VALUE;

x = Number.MIN_VALUE;

console.log(x);