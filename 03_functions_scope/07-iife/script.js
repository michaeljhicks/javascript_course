// Immediately Invoked Function Expressions
// In JS, this is how you both declare and invoke at the same time
// Reason to use an IIFE is to avoid Global Scope Pollution

// user is declared in both of the .js files - this throws an error

(function () {
   const user = 'Ali';
   console.log(user);
   const hello = () => console.log('hello from the IIFE');
   hello();
})();

// Adding Parameters to your IIFE
(function (name) {
   console.log('hello ' + name);
})('Rosie');


// You can name a function inside the IIFE, but you can't call the function outside of the IIFE
(function hello() {
   console.log('hello');
});
// you can't call hello() outside of the IIFE scope
hello();


// RECURSION - when you call a function from itself
(function hello() {
   console.log('hello');
   hello();
})();
// above causes an INFINITE LOOP and will crash your browser

