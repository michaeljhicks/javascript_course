let x;
const arr = [1, 2, 3, 4, 5];
arr.push(6);

arr.reverse().push(0);

x = arr;

// console.log(x);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

let y;

y = arr1.concat(arr2);
// y.pop(4);
let uniqueArray = [...new Set(y)];
// let uniqueArray = y.filter((value, index) => y.indexOf(value) === index)


console.log(uniqueArray);