// LOGICAL ASSIGNMENT OPERATORS



/**     ||=
 * Assigns the RIGHT side value only if the LEFT side is a FALSY value
 * Most common of these three logical assignment operators
 */

let a = false;

// Long hand version: says if a is not truthy, then a = 10
if (!a) {
    a = 10;
}
// Shorthand version: says if a is falsey (which it is, because a=false), then assign 10
a = a || 10; 
// Even more shorthand version
a ||= 10;
console.log(a);



/**     &&=
 * Assigns the RIGHT side value only if the LEFT side is a TRUTHY value
 */

let b = 10;

if (b) {
    b = 20
}

// says if b is truthy (which it is), then assign b to 20
b = b && 20; 
// Super shorthand version
b &&= 20;

console.log(b);





/**     ??=      (Nullish Coalescing Operator)
 * Assigns the RIGHT side value only if the LEFT side if NULL or UNDEFINED
 */

let c = null;

if (c === null || c === undefined) {
    c = 20
}

c = c ?? 20;

c ??= 20;

console.log(c);