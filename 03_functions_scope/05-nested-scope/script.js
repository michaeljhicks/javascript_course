// BLOCK LEVEL SCOPE
// VAR is not block level scoped, meaning you can access var anywhere outside of the block
// VAR is function scoped, meaning is stays inside the function
// VAR (like bar below) will be added to the window object (check window in console)

const x = 100;
const foo = 1;
var bar = 2;

if (true) {
   const y = 50
   console.log(x + y);
}

// console.log(y);

for (let i = 0; i <= 10; i++) {
   console.log(i);   
};

// console.log(i);


// VAR is not restricted to the if block. This is not good because you 
// want your variables scoped

// DO NOT USE VAR
if (true) {
   const a = 500;
   let b = 600
   var c = 700
};

console.log(c);

// VAR is function scoped, but NOT block scoped
function run(){
   var d = 100;
   console.log(d);
}

run();

// d will throw an error
// console.log(d);