// Dates

const myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());

const youDate = new Date(2022,0,18,5,3)
// console.log(youDate.toDateString());
// console.log(youDate.toLocaleString());

const youDateone = new Date("02-18-2022")
// console.log(youDateone.toLocaleString());

const myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(youDate.getTime());
// console.log(Math.floor(Date.now()/1000)); // for seconds

// console.log(myDate.getDate());
// console.log(myDate.getDay());
// console.log(myDate.getHours());

// console.log( myDate.toLocaleString('default', {
//     weekday: 'long'
// }));