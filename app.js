// Q1:

// let a = 3;
// let b = 4;

// let c = a + b;
// console.log( `The Sum is : ${c}`);

// ******* //

// Q2:

// function num(input) {
//     if (input > 0) {
//         return `Positive`
//     } else if (input < 0) {
//         return `Nagetive`
//     } else  {
//         return `Zero`
//     }
// }
// console.log(num(0));

// ******* //

// Q3:

// let x = 6;
// let y = 5;

// let c = x * y;

// console.log(`The Multiply is : ${c}`);

// ******* //

// Q4:


// function check(num) {
//     if (num % 2 === 0) {
//         return "Even";
//     }else {
//         return "Odd";
//     }
// }
// console.log(check(-2));

// ******* //

// Q5:

// let a = 10;
// let b = 25;

// function twoNumber(a, b) {
//     if (a > b) {
//         return a
//     } else if (b > a) {
//         return b
//     } else {
//         return "Both are equal "
//     }
// }
// console.log(twoNumber(100, 23));

// ******* //

// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(30, 50));

// ******* //

// Mester Class Question And Answer with Sir Amir :-

// ******* //

// console.log("Hello World")

// let a = " ";
// a = Math.max(110, 120, 230, 240, -870, -1008);
// console.log(a);

// *********** //

// Q Reveres String :-

// var str = "My Name is Muhammad Farooq";

// const reverseString = str.split("").reverse().join(" ");

// console.log(reverseString);

// *********** //

// Q Check Karo ki yea Array Hai Yea nhi :-

// function checkArray(element) {
//     return Array.isArray(element)
// }
// console.log(checkArray([ 10, 20, 30, 40 ]));

// *********** //

// Q How to empty array in JavaScript :-

// let array = [23, 56, 67, 78, 37];

// array.length = 0;

// console.log(array);

// *********** //

// Q How to would you check if a number is an integer :-

// var str = prompt("Enter You Check A number")

// if (str % 1 == 0) {
//     alert`integer`;
// } else {
//     alert`Not !`;
// }

// *********** //

// Q Make a Copy Array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function copy(arr) {
//     return arr.concat(arr)
// }
// console.log(copy([1, 2, 3, 4, 5, 6]));

// *********** //

// var a = 12;
// console.log(a);

// function abcd() {
//     for (let i = 0; i < 12; i++) {
//         console.log(i);
//     }
//     console.log(i);
// }
// abcd()

// **************************Loops**************************** //

// Q1 Print numbers 1 to 10 using a for loop. Done

// Q2 Print even numbers between 1 and 20 using a while loop.

// Q3 Print the multiplication table of 5 using a for loop.

// Q4 Calculate the sum of numbers from 1 to 100 using a loop.

// Q5 Print all elements of an array using a for loop.
//  Example: let fruits = ["apple", "banana", "cherry"];

// Q6 Reverse the elements of an array using a loop.
//  Example: [1, 2, 3, 4] → [4, 3, 2, 1]

// Ans 1:
// for (let i = 1; i < 11; i++) {
//     console.log(i);
// }

// Ans 2:

// let evenNum = 0;

// while (evenNum < 20) {
//     evenNum += 2
//     console.log(evenNum);
// }

// Ans 3:

// for (let i = 1; i <= 10; i++) {
//     console.log(`5 x ${i}  = ${5 * i}`);

// }

// Ans 4:

// let number = 0;

// for (let i = 0; i <= 100; i++) {
//     number += i;
// }
// console.log(number);

// Ans 5:

// let fruits = ["apple", "banana", "cherry", 'farooq'];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);

// }

// Ans 6:

// let arr = [1, 2, 3, 4];
// let result = [];

// for (let i = arr.length - 1; i >= 0; i--) {
//     result.push(arr[i])
// }
// console.log(result);

// **************************Loops**************************** //
var ans = new Promise((rev, rej) => {
    if (true) {
        return rev();
    } else {
        return rej();
    }
});

ans
    .then(function () {
        console.log("ok");
    })
    .catch(function () {
        console.log("not ok");
    })
