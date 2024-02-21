// Arrow Functions - introduced to JS in 2015 via ES6 update
// Advantages - more compact, implicit return, lexical scope

// function add(a, b) {
//    return a + b;
// }

// TURN THIS
// const add = function(a,b) {
//    return a + b;
// };

// into THIS
// ARROW FUNCTION SYNTAX
const add = (a,b) => {
   return a + b;
};
// you can shorten it further. remove {} and return 
// this is IMPLICIT RETURN
const subtract = (a,b) => a - b;

// SINGLE PARAMETER - no need for parenthesis if you have a single param
const double = a => a * 2;

// Returning an object - you need to encase {} with parenthesis
const createObject = () => ({
   name: 'Mike',
});

// Arrow Function using forEach on Array
const numbers = [1,2,3,4,5];

numbers.forEach(function (n) {
   console.log(n);
});
// Arrow function in a call back
numbers.forEach(n => console.log(n));
// a CALL BACK is when you pass a function into another function
console.log(add(3,2));
console.log(subtract(10,5));
console.log(double(10));
console.log(createObject());