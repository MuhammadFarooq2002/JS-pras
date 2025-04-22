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


let studenArr = [
    {
        name: "Umer",
        marks: 98,
        present: true,
        subject: {
            monday: "English",
            Tuesday : "Science",
            Wednesday: "chemistry",

        }
    },
    {
        name: "Farooq",
        marks: 68,
        present: true,
        subject: {
            monday: "Urdu",
            Tuesday : "Maths",
            Wednesday: "Physice",

        }
    },
    {
        name: "ali",
        marks: 38,
        present: false,
        subject: {
            monday: "Islamiat",
            Tuesday: "Sindhi",
            Wednesday : "Biology",

        }
    }
]
let sum = 0 ;
for (let i = 0; i < studenArr.length; i++) {
    sum += studenArr[i].marks;
    var avg = sum / studenArr[i].length
}
console.log(sum);
console.log(avg);
