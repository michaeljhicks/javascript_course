let x;
const firstName = 'John';
const lastName = 'Doe';
const age = 30;

// you can assign variables as the values
// const person = {
//     firstName: firstName,
//     lastName: lastName,
//     age: age,
// };

// you can also remove the value like this, getting same result
const person = {
    firstName,
    lastName,
    age,
};

x = person.age;
console.log(x);


// DESTRUCTURING = accessing object properties, NOT renaming them
// step 1: create the object 
const todo = {
    id: 1,
    title: 'Take out trash',
    user: {
        name: 'John',
    },
};

// this is the destructuring part. little confusing
// the curly braces are indicating the destructuring
const {
    id: todoId,
    title,
    user: { name },
} = todo;

console.log(todoId);

// Destructure Arrays
const numbers = [84, 33, 79, 49];
// using the rest operator
const [first, second, ...rest] = numbers
// the ...rest returns the remaining elements in the array
// this is the same syntax as the spread operator
console.log(first, second, rest);