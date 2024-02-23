if (true) {
    console.log('This is true');
}

if (false) {
    console.log('This is NOT true');
}

const x = 10;
const y = 5

if (x > y) {
    console.log(`${x} is greater than ${y}`);
}

// if (x === y) {
//     console.log(`${x} is equal to ${y}`);
// }

if (x === y) {
    console.log(`${x} is equal to ${y}`);
} else {
    console.log(`${x} is NOT equal to ${y}`);    
}

/* 
If statement blocks have their own scope. Any variable created inside of if statement, stay inside
*/


// Shorthand If - you can remove the curly braces for a clean single line. Not recommended
if (x >= y) console.log(`${x} is greater than or equal to ${y}`);