/**  While
 * You have to initialize a variable prior to using WHILE
 * you have to increment the value inside of the while statement
 */

let i = 21;

// while (i <= 20) {
//     console.log(i);
//     i++;
// }



/**     Loop over Arrays      */
const arr = [10, 20, 30, 40];

// while (i < arr.length) {
//     console.log(arr[i]);
//     i++;
// }



/**     Nesting While Loops      */
// while (i <= 5) {
//     console.log('Number ' + i);

//     let j = 0
//     while (j <= 5) {
//         console.log(`${i} * ${j} = ${i * j}`);
//         j++;
//     }
//     i++;
// }


/**     Do While Loop   
 * Do While is different because the loop will always run at least once, even if the condition is false
 * You might use this when you always want the block of code to run at least once, even if the condition is not met (seems like the same as the previous line)
 */


do {
    console.log('Number ' + i);
    i++;
} while (i <= 20);




/**   IMPORTANT
 * Use a FOR loop when you know the number of times you want the loop to run
 * use a WHILE loop when the number of times the loop needs to run is unknown
 */