/** Logical Operators 
 * Double ampersand
 * Double Pipes
 */

// AND - &&
console.log(10 > 20 && 30 > 15);
// returns false because all have to be true

console.log(10 > 20 || 30 > 15);    
// returns true because only one has to be true



/**      &&
 * returns first falsy value OR the last value
 */
let a;

a = 10 && 20;
a = 10 && 0 && 30;
console.log(a);

const posts = ['Post One', 'Post Two'];
console.log(posts[0]);

const emptyPosts = [];
emptyPosts.length > 0 && console.log(emptyPosts[0]);
// if you logged an empty array, it returns undefined
// adding the emptyPosts.length > 0 fixes the problem



/**     ||
 * returns the first TRUTHY value, or the last value
 */

let b;
b = 10 || 20;
b = 0 || 20
b = 0 || null || '' || undefined;
console.log(b);



/**     ??
 * Called the Nullish Coalescing Operator
 * Returns the right side operand when the left is null or undefined. Not falsy, only null/undefined
 * Not very common
 */

let c;

c = 10 ?? 20; // returns 10
c = null ?? 20; // returns 20
c = undefined ?? 30;

console.log(c);