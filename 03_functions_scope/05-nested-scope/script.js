// How scope works with nested functions and nested blocks
// Nested functions relate to something called CLOSURES

function first(){
   const x = 100;

   function second() {
      const y = 200
      console.log(x + y);
   }
   // for second() to run, you must call it within first() - below
   second();
}
// Call first() here, which will run second();
first();



// from the child - which is second() - you can access any variables in the parent - which is first()
// It doesn't work the other way around

// same rules apply to blocks
if (true) {
   const x = 100;

   if (x === 100) {
      const y = 200;
      console.log(x+y);
   }
}