const myString = 'developer';

// michael's solution
x = myString.charAt(0);
upperCase = x.toUpperCase();
remainingLetters = myString.slice(1);

allTogether = `${upperCase}${remainingLetters}`;

// console.log(allTogether);

// Brads solution
let myNewString;

// Solution 1
myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
// Solution 2
myNewString = myString[0].toUpperCase() + myString.substring(1);
// Solution 3
myNewString = `${myString[0].toUpperCase()}${myString.substring(1)}`;


console.log(myNewString);