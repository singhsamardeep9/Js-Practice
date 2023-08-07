const marvel_heroes = [ "Thor","Spiderman","Hulk" ]
const dc_heroes = [ "Batman","Superman","Flash" ]

/* suppose we push an array into another array(ex:dc_heroes into marvel_heroes)
then the array being pushed is treated as a new element in the array 
as [elem1,elem2,elem3,[whole array2 treated as elem4 in array1]] */

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes); //output-->[ 'Thor', 'Spiderman', 'Hulk', [ 'Batman', 'Superman', 'Flash' ] ]

//if we want to  acess flash then the following method is used
// console.log(marvel_heroes[3][2]) //output--> Flash

/* to avoid the above condition of Array within an Array we can use concat function
which returns a new array after concatenation*/

const all_Heroes = marvel_heroes.concat(dc_heroes)
console.log(all_Heroes); //output-->[ 'Thor', 'Spiderman', 'Hulk', 'Batman', 'Superman', 'Flash' ]

/* Another way is using spread operator, 
--> the spread function converts all the values of an array into individual values 
--> the main advantage of using spread over concat is that we can join 2 or more arrays at the same time 
Syntax: [...array1, ...array2, ...array3] */

const new_all_heroes = [...marvel_heroes,...dc_heroes]
console.log(new_all_heroes) //output--> [ 'Thor', 'Spiderman', 'Hulk', 'Batman', 'Superman', 'Flash' ]


//complex situation in array having several arrays in an array
const another_array = [ 1,2,3, [ 4, 5 ,6 ], 7 ,[ 6,7,[ 4,5 ] ] ]

/* to overcome this we can use flat function which will convert the complex array into a simple array
--> the flat function accepts a number as an arguement to specify the depth of conversion into simple array 
--> we can also pass "Infinity" as an arguement to avoid calculation of depth*/

const usable_another_array = another_array.flat(Infinity)
console.log(usable_another_array); //output--> [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5](converted into simple array)

/* Sometimes when we scrap data from web the result we get is not always an Array,
it can be an object, nodeList or string etc which is difficult to iterate therefore we can use two functions
1) to check whether the data received is array or not--> Array.isArray(data) function is used
2) to convert a non array data into array--> Array.from(data) function is used
--> the data here can be string, an object or any thing
*/

console.log(Array.isArray("Samar")); //output--> false
console.log(Array.from("Samar")); //output--> [ 'S', 'a', 'm', 'a', 'r' ]

console.log(Array.from({name: "Samar"})); /*output-->[] (the output is an empty array because it was unable to convert it 
                                directly into array to avoid this we need to specify to create array of keys or values)*/

// to create a new array from set of elements Array.of() function is used

const score1 = 100;
const score2 = 200;
const score3 = 300;
console.log(Array.of(score1,score2,score3));//output--> [ 100, 200, 300 ]
