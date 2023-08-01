/* object in js can be declared in two ways
1) As literal(this does not creeate singleton)
2) As constructor(this creates singleton)
*/
//object constructor
//syntax: object.create

//how to create a symbol and add it to an object
const mysmb = Symbol("Key1")


//object literals
const user = {
    name: "Samar",
    "full name" : "Samardeep Singh",
    [mysmb]: "key1",
    age: 22,
    location: "Lucknow",
    isLoggedIn: false,
    email: "samar@google.com",
    lastLooginDays:["Monday","Saturday"]
}
//Note--> the keys in object are treated as string behind the scene, ex: name is  treated as "name"

//acessing the symbol (mysmb)
console.log(user[mysmb]); //output-->key1
console.log(typeof mysmb) //output--> symbol

//how to acess values in an object
console.log(user.name); //output-->"Samar"
console.log(user.email); //output--> samar@google.com

//acessing using suare notation
console.log(user["email"]); //output--> samar@google.com(always remember to consider email as string in this case)

/* learning the second method is important because we cannot access the key(full name)
in the above object using dot(.) because there is a space in (full name) */
console.log(user["full name"]); //output--> Samardeep Singh(acessing the value by user.full name is not possible)

//how to change the value of a partiular key of an object
user.email = "samar@yahoo.com";
console.log(user); //this will change the value of email to "samar@yahoo.com"

/*how to make the value of an object unchangable?
--> simply use object.freeze(arguement) function and we pass name of the object we want to make 
unchangable as an arguement */


/* this will freeze all the changes made to the object 
and all the attempts for further changes will not be considered 
(these attempts of changes in the object will not result in any kind of error) */

// Object.freeze(user);

user.email = "samar@microsoft.com" //this will not make any change because of freeze function
console.log(user);//here all the  values in the object remains same as it were and therewill not be any error

user.greeting = function(){
    console.log("Hello there!")
}
user.greetingTwo = function(){
    console.log(`Hello there!, ${this.name}`) //output--> Hello there! Samar(this keyword referes to the current object)
}

console.log(user.greeting())
console.log(user.greetingTwo())