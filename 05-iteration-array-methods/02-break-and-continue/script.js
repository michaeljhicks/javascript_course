// Break


// for (let i = 0; i <= 20; i++) {
//     if (i === 15) {
//         console.log('Breaking...');
//         break;
//     }
//     console.log(i);
// }


// Continue
// you can skip the rest of the code in a current iteration, and then contnue to the next iteration

for (let i = 0; i <= 20; i++) {
    if (i === 13) {
        console.log('Skipping 13...');
        continue;
    }
    console.log(i);
}


/**  Summary
 * Break will break out of the entire loop
 * Continue will skip any remaining code in iteration and move on to the next iteration
 */