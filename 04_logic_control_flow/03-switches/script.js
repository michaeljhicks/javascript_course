/**Switches
 * Another way to evaluate expressions and values
 */
const d = new Date(2023, 2, 23, 8, 0, 0);
const month = d.getMonth();
const hour = d.getHours();

// The Case being a number is because the month (key) variable returns the numbered month
switch (month) {
    case 1:
        console.log('It is January');
        break;
    case 2:
        console.log('It is February');
        break;
    case 3:
        console.log('It is March');
        break;
    
    default:
        console.log('It is not January, February, or March');
        break;
}

/**Summary
 * Switches are used when dealing with immediate values, meaning we're checking the month directly
 * Can be used with Ranges
 * Not as common as If Else Statements
 */

// Switch Ranges - similar to If Else
switch (true) {
    case hour < 12:
        console.log('Good Morning');
        break;
    case hour < 18:
        console.log('Good Afternoon');
        break;
    default:
        console.log('Good Night');
        break;
}