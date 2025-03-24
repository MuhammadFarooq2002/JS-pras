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


var students = [
    {
        name: "farooq",
        idNumber: 278268,
        subject: "Maths",
        marks: 25,
        present: true,
    },
    {
        name: "ali",
        idNumber: 245668,
        subject: "Urdu",
        marks: 25,
        present: false,
    },
    {
        name: "umer",
        idNumber: 277668,
        subject: "English",
        marks: 25,
        present: true,
    },
    {
        name: "maaz",
        idNumber: 273548,
        subject: "Science",
        marks: 215,
        present: false,
    }
]
// console.log(students[0].name)
// console.log(students[0].idNumber)
// console.log(students[0].subject)
// console.log(students[0].marks)
// console.log(students[0].present)

var sum = 0
for (var i = 0; i < students.length; i++) {
    sum = sum + students[i].marks
}
// console.log(sum)
var avg = sum / students.length
console.log("Avg is ", avg,"=","Sum is",sum)