// //

// var products = [
//     {
//         id: 101,
//         title: "Sony LED 40 inch",
//         variations: [
//             { id: 1, color: "black", price: 50000, quantity: 5 },
//             { id: 2, color: "red", price: 50000, quantity: 1 },
//             { id: 3, color: "silver", price: 55000, quantity: 8 },
//         ],
//         reviews: [
//             {
//                 id: 1,
//                 user: "Ahmad",
//                 rating: 4.0,
//                 title: "Good Product",
//                 comments: "It is a very good product ....",
//                 date: "06-02-2021",
//                 status: true,
//             },
//             {
//                 id: 2,
//                 user: "Zubair",
//                 rating: 4.5,
//                 title: "Very Good Product",
//                 comments: "zubair It is a very good product ....",
//                 date: "05-02-2021",
//                 status: false,
//             },
//             {
//                 id: 3,
//                 user: "Ali",
//                 rating: 5.0,
//                 title: "bad Product",
//                 comments: "ali It is a very good product ....",
//                 date: "04-02-2021",
//                 status: true,
//             },
//         ],
//     },
//     {
//         id: 102,
//         title: "Mobile",
//         variations: [
//             { id: 1, color: "black", price: 50000, quantity: 5 },
//             { id: 2, color: "red", price: 50000, quantity: 1 },
//             { id: 3, color: "silver", price: 55000, quantity: 8 },
//         ],
//         reviews: [
//             {
//                 id: 1,
//                 user: "Ahmad",
//                 rating: 4.0,
//                 title: "Good Product",
//                 comments: "It is a very good product ....",
//                 date: "06-02-2021",
//                 status: true,
//             },
//             {
//                 id: 2,
//                 user: "Zubair",
//                 rating: 4.5,
//                 title: "Very Good Product",
//                 comments: "zubair It is a very good product ....",
//                 date: "05-02-2021",
//                 status: false,
//             },
//             {
//                 id: 3,
//                 user: "Ali",
//                 rating: 5.0,
//                 title: "bad Product",
//                 comments: "ali It is a very good product ....",
//                 date: "04-02-2021",
//                 status: true,
//             },
//         ],
//     },
//     {
//         id: 103,
//         title: "Bike",
//         variations: [
//             { id: 1, color: "black", price: 55000, quantity: 5 },
//             { id: 2, color: "red", price: 50000, quantity: 1 },
//             { id: 1, color: "black", price: 55000, quantity: 5 },
//         ],
//         reviews: [
//             {
//                 id: 1,
//                 user: "Ahmad",
//                 rating: 4.0,
//                 title: "Good Product",
//                 comments: "It is a very good product ....",
//                 date: "06-02-2021",
//                 status: true,
//             },
//             {
//                 id: 2,
//                 user: "Zubair",
//                 rating: 3.0,
//                 title: "Very Good Product",
//                 comments: "zubair It is a very good product ....",
//                 date: "05-02-2021",
//                 status: false,
//             },
//         ],
//     },
// ]
// for (var j = 0; j < products.length; j++) {
//     var product = products[j];
//     var sum = 0;
//     for (var i = 0; i < product.reviews.length; i++) {
//         sum = sum + product.reviews[i].rating;
//     }

//     var avgRating = sum / product.reviews.length;

//     console.log("Product " + product.id + " = " + avgRating + "(" + product.reviews.length + ")");
// }

//---------/


// var students = [
//     {
//         name: "farooq",
//         idNumber: 278268,
//         subject: "Maths",
//         marks: 25,
//         present: true,
//     },
//     {
//         name: "ali",
//         idNumber: 245668,
//         subject: "Urdu",
//         marks: 25,
//         present: false,
//     },
//     {
//         name: "umer",
//         idNumber: 277668,
//         subject: "English",
//         marks: 25,
//         present: true,
//     },
//     {
//         name: "maaz",
//         idNumber: 273548,
//         subject: "Science",
//         marks: 215,
//         present: false,
//     }
// ]
// // console.log(students[0].name)
// // console.log(students[0].idNumber)
// // console.log(students[0].subject)
// // console.log(students[0].marks)
// // console.log(students[0].present)

// var sum = 0
// for (var i = 0; i < students.length; i++) {
//     sum = sum + students[i].marks
// }
// // console.log(sum)
// var avg = sum / students.length
// console.log("Avg is ", avg,"=","Sum is",sum);

// ------------/
//----------/

// let farooq = document.getElementsByClassName ("boxs")
// console.log(farooq)

// farooq[2].style.backgroundColor = "red"

// let umer=document.getElementsByClassName("box")
// console.log(umer)
// umer [2].style.backgroundColor = "blue"

// document.getElementById("home").style.backgroundColor = "pink"

// let boxes = document.getElementsByClassName("box-1")
// console.log(boxes)

// boxes [2].style .backgroundColor="yellow"

// //-------/
// Squre root qus------

// var squre = prompt('Plase enter a number');

// var a = Math.sqrt(squre);

// console.log(a);

//-----/

// This is a dynamic number/

// var a = prompt('Plesa Enter first number')
// var b = prompt('Plesa Enter secend number')

// var c = parseInt(a) + parseInt(b);
// console.log("The Sum is "+ c);

// ---------/

//This is static number/

// var a = 3
// var b = 4

// var c = a + b;

// console.log("The Sum is "+ c)

// -------/

// ------------/

// ------gi folder------/

// var a = prompt("Place Enter Your Percentage");

// if (a >= 80 && a <= 100) {
//     alert("top")
// } else if (a >= 60 && a <= 80) {
//     alert("First")
// } else if (a >= 40 && a <= 60) {
//     alert("2nd")
// } else if (a >= 20 && a <= 40) {
//     alert("3rd")
// } else if (a <= 20) {
//     alert("fail")
// } else {
//     alert("Place Vilad Percentage")
// }

// var a = "20";
// var b = 20;

// if (a === b) {
//     console.log("Ok this is right");
// }else{
//     console.log("This is not right");
// }

// conditional (ternary operator)......../

// var a = 30;
// var b =
// b = (a >= 10 ? "ture" : "false");
// console.log(b);

// alert box ..../

// alert ("welcome to my website")

// var a = 30;
// var b = 40;

// if (a >= b){
//     alert ("ture");
// }else{
//     alert ("false");
// }

// comfirm box....../

// var a = confirm("do you like my website ?");


// if(a){
//     alert ("ture");
// }else{
//     alert("false")
// }

// functions...../

// function firstName (){
//     console.log("farooq");
// }

// function game (){
// console.log("mhuhammad farooq")
// }

// firstName();
// game();
// game();
// firstName();

// function paramcters.../
// Ek hi function ko bar bar alag tarika sa used karna ka lia

// function firstName(fname, lname) {
//     console.log(fname + lname)
// }
// function sum(fname, lname) {
//     console.log(fname + lname)
// }

// firstName("farooq", "umer");
// firstName("Muhammad", "farooq");
// sum(30, 20)
// sum(30.10,40)
// sum(30.10,80)
// firstName("maaz", "ali");



// function a (farooqName, umerName) {
//     console.log(farooqName + umerName)
// }

// a("i am ","farooq");
// a("i am ","23 year old");
// a("i am ","Beginner developer");
// a("i am ","Memon");


//----------/

//----------/

// let farooq = document.getElementsByClassName ("boxs")
// console.log(farooq)

// farooq[2].style.backgroundColor = "red"

// let umer=document.getElementsByClassName("box")
// console.log(umer)
// umer [2].style.backgroundColor = "blue"

// document.getElementById("home").style.backgroundColor = "pink"

// ------/

// Write a JavaScript function to find the largest of three numbers: a = 10, b = 25, c = 15.

// function largestNmuber(a, b, c) {
//     if (a >= b && a >= c) {
//         return a
//     } else if (b >= a && b >= c) {
//         return b
//     } else {
//         return c;
//     }
// }
// console.log(`${"The largest number is"} = ${largestNmuber(10, 25, 15)} `);

//--------------/

//  Write a function to check if a number is even or odd.

// function checkevenOdd(num) {
//     if (num % 2 === 0) {
//         return "Even"
//     }else{
//         return "Odd"
//     }
// }
// console.log(checkevenOdd(4))

//--------------/

// Write a function to reverse a string. Example: "hello" → "olleh"

// ====

// function reverse(name) {
//     return name.split("").reverse().join("");
// }

// console.log(reverse("Farooq"));

//--------------/

//  Write a function to find the sum of all numbers in an array.

// ====

// function sumArray(arr) {
//     let sum = 0;
//     for (let num of arr) {
//         sum += num;
//     }
//     return sum;
// }

// console.log(sumArray([1, 2, 3, 4]));

//--------------/

// for loops logic bulding-------/

//  Print numbers from 1 to 10

// for (let i = 0; i <= 10; i++) {
//     console.log(i);


// }



//--------------/

// //  Print even numbers from 1 to 20

// for (let i = 2; i <= 10; i+=2) {
//     console.log(i);

// }
// //  Print Odd numbers from 1 to 20

// for (let i = 1; i <= 10; i+=2) {
//     console.log(i);

// }

//--------------/

//  Print numbers from 10 to 1 (reverse order)

// for (let i = 10; i >= 1; i--) {
//     console.log(i)

// }
// }

// -------------- /

// print a student result for javascript logic bulding

// function resultStudent(num) {
//     if (num >= 80 && num <= 100) {
//         return "Very Good A Gread";
//     } else if (num >= 60 && num <= 80) {
//         return "Good B Gread";
//     } else if (num >= 33 && num <= 60) {
//         return "Bad C Gread";
//     } else {
//         return "You Are Failed";
//     }
// }
// console.log(resultStudent(32));

// -------------- /

// calculatar Example ----- /

// function calculator(x, y, op) {
//     if (op === "+") {
//       return x + y;
//     }

//     if (op === "-") {
//       return x - y;
//     }

//     if (op === "*") {
//       return x * y;
//     }

//     if (op === "/") {
//       return x / y;
//     }

//     if (op === "max") {
//       return x > y ? x : y;
//     }

//     if (op === "min") {
//       return x < y ? x : y;
//     }
//   }

// let calculatorFn = (x, y, fn) => fn(x, y);

// const sum = (x, y) => x + y;
// const mul = (x, y) => x * y;
// const sub = (x, y) => x - y;
// const max = (x, y) => (x > y ? x : y);
// const min = (x, y) => (x < y ? x : y);

// console.log(calculatorFn(2, 4, mul));

// ----------- /

// var a =3;
// var b =5;
// var c = a+b
// console.log("The Sum is",c)

//  ----------------   /

// function minNumber(a, b, c) {
//     if (a <= b && a <= c) {
//         return a;
//     }
//     if (b <= a && b <= c) {
//         return b;
//     }
//     if (c <= b && c <= a) {
//         return c;
//     }
// }
// console.log(minNumber(2, 3, 1));

// function minNumber(a, b, c) {
//     let minNumber = c;
//     if (b < minNumber) {
//         minNumber = b
//     }
//     if (c < minNumber) {
//         minNumber = c
//     }
//     return minNumber ;
// }
// console.log(minNumber("farooq", -3, "faroq"))

// ------- /


// function reverString(input) {
//     for (let i = input.length - 1; i >= 0; i--)
//         console.log(input[i]);
// }
// reverString("SoftwareDevelopment");


// ------- /
// function studentResult(num) {
//     if (num >= 80 && num <= 100) {
//         return "A Gread";
//     }
//     else if (num >= 60 && num <= 80) {
//         return "B Gread";
//     }
//     else if (num >= 33 && num <= 60) {
//         return "C Gread";
//     }
//     else if(num <= 33) {
//         return "Failed";
//     }
// }
// console.log(studentResult(70));

// -------- /


// function gradeSystem() {
//     var a = prompt("Enter Your Marks")
//     if (a > 100) {
//         return "This is not Eligible"
//     }
//     else if (a >= 90 && a <= 100) {
//         return "A Grade";
//     }
//     else if (a >= 80 && a <= 89) {
//         return "B Grade";
//     }
//     else if (a >= 70 && a <= 79) {
//         return "C Grade";
//     }
//     else if (a >= 60 && a <= 69) {
//         return "D Grade";
//     }
//     else if (a <= 60 && a >= 33) {
//         return "Very Bad";
//     }
//     else if (a < 33) {
//         return "Failed"
//     }
// }
// console.log(gradeSystem());

// -------- /

// Q Write a JavaScript program that accept two integers and
//   display the larger. Also show if the two integers are equal.

// function twoNumAdd(a, b) {
//     if(a > b){
//         return (`The Larger number is : ${a}`);
//     }
//     else if(b > a){
//         return (`The Larger Number is : ${b}`);
//     }
//     else{
//         return (`Both Number is equal`);
//     }
// }
// console.log(twoNumAdd(70, 70));

// -------- /

// Q Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.


// function ckeckWhether() {
//     let a = prompt ("Check a Whether");
//     if(a > 0){
//         return "Positive";
//     }
//     else if(a < 0){
//         return "Negative";
//     }
//     else{
//         return "Zero"
//     }
// }
// console.log(ckeckWhether());

// -------- /

// Q This if/else statement does not work. Try to fix it:
// function problemSovled() {

//     var greeting;
//     var hour = 13;
//     if (hour > 18) {
//         greeting = "Good day";
//     }
//     else {
//         greeting = "Good evening";
//     }
// }
// console.log(problemSovled());

// -------- /

// Q  Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.


// function checkPassword(num) {
//     let userPassword = "Farooq123"
//     if (num === userPassword) {
//         return "Correct ! Password"
//     }else{
//         return "Sorry ! Incorrect Password"
//     }
// }
// console.log(checkPassword("Farooq123"));


// -------- /

// Q Declare an empty array using JS literal notation to store
// student names in future.

// let arr = ["Farooq","Umer","maaz"];

// arr .push("ali","Ahmed");

// console.log(arr[3]);

// -------- /

// Q  Declare an empty array using JS object notation to store
// student names in future.


// let studenArr = [
//     {
//         name: "Umer",
//         marks: 98,
//         present: true,
//         subject: {
//             monday: "English",
//             Tuesday : "Science",
//             Wednesday: "chemistry",

//         }
//     },
//     {
//         name: "Farooq",
//         marks: 68,
//         present: true,
//         subject: {
//             monday: "Urdu",
//             Tuesday : "Maths",
//             Wednesday: "Physice",

//         }
//     },
//     {
//         name: "ali",
//         marks: 38,
//         present: false,
//         subject: {
//             monday: "Islamiat",
//             Tuesday: "Sindhi",
//             Wednesday : "Biology",

//         }
//     }
// ]
// let sum = 0 ;
// for (let i = 0; i < studenArr.length; i++) {
//     sum += studenArr[i].marks;
//     var avg = sum / studenArr[i].length
// }
// console.log(sum);
// console.log(avg);

// --------- /

// Q Revers A String;

// function revers(num) {
//     let result = "";
//     for(let i = num.length - 1; i >= 0; i--){
//         result += num[i];
//     }
//     return result;

// }
// console.log(`The Answer is ${revers("Umer")}`);

// --------------/

// Q Control a Factorial Number

// function facNum(input) {
//     let result = 1;
//     for(let i = 1 ; i <= input; i++){
//         result *= i;
//     }
//    return result;

// }
// console.log(facNum(4));


// function gradeSystem(input) {
//     if (input > 100) {
//         return "This is not Eligible"
//     }
//     else if(input >= 90 && input <= 100) {
//         return "A Grade";
//     }
//     else if (input >= 80 && input <= 89) {
//         return "B Grade";
//     }
//     else if (input >= 70 && input <= 79) {
//         return "C Grade";
//     }
//     else if (input >= 60 && input <= 69) {
//         return "D Grade";
//     }
//     else if (input <= 60 && input >= 33) {
//         return "Very Bad";
//     }
//     else if (input < 33) {
//         return "Failed"
//     }
// }
// console.log(gradeSystem(30))

// Q What is leap year ! return True or False:

// function leapYear(num){
//     if (num % 4 === 0) {
//         return true;
//     } {
//         return false;
//     }
// }
// console.log(leapYear(2024));
// console.log(leapYear(2023));

// Q: Calculate and print the sum of the digits of a given number:

// function calculatarNumber(input) {
//     if (input < 0) {
//         throw new Error("Please Enter A Postive Number")
//     }
//     let inputString = input.toString();

//     let inputArray = inputString.split();

//     let sum = 0;
//     inputArray.forEach(num => {
//         sum += parseInt(num)
//     });
//     return sum;
// }
// console.log(calculatarNumber(21));

// let a = 586;
// let b = a.toString()
// console.log(b);

// const person1 = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
// };

// const person2 = { firstName: "Anne", lastName: "Smith" };

// Object.assign(person1, person2);

// console.log(person1, person2);


// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// let a = fruits[0]= "kiwi";

// console.log (fruits, a);


// let add = (name) => {
//     console.log("Hello " + name);
// }
// add("Farooq")
// add("Umer")
// add("Umer,Farooq")


// Nested Function /

// function fullName(firstName, lastName) {
//     function combin() {
//         return firstName + " " + lastName
//     }
//     return combin()
// }

// console.log(fullName("Muhammad", "Farooq"));

// Nseted Arrow Function /

// let fulName = (firstName, lastName) => {
//     let combin = () => {
//         return firstName + " " + lastName
//     }
//     return combin();
// }
// console.log(`My Name Is : ${fulName("Farooq","Memon")}`);


// function mulitiplay(length , width){
//     console.log("Area is : " , length * width);
// }
// mulitiplay(12,3)

// ************/

// let value1 = +prompt("Type value 1");
// let value2 = +prompt("Type value 2");

// function sub(a , b){
//     console.log(a - b );
// }

// // sub(4,3)
// // sub(10,20);
// sub(value1,value2);

// var a = document.querySelector("h1");
// a.innerHTML = "What is your name";
// console.log(a);

// a.style.color ="red";
// a.style.backgroundColor="#000";

// a.addEventListener("dblclick", function colorChange() {
//     a.style.backgroundColor="yellow";
// })


// let arr = [10,20,30,40];

// arr.forEach(()=>{
//     console.log(arr);
// })


// let num = [10, 20, 30, 40];
// let total = 0;
// console.log(total);


// num.forEach(function (num, i) {
//     total += num + i;
// })
// console.log(total,i)


// Write a program to print items of the following array
// using for loop:
// var fruits = ["apple", "banana", "mango", "orange"];

// for (let i = 0;i < fruits.length; i++){
//     console.log(fruits[i]);
// }
// console.log("*************");
// ;
// fruits.forEach((fulName, index) => {
//     console.log(`Element at index ${index} is ${fulName}`);
// })

// let a = [124, 153, 78, 1191, 12];
// let larger = a[0];
// for (let i = 0; i < a.length; i++) {
//     if (a[i] > larger) {
//         larger = a[i];
//     }
// }
// // console.log(`The larger Number is : ${+larger}`);
// console.log("The larger Number is :", larger);


// let launchReady = false;
// let fuelLevel = 17000;

// if (fuelLevel >= 20000 {
//    console.log('Fuel level cleared.');
//    launchReady = true;
// } else {
//    console.log('WARNING: Insufficient fuel!');
//    launchReady = false;
// }

// *************/

// let launchReady = false;
// let crewStatus = true;
// let computerStatus = 'green';

// if (crewStatus && computerStatus === 'green') {
//    console.log('Crew & computer cleared.');
//    launchReady = true;
// } else {
//    console.log('WARNING: Crew or computer not ready!');
//    launchReady = false;
// }

// if (launchReady) {
//    console.log("10, 9, 8, 7, 6, 5, 4, 3, 2, 1...");
//    console.log("Fed parrot...");
//    console.log("Ignition...");
//    console.log("Liftoff!");
// } else {
//    console.log("Launch scrubbed.");
// }


// let launchReady = false;
// let fuelLevel = 17000;

// if (fuelLevel >= 20000) {
//     console.log('Fuel level cleared.');
//     launchReady = true;
// } else {
//     console.log('WARNING: Insufficient fuel!');
//     launchReady = false;
// }

// let launchReady = false;
// let fuelLevel = 27000;

// if (fuelLevel >= 20000) {
//     console.log('Fuel level cleared.');
//     launchReady = true;
// } else {
//     console.log('WARNING: Insufficient fuel!');
//     launchReady = false;
// }

// if (launchReady) {
//     console.log("10, 9, 8...");
//     console.log("Fed parrot...");
//     console.log("6, 5, 4...");
//     console.log("Ignition...");
//     console.log("3, 2, 1...");
//     console.log("Liftoff!");
// } else {
//     console.log("Launch scrubbed.");
// }

// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// a

// for(let i = 1 ; i <= 15 ; i++){
//     console.log(i);
// }

// b

// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }

// c

// for (let i = 0; i <= 20; i += 2){
//     console.log(i);

// }

// d

// for (let i = 1; i <= 20; i += 2){
//     console.log(i);

// }

// e

// for (let i = 2; i <= 20; i += 2){
//     console.log(i+"k");

// }

// ------------String method---------------- //

// Q1 Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name

// let firstName = prompt("Enter Your First Name ");
// let lastName = prompt("Enter Your Last Name ");

// let fulName = firstName + " " + lastName;
// alert(fulName);

// ******************* /

// Q2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser .

// let product = prompt("Enter Your favorite mobile phone model");

// let length = product.length;

// alert(`My favorite mobile phone model is : ${product} length of string : ${length}`);



// ************* ****** /

// Q3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

// let string = "Pakistani";

// let index = string.indexOf("n");

// console.log(`String : ${string} Index of N : ${index}`);

// ******************* /

// Q4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

// let word = "Softwear";

// let length = word.indexOf("f");

// console.log(`String : ${word} , Last Index of f : ${length}`);


// ******************* /

// Q5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

// let character = "Pakistani";

// let you = character.indexOf("i");

// console.log(`String : ${character} , Character of Index ${you} i`);

// ******************* /


// Q6. Repeat Q1 using string concat() method.

// let firstName = prompt("Enter Your First Name ");
// let lastName = prompt("Enter Your Last Name ");

// let fulName = firstName.concat(" "+lastName);

// alert(fulName);

// ******************* /

// Q7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

// let a = "Hyder";
// let b = "Islam";

// let result = a.replace("Hyder","Hyderabad");
// let display = b.replace("Islam","Islamabad");

// console.log(`${a} : Replace City ${result} and ${b} : Replace City ${display}`);


// ******************* /


// var products = [
//     {
//         id: 101,
//         title: "Sony LED 40 inch",
//         variations: [
//             { id: 1, color: "black", price: 50000, quantity: 5 },
//             { id: 2, color: "red", price: 50000, quantity: 1 },
//             { id: 3, color: "silver", price: 55000, quantity: 8 },
//         ],
//         reviews: [
//             {
//                 id: 1,
//                 user: "Ahmad",
//                 rating: 4.0,
//                 title: "Good Product",
//                 comments: "It is a very good product ....",
//                 date: "06-02-2021",
//                 status: true,
//             },
//             {
//                 id: 2,
//                 user: "Zubair",
//                 rating: 4.5,
//                 title: "Very Good Product",
//                 comments: "zubair It is a very good product ....",
//                 date: "05-02-2021",
//                 status: false,
//             },
//             {
//                 id: 3,
//                 user: "Ali",
//                 rating: 5.0,
//                 title: "bad Product",
//                 comments: "ali It is a very good product ....",
//                 date: "04-02-2021",
//                 status: true,
//             },
//         ],
//     },
//     {
//         id: 102,
//         title: "Mobile",
//         variations: [
//             { id: 1, color: "black", price: 50000, quantity: 5 },
//             { id: 2, color: "red", price: 50000, quantity: 1 },
//             { id: 3, color: "silver", price: 55000, quantity: 8 },
//         ],
//         reviews: [
//             {
//                 id: 1,
//                 user: "Ahmad",
//                 rating: 4.0,
//                 title: "Good Product",
//                 comments: "It is a very good product ....",
//                 date: "06-02-2021",
//                 status: true,
//             },
//             {
//                 id: 2,
//                 user: "Zubair",
//                 rating: 4.5,
//                 title: "Very Good Product",
//                 comments: "zubair It is a very good product ....",
//                 date: "05-02-2021",
//                 status: false,
//             },
//             {
//                 id: 3,
//                 user: "Ali",
//                 rating: 5.0,
//                 title: "bad Product",
//                 comments: "ali It is a very good product ....",
//                 date: "04-02-2021",
//                 status: true,
//             },
//         ],
//     },
//     {
//         id: 103,
//         title: "Bike",
//         variations: [
//             { id: 1, color: "black", price: 55000, quantity: 5 },
//             { id: 2, color: "red", price: 50000, quantity: 1 },
//         ],
//         reviews: [
//             {
//                 id: 1,
//                 user: "Ahmad",
//                 rating: 4.0,
//                 title: "Good Product",
//                 comments: "It is a very good product ....",
//                 date: "06-02-2021",
//                 status: true,
//             },
//             {
//                 id: 2,
//                 user: "Zubair",
//                 rating: 3.0,
//                 title: "Very Good Product",
//                 comments: "zubair It is a very good product ....",
//                 date: "05-02-2021",
//                 status: false,
//             },
//         ],
//     },
// ];

// ************ //

// Q1 Use map to get an array of product titles
// Sample Output: ["Sony LED 40 inch", "Mobile", "Bike"]

// let arrTitle = products.map(m => m.title)
// console.log(arrTitle);

// Q2 Use filter to get all products that have variations in black color
// Sample Output: [ { id: 101, title: "Sony LED 40 inch", ... }, { id: 102, title: "Mobile", ... }, { id: 103, title: "Bike", ... } ]

// let color = products.filter(m => m.variations.filter(n => n.color === "silver").length)
// console.log(color);

// Q3 Use reduce to calculate the total stock of all products
// Sample Output: 20

// let totalStock = products.reduce((acc, current) => acc + current.variations.reduce((ac, crt) => ac + crt.quantity ,0),0)
// console.log(totalStock);

// Q4 Use map and reduce to get the average rating of each product
// Sample Output: [ { title: "Sony LED 40 inch", averageRating: 4.5 }, { title: "Mobile", averageRating: 4.0 }, { title: "Bike", averageRating: 4.0 } ]

// let rating = products.map(m => {
//     const totalRating = m.reviews.reduce((acc, current) => acc + current.rating, 0);
//     const result = totalRating / m.reviews.length;
//     return{
//         title : m.title,
//         averageRating: result,
//     }

// })
// console.log(rating);

// Q5 Use filter to get products that have at least one review with a rating of 5.0
// Sample Output: [ { id: 101, title: "Sony LED 40 inch", ... } ]

// let reviews = products.filter(m => m.reviews.filter(n => n.rating == 5.0).length)
// console.log(reviews);

// Q6 Use map to format variations with product name
// Sample Output: [ { title: "Sony LED 40 inch", variations: [ { color: "black", price: 50000, quantity: 5 }, ... ] } ]

// let productName = products.map(m => m.variations.map(n => {
//     return {
//         title: m.title,
//         color: n.color,
//         price: n.price,
//         quantity: n.quantity
//     }
// }))
// console.log(productName);

// Q7 Use reduce to get the total revenue if all items were sold
// 850000

// let revenue = products.reduce((acc, c) => {
//     const totalRevenue = c.variations.reduce((a, u) => {
//         return a + (u.price * u.quantity)
//     }, 0)
//     return acc + totalRevenue;
// }, 0)
// console.log(revenue);

// Q8 Use filter to get all products that have more than 5 items in any variation
// Sample Output: [ { id: 101, title: "Sony LED 40 inch", ... } ]

// let totalTitle = products.filter(m => m.variations.filter(n => n.quantity > 5).length)

// console.log(totalTitle);

// Q9 Use map to get a summary of each product with total variations and total reviews
// Sample Output: [ { title: "Sony LED 40 inch", totalVariations: 3, totalReviews: 3 }, ... ]

// let summary = products.map(m => {
//     return {
//         title: m.title,
//         totalVariations: m.variations.length,
//         totalReviews: m.reviews.length,
//     }
// })
// console.log(summary);

// Q10 Use reduce to find the product with the highest total stock
// Sample Output: { title: "Sony LED 40 inch", totalStock: 14}

// let result = products.reduce((acc, current) => {
//     let totalStock = current.variations.reduce((a, c) => a + c.quantity, 0)
//     if (!acc || totalStock > acc.totalStock) {
//         return { title: current.title, totalStock };
//     }
//     return acc
// }, null)

// console.log(result);

// **************** //


