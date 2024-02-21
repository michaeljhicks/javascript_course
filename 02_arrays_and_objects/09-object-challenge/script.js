// Step 1
const library = [
    {
        title: 'Harry Potter',
        author: 'JK Rowling',
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
    {
        title: 'A Mind for Numbers',
        author: 'Barbara Oakley',
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
    {
        title: 'This is How You Lose Her',
        author: 'Junot Diaz',
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
];

// Step 2 - set read value for all of them to TRUE
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;
// console.log(library);


// Step 3 - deconstruct title from first book and rename variable to firstBook
// REMEMBER: this doesn't change anything in the object
const { title: firstBook } = library[0];
console.log(firstBook);


// Step 4 - Turn library object into JSON string
const str = JSON.stringify(library);
console.log(str);

