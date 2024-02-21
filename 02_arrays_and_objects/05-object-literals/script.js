let x;

const person = {
    name: 'John Doe', 
    age: 30,
    isAdmin: true,
    address: {
        street: '123 Main Street',
        city: 'Boston',
        state: 'MA',
    },
    hobbies: ['music', 'sports'],
};

// accessing the attributes of the object literal
// the dot syntax will be more common
// when using brackets, it must be in a string format
x = person.name;
x = person['age'];
// access a nested literal 
x = person.address.state;
// access a nested array within a literal
x = person.hobbies[1];

// UPDATE PROPERTIES
person.name = 'Jane Doe';
person.isAdmin = false;
x = person;

// REMOVE A PROPERTY 
delete person.age;
x = person;

// ADD A PROPERTY
person.hasChildren = true;
x = person;

// ADD A FUNCTION 
person.greet = function () {
    console.log(`Hello, my name is ${this.name}`)
}
// ACCESS THE FUNCTION
person.greet();

x = person;

console.log(x);