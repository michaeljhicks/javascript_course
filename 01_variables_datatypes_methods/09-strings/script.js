let x;

const name = 'John'
const age = 30;

x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';

// Template Literals (AKA Template Strings)
// Use backticks instead of single quotes
x = `Hello, my name is ${name} and I am ${age} years old.`;



// String Properties and Methods
const s = new String('Hello World');

x = typeof s;

x = s.length;
// since the length is a property, don't use parenthesis
// METHODS use parenthesis, because methods are FUNCTIONS
// PROPERTIES are like attributes



// Access value by key
x = s[0];

x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(0);

x = s.indexOf('d');

x = s.substring(0, 4);
// when only one arg given, below returns 'orld'
x = s.substring(7);

// slice allows you to start from the end
x = s.slice(-11, -6);

// TRIM will trim the white space
x = '                     Hello World'
x = x.trim();

// finds the first word, and replaces it with the second 
x = s.replace('World', 'John');

x = s.includes('Hello'); // true
x = s.includes('Hell'); // true
x = s.includes('Helli'); // false

x = s.valueOf(); // returns the primitive value of the object

x = s.split(' ');// returns an array, in this case splits by space and returns ['Hello', 'World']
x = s.split(''); // no space, returns each letter as an element

console.log(x);