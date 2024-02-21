// Challenge 1
function getCelsius(f) {
   return (f - 32) * 5/9;
}

console.log(`The temperature is ${getCelsius(65)} \xB0C`);

// Challenge 2
function minMax(arr) {
   const min = Math.min(...arr);
   const max = Math.max(...arr);

   return {
      min: min, 
      max: max,
   }
}

console.log(minMax([10,85,662,14,9]));


// Challenge 3 - Create an IIFE function 
// you dont have to even name the IIFE function, or use the function keyword. Just use double parenthesis like below
((length, width) => {
   const area = length * width;
   const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}`;
   console.log(output);
})(10,5)