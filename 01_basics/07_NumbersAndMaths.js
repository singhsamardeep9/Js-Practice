/*There are two ways to declare and initialise numbers 

first method as shown below "const score=600" does not assure the typeof value in the variable, whereas

In the second method using new keyword "const runs = new Number(400)" there is an assurance that the
value stored in  variable is of type number, another advantage of using this method is we get some 
predefined functions to make our work easier
*/
const score = 600;
console.log(score); //output--> 600

const runs = new Number(400)
console.log(runs); //output--> [Number:400]

//some predefined functions

//1.toString--> converts number into string
console.log(runs.toString()) /*output--> "400" (this is of string type) after converting the value to string
                             we can also use some predefined functions of string */

console.log(runs.toString().length) //output-->3 (first converted to string then calculated its length)


//2. toFixed(number type arguement)--> it simply fixes the no. of decimal places after an whole number
const num = 100;
console.log(num.toFixed(2));//output-->100.00 (it does this on the basis of number passed as an arguement)

//3.toPrecision(number type arguement)--> gives the precision value and returns the output in string
const otherNum = 23.89645
console.log(otherNum.toPrecision(4)); //output--> "23.90" (this value is in the form of string)

/* 4.toLocaleString()--> it is usually used to format the number in international number system
and usually used where it is difficult to read the number */
const hundreds = 10000000
console.log(hundreds.toLocaleString()); //output--> 10,000,000

/* to use this same method and convert the number in indian number system we simply pass('en-IN')
as an arguement */
console.log(hundreds.toLocaleString('en-IN')) //output--> 1,00,00,000

//-------------------------------------------Maths------------------------------------------------

 //Math in js is also an object containing various predefined function in key:value pairs
 console.log(Math); //output--> object[Math]{}

 console.log(Math.abs(-4)) //output--> 4
 console.log(Math.round(4.3)) //output--> 4
 console.log(Math.ceil(4.2)) //output--> 5
 console.log(Math.floor(4.8)) //output--> 4
 console.log(Math.min(4,3,8,7)) //output--> 3
 console.log(Math.max(4,3,8,7)) //output--> 7

 //Math.random()--> every time it executes by default gives random value between 0 to 1
 console.log(Math.random()); //e.g. Ouput-->0.698245867598343

 //suppose we build a software where we require a random value b/w 1 to 10
 console.log(Math.random()*10) 
 //but using this can also give a value like 0.18364 since Math.random took 0.018364 as an input b/w[0-1]

 //better approach
 console.log((Math.random()*10)+ 1) //this assures that the value will always be b/w[1-10]

 /*suppose we need to take an input b/w a desiredd range[min,max] where min = 10 and max = 20
 to solve this always remember to use this formula*/


 const max = 20;
 const min = 10;
 console.log(Math.floor(Math.random()*(max - min + 1)) + min) //this will always give an integer b/w[10,20]
