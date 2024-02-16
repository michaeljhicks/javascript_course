let d;

d = new Date();

d = d.toString();

d = new Date(2021, 6, 10, 12, 30, 0); // Jan starts at 0, Feb = 1, March = 2 ...

d = new Date('2021-07-10'); // you can pass a string, where 7 now says July

d = new Date('2021-07-10T12:30:00');
d = new Date('07/10/2021 12:30:00');
d = new Date('2022-07-10');
d = new Date('07-10-2022'); // use this format

// the timestamp in JS is expressed in miliseconds
d = Date.now();

d = new Date();
d = d.getTime();
d = d.valueOf();

// you can CREATE DATE OBJECTS from a TIME STAMP
d = new Date(1708045030631);

// in JS by default, the time stamps are in miliseconds
// 
d = Math.floor(Date.now() / 1000);


console.log(d, typeof d);