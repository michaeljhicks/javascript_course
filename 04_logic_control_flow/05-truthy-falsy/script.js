/**  TRUTHY AND FALSY
 * 
 */

// const email = 'test@test.com';

// if (email) {
//     console.log('You passed in an email');
// }

// Returns TRUE
// console.log(Boolean(email)); 

/**     Falsy
 *  false
 *  0
 *  "" or '' (Empty String)
 *  null
 *  undefined
 *  NaN
 */

/**     Truthy
 * Everything else that is not falsy
 * true
 * '0' (0 in a string)
 * ' ' (space in a string)
 * 'false' (false in a string)
 * [] (empty array)
 * {} (empty object)
 * function () {} (empty object)
 */

const x = ' ';

console.log(Boolean(x));

if (x) {
    console.log('This is truthy');
} else {
    console.log('This is falsy');
}

// Truthy and Falsy caveats
const children = 0;

if (children >= 0) {
    console.log(`You have ${children} children`);
} else {
    console.log('Please enter number of children');
}

/** Checking for empty arrays
 * an empty array returns truthy
 * PROBLEM BELOW: empty array returns truthy
 * SOLUTION: check for the length (how many elements) above 0
 */

const post = [];
// console.log(post.length);
if (post.length > 0) {
    console.log('Lists Posts');
} else {
    console.log('No Posts To List');
}


/** Checking for empty objects
 * PROBLEM BELOW: empty object still returns truthy
 * SOLUTION: convert object keys to array, then examine length over 0
 */
const user = {}

if (Object.keys(user).length > 0) {
    console.log('List User');
} else {
    console.log('No User');
}

/** Loose Equality (double equal) 
 * Brad uses the triple equal for Stricy Equality
*/
// TRUTHY
console.log(false == 0);
console.log('' == 0);
console.log(null == undefined);