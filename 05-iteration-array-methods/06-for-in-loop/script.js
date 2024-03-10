/**    For In Loop     
 *  For when you want to loop through an OBJECT'S VALUES
 *  When iterating through an array, FOR IN is ideal for getting keys/values from Object Literals
 */

const colorObject = {
    color1: 'red',
    color2: 'blue',
    color3: 'orange',
    color4: 'green',
};

// I don't understand the below code of colorObject[key], but that returns the values of the keys
for (const key in colorObject) {
    console.log(key, colorObject[key]);
}



/**     using FOR IN on an array     
 * 
 */

const colorArr = ['red', 'green', 'blue', 'yellow'];

for (const color in colorArr) {
    console.log(color);
} // this returns the index positions, so it's "0,1,2,3" and not 'red'...

// if you want the full element name, run this instead...
for (const key in colorArr) {
    console.log(colorArr[key]);
}


for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}