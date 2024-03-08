/**  FOR LOOP
 * ITERATION = a process where you repeat somethng over and over again until a certain condition
 *      is met, or a certain condition is not met
 * INITIAL EXPRESSION - Initializes a variable/counter
 * CONDITION EXPRESSION - Condition that the loop will continue to run as long as it is met OR until the condition is false
 * INCREMENT EXPRESSION - Expression that will be executed after each iteration of the loop. Usually increments the variable
 * STATEMENT - Code that will be executed each time the loop is run. To execute a 'block' of code, use the '{}' syntax
 */

// SYNTAX
// for ([initialExpression]; [conditionalExpression]; [incrementExpression]) {
//     statement 
// }

// for (let i = 0; i <= 10; i++) {
//     console.log('Number ' + i);
// }

// for (let i = 0; i <=10; i++) {
//     if (i === 7) {
//         console.log(`${i} is my lucky number`);
//     } else {
//         console.log('Number ' + i);
//     }    
// }


/**  NESTED LOOPS 
 * 1st level variable is generally i
 * 2nd level variable is generally j (you simply can't reuse i in the nesting)
 * if you accidently use i again, you'll get the infinite loop
*/

// for (let i = 1; i <= 10; i++) {
//     console.log('Number ' + i);

//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i * j}`);       
//     }
// }




/** LOOP THROUGH AN ARRAY
 * Don't normally use a for loop for an array, but you still can if you want to
 */

const names = ['Brad', 'Matt', 'Kevin', 'Kyle', 'Steve'];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
    // i now represents the index position in the array
}

for (let i = 0; i < names.length; i++) {
    if (i === 2) {
        console.log(names[i] + ' is the best');
    } else {
        console.log(object);
    }
}

/** Above
 * initialize your variable (i)
 * then, as long as i is less than the length of the array (names.length)
 */
