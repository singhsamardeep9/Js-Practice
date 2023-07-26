/*
JS documentation states that there are only two types based on how they are stored in memory

1.Primitives(7types)--> String,Number,Boolean,null,undefined,Symbol,BigInt(a copy of value 
    is passed instead of actual reference to the memory and changes made does not change
    the orignal value)

2.Non Primitives/Reference(3types)--> Arrays,objects,functions(actual reference to the memory
    is passed and changes made to them changes the orignal values)

*/ 

/*NOTE: It is to always remeber that a variable delared with const keyword should always be 
assigned some value otherwise a without initialization would result in error*/

const  score = 100.3 //number type
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

//objects ar stored in the form of key value pairs
const myObj = {
    name:"Samar",
    age:"22",
}

/*functions in js are simply declared by using "function" keyword 
and can simply be assigned to a variable as shown below*/
let hello = function(){
    console.log("Hello World");
}

/*The return type after using typeof function for non primitive values gives objeect as
an output:
Object--> Object
Array--> Object
function--> Object function
*/