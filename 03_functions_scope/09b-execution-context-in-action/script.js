const x = 100;
const y = 50;

function getSum(n1, n2) {
   const sum = n1 + n2;
   return sum;
}

const sum1 = getSum(x, y);
const sum2 = getSum(10, 5);

console.log(sum1, sum2);

/* Debugger
1. Go to Sources tab in DevTools
2. Go to script.js file
3. click on line 1 in the Sources window tab
   - This will create a breakpoint
   - The Memory Creation Phase has been run at this point
   - But no code will have been executed
 */