/*
Simple comparision operators with booleans output
<,<=,>,>=,==,!=
*/

/*problem occurs when we compares two values of different data Types as shown below as the results
maybe surprising and unpredictable, these types of comparisions should always be avoided
*/

console.log("2" > 1); //output--> true
console.log("02" > 1);//output--> true

/*NOTE--> The reason for the unpredictable result below is that equality(==) and other 
comparision operators(<,<=,>,>=) work differntly; the compariision operators convert null to 0
and give the otput accordingly whereas equality operator(==) does not
*/

console.log(null > 0); //output--> false
console.log(null == 0);//output--> false
console.log(null >= 0);//output--> true

console.log(undefined > 0);//output--> false
console.log(undefined == 0);//output--> false
console.log(undefined < 0);//output--> false

//strict check(===)--> it not only compares the values but also compares the data types

console.log("2" === 2)//output--> false