let x;
let d = new Date();

x = d.toString();

x = d.getTime();
x = d.valueOf();

x = d.getFullYear(); // returns only the year from the Date Object

x = d.getMonth(); // returns month as number, BUT Jan = 0
x = d.getMonth() + 1; //add +1 and month is acccurate 

x = d.getDate(); // retruns the DAY

x = d.getDay(); // returns DAY OF THE WEEK 



// METHODS THAT HANDLE TIME
x = d.getHours(); // returns HOUR of the day, military time
x = d.getMinutes();
x = d.getSeconds();
x = d.getMilliseconds();

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;


// Below Intl.DateTimeFormat is an actual API 

x = Intl.DateTimeFormat('en-US').format(d); // returns 02/14/2024
x = Intl.DateTimeFormat('en-GB').format(d); // Great Britain format

// THE BEST ONE 
x = Intl.DateTimeFormat('default').format(d); // returns formatted date based upon client's locale
// 
x = Intl.DateTimeFormat('default', { month: 'long' }).format(d); // returns February

x = d.toLocaleString('default', { month: 'short'}); // returns FEB

// this is the newer, easiest way to accomplish the best time stamp
x = d.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'America/Denver',
});


console.log(x);