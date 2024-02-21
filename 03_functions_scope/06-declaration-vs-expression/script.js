// Function Declaration vs Expression

// FUNCTION DECLARATION - start with the word FUNCTION, then name it...
// does not need semicolon at end
// HOISTING allows the console.log on line 10 to be placed above the addDollarSign, and it'll still run
function addDollarSign(value) {
   return '$' + value;
}

console.log(addDollarSign(100));


// FUNCTION EXPRESSION - where you create a variable
// needs semicolon added to end 
const addPlusSign = function(value) {
   return '+' + value;
};

console.log(addPlusSign(200));


// Differences between Function Declaration and Function Express = Hoisting
// HOISTING = the process of moving all the function and variable declarations to the top of the current scope before the code is run
// NOTE: only Function Declarations are available before the code is even run 