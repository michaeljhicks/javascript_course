// JSON is a lightweight data interchange format 
const post = {
    id: 1,
    title: 'Post One',
    body: 'This is the body',
};

// Convert to JSON string
const str = JSON.stringify(post);

// You use STRINGIFY and PARSE with local storage
// This is a way to store things on your client (browser)
// You can only store strings, and not objects

// So, you STRINGIFY your object (post), put it into local storage
// And then when you take it out, you would parse it back into an object 



// PARSE JSON back into an object
const obj = JSON.parse(str);

// it doesn't have to be a single object, it can be an array
const posts = [
    {    
        id: 1,
        title: 'Post One',
        body: 'This is the body', 
    },
    {
        id: 2,
        title: 'Post Two',
        body: 'This is the Body',
    },
];

const str2 = JSON.stringify(posts);

console.log(str2);

// NOTES
// you cannot access properites in the string, you have to convert it to an object, then you can access 
