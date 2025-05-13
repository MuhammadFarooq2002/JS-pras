

// Non-Primitive Data Types

// Array 
// Objects
// Functions 


// Array 

//  let fruits = ["Apple" , " Banana" , "Mango" , "Orange" ] ; 
//    fruits.unshift("grapes","Pineapple","peach")

//  console.log(fruits);

// let nums = [1 , 2 , 3 , 4];
// console.log(nums);

// nums.push(5);
// console.log(nums);

// pop - remove values from last 

// let nums = [1 , 2 , 3 , 4];
// console.log(nums);

// nums.pop();
// console.log(nums);

// shift  - remove first element (values);

// let nums = [1 , 2 , 4];
// console.log(nums);
// nums.shift();
// console.log(nums);

// unshift - add element to the beginning 

// let nums = [1,2,3,4];
// console.log(nums);
// nums.unshift(0);
// console.log(nums);

// slice ( start , end (optional)) - copy portion of array.

//  let colors = ["red" ,"blue" , "Green" , "red"];
//  console.log(colors);
//  let copy = colors.slice(0,4)
//  console.log(copy);

// splice ( start , deleteCount , add) - add/remove 

//  let colors =  ["red", "blue" , "green"];

//  colors.splice( 1,1, "yellow" , "gray")

//  console.log(colors)

// .length - Length of array/string

// let name = "Ali";
// console.log(name.length)

// slice in string 

// let msg = "Welcome to JavaScript!";

// console.log(msg.slice(11)) // start
// console.log(msg.slice(0,7)); // start and end.
// console.log(msg.slice(-11));

//  let text = "JavaScript!";
//  console.log(text.substring(0,4));
//  console.log(text.substring(4,0)); // auto-swap


// replace ( search , newValue );

// let line = "Coding is Fun";

// console.log(line.replace("Fun", "Hard!"));

// let text = "Hello Hello";

// console.log(text.replace("Hello" , "Hi")) 

// console.log(text.replace(/Hello/g , "Hi"));

// split ( separator ) - string ko array mein convert karta hai. 

// let sentence = "This,is,JavaScript!";

// let words = sentence.split(",");

// console.log(words);

// Property = Object ka koi value/data jo directly accessible hota hai.

// Method = object ke andar ek function hota hai. jo specfic action karta hai.


// Object 

// let person = {
//     name: "Meer",
//     age: 25,
// }

// console.log(person)

// Object literal 

// let car = {
//     brand: "Toyota",
//     model: "Corolla",
//     year: "2025"
// }

// console.log(car);

// Creating Object using Constructor ( new Object )

// let car1 = new Object();

// car1.brand = "Hondei";
// car1.model = "Sunata";
// car1.year = "2024"

// console.log(car1);


// let std = {
//     name: "Ali",
//     age: 19,
//     isEnrolled: true
// }


// console.log(std["age"])

// nested objects 


// let user = {
//     name: "Meer",
//     address: {
//         city: "Karachi",
//         zip: 75500
//     }
// }


console.log(user.address.city);

let getName = prompt("Type your name")

let person = {
    name: getName,
    age: 29,
    greet: function () {
        return "Hello , my name is " + this.name
    }
};

console.log(person.greet())