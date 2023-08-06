/*
In JS string can be initialised using both single quotes('') and double quotes("") and for
concatenation of stings we can simply use (+ or ,) opertors but this is an older way to 
perform operations on strings the newer js has efficient and better ways for string operations
*/

const name = "Samar"
const score = 50;

//this is an older way
console.log(name + score + "runs"); //output--> Samar50runs 

/*
The newer method for string operations is js is usage of backticks(``) that helps in string
interpolation 

Q-->what is string interpolation?
ans--> the process of evaluating a string literal containing one or more placeholders,
yielding a result in which the placeholders are replaced with their corresponding values.

***remember-->we can directly inject variables in placeholders,
these placeholders are created using ${} 
*/

//this syntax is modern and better
console.log(`Hello my name is ${name} and i scored ${score} runs`); //output--> Hello my name is Samar and i scored 50 runs

//another way for string declaration
//the typeof function for string declared using this method returns object
const userName = new String('Samar')

console.log(typeof userName)//output--> object

console.log(userName);
/* object output in key:value pairs
userName = {
    0 : S,
    1 : a,
    2 : m,
    3 : a,
    4 : r,
}
It also has various predefined methods stored in prototype we can simply acess them using dot(.)
operator(ex- userName.concat or userName.length)
*/

console.log(userName[0])//output--> S

//acessing the prediefined functions 
console.log(userName.length)//output--> 5
console.log(userName.toUpperCase()); /*output--> SAMAR but this function does not change the orignal 
value of the string userName since it is of primitive type*/

console.log(userName.charAt(2));//output--> m
console.log(userName.indexOf('r')); //output--> 4

//substring
const gameName = "Samar-9-Singh"
const newStr = gameName.substring(0,4) 
console.log(newStr)//output-->Sama

/*Now suppose i want to convert my gameName into an array and devide it on the basis of 
hyphen(-) then split method is used, it is important to note that split can also be done in the basis
of some character/whitespace/symbol */

console.log(gameName.split('-')); //output--> ['Samar','9','Singh']


/*slice(we can also give -ve values to slice which will give substring in reverse order)
otherise it works the same as substring*/

const newStr1 = gameName.slice(-12,4)
console.log(newStr1) //output--> ama

//trim method--> removes all the extra white spaces in the start and end of the string
const newStr2 = "   Samar    "
console.log(newStr2.trim()) //output--> "Samar" (without white spaces)

//replace method--> 
const url = "https://Samar.com/Samar%20Singh"
console.log(url.replace('%20','-'));//output--> https://Samar.com/Samar-Singh

/*includes method is used to check whether my string includes another given string passed in 
arguement or not */

console.log(url.includes('Samar'))//output--> true
console.log(url.includes('ameer'))//output--> false
