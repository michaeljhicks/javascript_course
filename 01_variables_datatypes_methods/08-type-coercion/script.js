let x;

// JS converts the first 5(number) into a string, and returns 55
x = 5 + '5';
x = 5 + Number('5');

// the opposite is done here. the String of 5 goes to a Number, returns 25
x = 5 * '5';

// null = 0
x = 5 + null; 


x = Number(null);

// true = 1, and false = 0
x = Number(true);
x = Number(false);

// returns 6, since true = 1
x = 5 + true;

x = 5 + undefined;


console.log(x, typeof x);