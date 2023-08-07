/*
1.arrays in js is simply a collection of multiple variable in a single place and can store value
of any type and can be of mixed type also
2.arrays in js are resizeable
3.Arrays are not primitives they are objects instead
4.zero based indexing
5. Javascript copy-operation creates a shallow copy instead of deep copies i.e. the properties share
 the same references(if the value is changed via copy the values of orignal also gets changed)  
*/
const arr = [0,1,"Samar",true,9.3]
const myArr = new Array(0,1,2,3,4)

console.log(myArr[0])//output--> 0

//methods

//1.push--> inserts value at last in the array
myArr.push(5);
console.log(myArr)//output-->[ 0, 1, 2, 3, 4, 5 ](here the orignal array changes)

//2.pop--> it simply removes the last value from the array, the pop function does not require any arguement
myArr.pop()
console.log(myArr);//output-->[ 0, 1, 2, 3, 4 ]

/*3.unshift--> it adds an element at the starting index of the array
(it is not optimised function because it shifts all the remaining elements of the array
which can be timeconsuming in the  case of large arrays)
*/

myArr.unshift(9)
console.log(myArr);//output-->[ 9, 0, 1, 2, 3, 4 ]

//shift--> it removes the value at start index of the array and shift function does not require any arguement

myArr.shift()
console.log(myArr);//output-->[ 0, 1, 2, 3, 4 ]

console.log(myArr.indexOf(9))//output--> -1(since 9 is not present in array)

//some  other functions of arrays works as a questionare methods that gives result in boolean values
//ex:
console.log(myArr.includes(9))//output-->false

//join function in array converts the array into string that are comma seprated
//ex:
const newArr = myArr.join()
console.log(myArr)//output-->[ 0, 1, 2, 3, 4 ]
console.log(newArr);//output--> '0,1,2,3,4'

console.log(typeof myArr)//output--> object
console.log(typeof newArr);//output--> string

/* **very important interview question(difference b/w slice and splice)
ans--> the slice function does not change the orignal array whereas the splice function
changes the orignal array

-->usually people come up with an answer that the slice function does not include the value at second
index passed as an arguement whereas the splice function includes it i.e. slice works from start index
to end index-1 and splice works from start index to end index.(This answer is not completely correct or
we can say that this asnswer is partially wrong). The correct answer is stated abov at line 54)
*/

console.log("A ", myArr);//output--> A [ 0, 1, 2, 3, 4 ]

const myn1 = myArr.slice(1, 3)

console.log(myn1);//output-->[ 1, 2 ](values at index 1 and 2 gets printed)
console.log("B ", myArr);//output--> B [ 0, 1, 2, 3, 4 ]


const myn2 = myArr.splice(1, 3)
console.log(myn2);//output--> [ 1, 2, 3 ](values at index 1,2 and 3 gets printed but the orignal array gets reduced)
console.log("C ", myArr);//output--> C  [ 0, 4 ]

