//we can also create an object in js using a constructor(singleton object) as:

const tinderUser = new Object()
console.log(tinderUser);//output--> {}(empty object)

tinderUser.userId = "123abc"
tinderUser.name ="Samar"
tinderUser.isLoggedIn = false;

console.log(tinderUser);//output--> { userId: '123abc', name: 'Samar', isLoggedIn: false }

//nesting of an object
const regularUser = {
    email:"samar123@gmail.com",
    fullName:{
        userFullName:{
            firstName : "Samardeep",
            lastName : "Singh"
        }
    }
}

//acessing the values in a nested object using dot(.) notation
console.log(regularUser.fullName); //output-->{ userFullName: { firstName: 'Samardeep', lastName: 'Singh' } }

console.log(regularUser.fullName.userFullName); //output-->{ firstName: 'Samardeep', lastName: 'Singh' }

//chaining using dot(.) notaion in a nested  object
console.log(regularUser.fullName.userFullName.firstName); //output--> Samardeep

//further we will also learn optional chaining(where ? is used when we are not sure about the output)

//we can also merge two  or more objects in js aswe did in arrays
const obj1 = {
    1: 'a',
    2: 'b'
}

const obj2 = {
    3: 'c',
    4: 'd'
}

/*this method will combine the two objects similarly as we did in arrays and will result in
obect within another object
*/
const obj3 = { obj1, obj2}
console.log(obj3)//output--> { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

/*to avoid the above situation we can use Object.assign() function
as we used concat function in arrays 
Syntax: Object.assign({},sourceObject1, sourceObject2...)
-->Here {}(empty object) works as a target object where source objects are stored and it always 
returns a new object
*/

//implementation
const obj4 = Object.assign({}, obj1,obj2)
console.log(obj4);//output-->{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//we can also combine two or more objects usig spread operator in an efficient manner
const obj5 = {...obj1,...obj2}
console.log(obj5);//output-->{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//usually when we get a result froma database we get an array of objects as:

const users = [
    {
        id: 1,
        email: "xyz@gmail.com",
    },
    {
        id: 2,
        email: "h@gmail.com",
    },
    {
        id: 3,
        email: "abc@gmail.com",
    }
]

console.log(users[1].email)//output--> h@gmail.com

/*to print all the keys in an object we can use Object.keys(name of the object) function 
-->this will return an array with all the keys
-->it is used so that we can iterate over all the keys of the object and is an important concept
*/
console.log(Object.keys(tinderUser)); //output-->[ 'userId', 'name', 'isLoggedIn' ]
 
//we can also do similar process with all the values of thee object
console.log(Object.values(tinderUser))//output-->[ '123abc', 'Samar', false ]

/* Another important function that converts the object into array of arrays is Object.entries()
--> Here each element is an array where 0th index of the element is a key and
 1st index is the actual value
 */

console.log(Object.entries(tinderUser));//output-->[['userId','123abc'],['name','Samar'],['isLoggedIn',false]]

/* Sometimes we come up with a situation where we loop through the property of the object and
 try to acess a value which is not present and this may result in system to crash
-->to avoid this we can check whether the property is present or not before hand using
hasOwnPropety() function */

console.log(tinderUser.hasOwnProperty("isLoggedIn"));//output--> true