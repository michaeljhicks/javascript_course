/**    forEach
 * High Order Array Methods
 * Take in a function as an argument (this is called a CALLBACK FUNCTION)
 *      Within that function, you can pass in a VARIABLE that'll represent each element in the array
 * forEach simply loops through, it DOES NOT return anything     
 *          ANONYMOUS FUNCTION - 
 */

const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];

// console.log(socials.__proto__);


// socials.forEach(function (item) {
//     console.log(item);
// });

//          you can also do it like this
// socials.forEach((item) => console.log(item));

socials.forEach((item, index, arr) => {
    console.log(item);
});