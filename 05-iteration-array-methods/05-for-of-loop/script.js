/**     Loop through ARRAYS      */
const items = ['book', 'table', 'chair', 'kite'];
const users = [
    { name: 'Hicks'},
    { name: 'Brandon'},
    { name: 'Chilson'},
];

// for (let i = 0; i < items.length; i++) {
//     console.log(items[i]);
// }



/**    Using FOR OF */

// for (let item of items) {
//     console.log(item);
// }

// Iterating over an array containing objects
for (let user of users) {
    console.log(user.name);
}




/**     Loop through STRINGS      */
const str = 'Hello World';

for (const letter of str) {
    console.log(letter);
}




/**     Loop over Maps      */
const map = new Map();
map.set('name', 'Ali');
map.set('age', '36');

for (const [key, value] of map) {
    console.log(key, value);
}
