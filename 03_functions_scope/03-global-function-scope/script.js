// GLOBAL AND FUNCTION SCOPE
// Global = variables accessable everywhere
// alert('hello');
// console.log(window.innerHeight);

const x = 100;
console.log(x, 'in global');

function run() {
    console.log(window.innerHeight);
    console.log(x, 'in function');
}

run();

 if(true) {
    console.log(x, 'in block');
 }

 // y is function scoped
 function add() {
    // VARIABLE SHADOWING - the x below overrides the x on line 5
    const x = 1;
    const y = 50;
    console.log(y + x);
 }

 add();

 // LOCAL SCOPE simply refers to whatever scope  you're in 