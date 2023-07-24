/*
prefer not to use var istead decare using let keyword
becuase of issue in block scope and functional scope
*/

const accountId = 7713203119
let email = "singhsamardeep9@gmail.com"
var passWrd = "12345"
/*since js is a  safe language therefore there is a possiblity that we can declare variable without 
using any keyword as shown below but we should avoid it
*/
accountCity = "Lucknow"
//If we do not initialise a value in js  then the default value stored in variable is "Undefined"
let accountState;

// accountId = 2 
// not allowed  as accountId is declared using const keyword
// console.log(accountId)
email = "singhsamar09@gmail.com"
passWrd = "321321"
accountCity = "New Delhi"
/*
Instead of printing each value individually we can use console.table method  to print all
the variables in tabular form
Syntax:
console.table([variableName1, variableName2, variableName3...])
*/
//actaul use case
console.table([accountId,email,passWrd,accountCity,accountState])