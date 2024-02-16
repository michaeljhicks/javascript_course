let x;

const arr = [1,2,3,4,5];

arr.push(100);

arr.pop(); // nothing to pass in, it removes the last element added

arr.unshift(99); // adds element to beginning of array

arr.shift(); // removes first element

// reverses the array
// arr.reverse(); 

x = arr.includes(20);

x = arr.indexOf(15); // returns index position of what's passed in
// ABOVE:: returns -1 if something isn't in the array

// SLICE doesn't change the array
// x = arr.slice(1, 4);

// SPLICE does change array
// x = arr.splice(1, 4);
// SPLICE is good to remove any elements from array
// x = arr.splice(3,1);
// ABOVE:: 3 is index position. 1 is number of elements to remove from position



x = arr.splice(1,4).reverse().toString().charAt(0);
// ABOVE:: chaining methods - runs splice first, then reverses it


console.log(x, typeof x);