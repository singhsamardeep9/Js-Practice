/* functions in js are simple block of code that helps in reusablity
--> functions in js can even be assigned to variables
-->suppose we want to repeat a task many times then it will be easier to write
 the code of that task within a function*/

//problem statement--> print a name 5 times
//solution--> instead of printing the name one by one we can simply print it ones and call the func 5 times

//first statement of the function is k/a function defination
function printName(){
    console.log("Samar");
}
printName();
printName();
printName();
printName();
printName();

function addTwoNumbers(num1, num2){
    console.log(num1+num2);
}
addTwoNumbers(3,4) //output--> 7

//complications occurs when we type passed  as an arguement is not of type number e.g.:
addTwoNumbers(3,'a')//output--> 3a
addTwoNumbers(3,"4")//output--> 34
addTwoNumbers(3,null)//output--> 3

/* we can also store the value calculated in the function in a variable but to do so we need to
return that value  rather than using console.lod function. e.g. : */

function addNumbers(num1,num2){ 
    return(num1+num2)
}
const result = addNumbers(5,4)
console.log(result); //output--> 9

//important point to remember--> No statement will be executed in the function after return statement

function logginUserMessage(userName){
    return `${userName} just logged in`
}

const message = logginUserMessage("Samar")
console.log(message); //output--> Samar just logged in

//if we do not pass any value as an arguement then we get undefied as an arguement

const message2 = logginUserMessage();
console.log(message2); //output--> undefined just logged in

//to avoid such errors of printing the message without passing the value we can use simple if else as a check

function isLoggedIn(userName){
    if(userName === undefined){
        console.log("please enter a user name");
    }
    else{
    console.log(`${userName} is logged in`)
    }
}

isLoggedIn() //output--> please enter a user name
isLoggedIn("Samardeep") //output--> Samardeep is logged in

/*we can also provide some default value to the parameter of the function 
to avoid the above conditions as:
Syntax:
function func_name(arguement = value){
    -----function body------
}
this will ensure that we do not end up printing undefied as an output on console
if we do not pass any value as an arguement then we will get the default value and if we pass some value
then the value passed as an arguement will overwrite the default value
*/

function logginCheck(username = "sam"){
    console.log(`${username} is logged in into account`)
}
logginCheck();//ouput--> sam is logged in into account

//---------------------------------------------------------------------------------
/* sometimes while building a shopping cart in a s/w we do not know the number of items
a user will add to the cart a without knowing the exact number we need to calculate the total
amount of the  cart
*/ 

function calculatePrice(price){
    return price
}
console.log(calculatePrice(200));//output-->200

console.log(calculatePrice(200,400,600)) /*output-->200
(this is because only the first value is stored in parameter price)*/

/*to handle such scenarios we use rest operator(...variableName),it is similar to spread operator.
It ssimply coonverts the values passed as arguements into an array so that it is easy to  iterate
over an array and calculte the sum.
It is used as:
*/

function cartPrice(...price){
    return price
}

console.log(cartPrice(1000,1200,2000)); /*output-->[ 1000, 1200, 2000 ](here price is an array having 
all the values passed as an arguement to the function cartPrice)*/

