/*Here by simply printing on console it is difficult to identify the type of data
stored in my variable, that is the reason to use typeof function and we can convert th types
*/
let score = 33
let score1 = "33"

//fails to identify the data type
console.log(score)
console.log(score1)

//helps to identify the data type
console.log(typeof score)
console.log(typeof score1);

//type conversion to covert string into number
let valueInNumber = Number(score1)
console.log(typeof valueInNumber)

//what if we do not have a pure number in string 
let score2 = "33abc"
let valueInNumber2 = Number(score2)

console.log(typeof valueInNumber2)
console.log(valueInNumber2) //the output for this will be NaN--> not a numberit is also a special type

//what if we have a value "null" stored in variable
let score3 = null;
let valueInNumber3 = Number(score3)

console.log(typeof valueInNumber3)
console.log(valueInNumber3); // the output for this will be 0

//what is we store a value "undefined" stored in variable
let score4 = undefined;
let valueInNumber4 = Number(score4)

console.log(typeof valueInNumber4) //number as output
console.log(valueInNumber4) //output--> NaN(not a number)

//what if we store "boolean" value in a variable
let score5 = true
let valueInNumber5 = Number(score5)

console.log(typeof valueInNumber5) // number
console.log(valueInNumber5); // the  output will be 1 for true value and 0 for a false value

/*Note:
"33"--> 33
"33abc" --> NaN
"true"--> 1
"false"--> 0
"undefined"--> NaN
null --> 0
*/

//conversion to boolean
let isLoggedIn = 1
let booleanValue = Boolean(isLoggedIn)
console.log(booleanValue) //output--> true

/*Note:
1--> true
0--> false
""--> false (empty string)
"Samar"--> true(for some value in string)
*/

//conversion to string
let someNumber = 33
let valueInString = String(someNumber)

console.log(typeof valueInString); // this will get converted to  string
console.log(valueInString);