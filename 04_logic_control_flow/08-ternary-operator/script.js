/**    TERNARY OPERATOR
 * Shorter way to write a conditional
 */

// Using if statement
const age = 18;

if (age >= 18) {
    console.log('You can vote');
} else {
    console.log('You cannot vote');
}

// Using a Ternary Operator
age >= 18 ? console.log('You can vote') : console.log('You cannot vote');

// Assigning a conditional value to a variable
const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'You can vote' : 'You cannot vote';
console.log(canVote2);


/**     Multiple Statements 
 */

const auth = true;
// let redirect;

// if (auth) {
//     alert('Welcome to the dashboard');
//     redirect = '/dashboard';
// } else {
//     alert('Access denied')
//     redirect = '/login'
// }
// Here is the ternary version of above
const redirect = auth ? (alert('Welcome to the dashboard'), '/dashboard') : (alert('Access Denied'), '/login');

// console.log(redirect);

/**             Shorthand version without an else statement     
 * 
 */

auth ? console.log('Welcome to dashboard'): null;
// shorthand version of above(line45) because there is no else statement. use &&
auth && console.log('Welcome to the dashboard');

