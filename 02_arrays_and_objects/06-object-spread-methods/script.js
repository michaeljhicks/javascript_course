// another way to create an object, by creating an empty one, then adding properties
// let x;
// const todo = {};
// todo.id = 1;
// x = todo;
// console.log(x);

// Create Object Literal using new constructor
let x;
const todo = new Object();
todo.id = 1;
todo.name = 'Buy Milk';
todo.completed = false;
x = todo;

// NESTING
const person = {
    address: {
        coords: {
            lat: 42.9384,
            lng: -71.3232,
        },
    },
};

x = person.address.coords.lat;

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};

// this puts the two above objects inside of object 3
// const obj3 = {obj1, obj2};

// this combines obj1 and obj2 into one object, using the SPREAD operator
const obj3 = {...obj1, ...obj2};
// assign is the old school way 
const obj4 = Object.assign({}, obj1, obj2);

const todos = [
    {id: 1, name: 'Buy Milk'},
    {id: 2, name: 'Pick up kids from school'},
    {id: 3, name: 'Take out trash'},
];

x = todos[0].name;

// Object.keys returns the keys into an array
x = Object.keys(todo);

// Often you'll want to get the length of an Object
// you want to first get the keys, and then get the length of the array
x = Object.keys(todo).length;

// Object.values retruns values into an Array
x = Object.values(todo);

// for when you want to get both keys and values
// returns an array of the key/value pairs
x = Object.entries(todo);

// hasOwnProperty returns a boolean. Pass in the key to see if a property is associated
x = todo.hasOwnProperty('name'); // returns true 
x = todo.hasOwnProperty('age'); // returns false 

console.log(x);