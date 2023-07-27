//Date

let myDate = new Date() //this is an instance of object Date
console.log(myDate);//output--> 2023-07-27T21:26:15.306Z(this is quite unreadable and non compareable)

//the better approach to make the date more readable is by converting it to string
console.log(myDate.toString());//output-->Thu Jul 27 2023 21:29:29 GMT+0000 (Coordinated Universal Time)

//there are various other methods to convert it into a better format

/*
examples- toLocaleString(),toDateString(),toTimeString(),toISOString(),toUTCString()
need to try these methods
*/

console.log(typeof myDate) //output--> object

//how to declare a date in js

let myCreatedDate = new Date(2023,0,23);
console.log(myCreatedDate.toDateString())//output-->Mon Jan 23 2023

//other way declare date in mm-dd-yyyy format
let myNewDate = new Date("01-14-2023");
console.log(myNewDate.toString())//output-->Sat Jan 14 2023 00:00:00 GMT+0000 (Coordinated Universal Time)


//time stamps are usually used where i make a quiz game and decide the winner  based on time
let myTimeStamp = Date.now();
console.log(myTimeStamp)//output-->1690495325029(this is the value in miliseconds w.r.t 1st Jan 1970)
 
//we can covert a date to milisecond value to compare it with other values also
//for ex- converting the variable myNewDate into miliseconds

console.log(myNewDate.getTime())//output-->1673654400000

//to convert a milisecond value to seconds
console.log(Math.floor(Date.now()/1000))//output-->1690496513
