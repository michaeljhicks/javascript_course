// Functions allow you create reusable blocks of code

// Define the function
function sayHello() {
    console.log('Hello World');
};
// Then you have to CALL the function
// also INVOKING a function
sayHello();



// PARAMETERS are the variables set between the ()
function add(num1, num2) {
    console.log(num1 + num2);
};
// ARGUMENTS are what is entered when calling the function
add(3, 4);


// Returning a value (the above examples to return a value)
function subtract(num1, num2) {
    return num1 - num2; // anything after the RETURN method 
}
// the below returned value is not logged to the console, but instead is returned
// The reason we return something is we want to do something with the value
const result = subtract(10, 2);
console.log(result);


// Strange cases
// RETURN with no value - you just write return. This is good for sening a request to a backend or API, and youre updating something in a Database
