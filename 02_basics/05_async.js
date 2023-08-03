/*It is Asynchronous code if we are using these:
async await
setTimeout
setInterval
promises
fetch
axios(package to get data through API calls)
XMLHttpRequest */

/* Q--> what is ansynchronous js?
Ams--> Asynchronous JavaScript is a programming technique that allows multiple tasks to 
run independently of the main program flow. All the tasks runs at the same time and 
we get the result of each task independently

Many a time our final code is dependent on some server and we are unaware of the time it would
take to generate a response, so to avoid code blocking we write asynchronous code and after
receiving the response from server our code dependent on async code also starts to execute
*/


/*setTimeout always executes after some time 
Syntax: setTimeout(callback_function(){
            code we want to get executed
            after some defined time
}, time in ms)

*/ 
setTimeout(function(){
    console.log("hey!") //output--> "hey!"(it will get printed after 2 secs)
},2000)

//Note-->callback function in async code always gets exeuted after we get the answer

//callback => promises => async await (order in which these concepts were introduced)

/*Note--> Asynchronous means performing two or more tasks at the same time,
 Js is single threaded and not multi threaded which means it can only perform one task at a time,
 therefore Js is not asynchronous.
There are two types of stack:
 1. Main Stack  2. Side Stack
 
 -->Synchronous code always moves to Main Stack
 --> Asynchronous code always moves to Side Stack and after Main Stack gets empty when
 all the executions in Main Stack are complete, the code in Side Stack moves to Main Stack for
 further execution 
*/

/* Q--> What is event loop in Js?
Ans--> The event loop is the secret behind JavaScript’s asynchronous programming.
JS executes all operations on a single thread, but it gives us the illusion of multi-threading

The event loop facilitates this process; it constantly checks whether or not the call stack
is empty. If it is empty, new functions are added from the event queue.
If it is not, then the current function call is processed.
*/

//example of event loop :

console.log("hey");
console.log("hey2");
setTimeout(function(){
    console.log("hey3");
},0)
console.log("hey4");
/** Here the output sequence will be:
 hey
 hey2
 hey4
 hey3
this is because the synchronous code in Main Stack gets executed first and after the execution
is complete the Main Stack gets empty and after that the asynchronous code from Side Stack
is pushed to Main Stack for its execution.
*/

/* async await, setTimeout, setInterval, promises, fetch,
axios(package to get data through API calls), XMLHttpRequest are used for sending request whereas,
callbacks,then catch and async await are used to receive answers to the requests
*/

//callbacks is always a function and it only executes when async code gets completed

//concurrency--> async and sync code ek saath chalna Main Stack aur Side Stack ki help se
//parallelism--> it focuses on the number of processors and its core for multiple process execution
//throttling--> it means controlling the number of execution for a code

//remaining topic--> promises(v.imp),then catch, async await,fetch
