/*
JS documentation states that there are only two types based on how they are stored in memory

1.Primitives(7 types)--> String,Number,Boolean,null,undefined,Symbol,BigInt(a copy of value 
    is passed instead of actual reference to the memory and changes made in the copy does 
    not change the orignal value)

2.Non Primitives/Reference(3 types)--> Arrays,objects,functions(actual reference to the memory
    is passed and changes made to them changes the orignal values)
*/ 

/*NOTE: It is to remember that a variable delared with const keyword should always be 
assigned some value otherwise without initialization it would result in an error as:
(Uncaught SyntaxError: Missing initializer in const declaration)*/

const  score = 100.3 //Number type
const email = "singhsamardeep9@gmail.com" //string type
const isLoggedIn = false //boolean type
const outsideTemprature = null //null type to define no value/empty
let address; //undfined since no value is initialised or we can also assign undefined to it

const userId = Symbol('123') //symbol type to define uniqueness
const anotherUserId = Symbol('123')
/*
on camparing userId with anotherUserId the output will be false since both the values
are considered to be unique
*/

console.log(userId == anotherUserId); //output-->false

//Arrays
const heroes = ["spiderman","superman","Thor"]

//objects are stored in the form of key:value pairs
const myObj = {
    name:"Samar",
    age:"22",
}

/* Functions in js are simply declared by using "function" keyword 
and can simply be assigned to a variable as shown below: */
let hello = function(){
    console.log("Hello World");
}

/* The return type after using typeof function for non primitive values gives object as
an output:
Object--> Object
Array--> Object
function--> Object function
*/

//---------------------------------------------------------------------------------------------------

//There are two types of memory in Js(Stack and Heap)
//Stack is allocated to primitive types whereas Heap is allocated to reference types

let  myName = "Samardeep"
let anotherName = myName;
anotherName = "Samar";

/*
imp concept--> the value of variable myName does not change since a copy of value is passed to
variable anotherName and not the actual reference of the memory is passed, and even after changing the value
 in variable anotherName the orignal value of myName is not changed
*/

console.log(myName); //output-->Samardeep
console.log(anotherName);//output-->Samar


let userOne = {
    emailId : "email@123",
    upiId : "user@ybl"
}
let userTwo = userOne;

/* In the case of Non Primitive types a value changed by userTwo changes the value in userOne since
the actual reference of userOne is passed to userTwo */

userTwo.emailId = "email321@google.com"
//here the value of emailId in userOne also changes as that of userTwo

console.log(userOne.emailId);//output-->email321@google.com
console.log(userTwo.emailId);//output-->email321@google.com
