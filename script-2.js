
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

// Q8 Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.

// let message = "Ali and Sami are best friends. They play cricket and football together";

// let result = message.replace("Ali and Sami are best friends. They play cricket and football together", "Ali and Sami are best friends & They play cricket and football together");

// console.log(result);


// ******************* /

// Q9 Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

// let stringNumber = "657";

// let converts = Number(stringNumber)

// console.log(converts);


// console.log(`${typeof stringNumber} : ${stringNumber}`);


// ******************* /

// Sum two number :

let user = +prompt("Enter Your Number")

function arr(num) {
    if (num <= 0) {
        throw new Error("Enter a Poaitive Number")
    }
    let arrString = num.toString()
    let arrNumber = arrString.split("")
    let sum = 0;
    arrNumber.forEach(number => {
        sum += parseInt(number)
    });
    return sum
}
console.log( arr(user));


