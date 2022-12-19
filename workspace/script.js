//Guvi Task
//day 3
//1. for given JSON iterate all the loops:(for, for-in, for-of, forEach)

// var kes = [{
//     "employee_id": "12345",
//     "name": "Kesavan",
//     "department": "Bsc",
//     "mail": "kesavan@abc.com"
// },
// {
//     "employee_id": "12346",
//     "name": "Guvi",
//     "department": "BA",
//     "mail": "kesavan@abc.com"
// }];

//for loop:

// for (var i = 0; i <= kes.length; i++) {
//     var b = kes[i];
//     console.log(b.employee_id);
//     console.log(b.name);
//     console.log(b.department);
//     console.log(b.mail);
// }

//for-in loop

// for (var key in kes) {
//     console.log(key);
//     console.log(value.employee_id);
//     console.log(kes[key].name);
//     console.log(kes[key].department);
//     console.log(kes[key].mail);
// }

//for-of loop

// for (var value of kes) {
//     console.log(value);
//     console.log(value.employee_id);
//     console.log(value.name);
//     console.log(value.department);
//     console.log(value.mail);
// }

//for-Each

// var b = kes.forEach(a => console.log(a.name + "'s"));

//2. creating your own resume in JSON;

// var resume = {
//     "name" : "Kesavan",
//     "age" : 23,
//     "Gender": "male",
//     "Qualification": "B.sc",
//     "yob": 2019
// }

//3. we can use the below comments to know the properties of the window, document, screen;
// console.dir(window);
// console.dir(document);
// console.dir(screen);

//day 4
//1. how to compare 2 JSON objects have same properties without order:

// var obj1 = { "name": "Kesavan", "Age": 23 };
// var obj2 = { "name": "Aaru", "Age": 22 };

// console.log(JSON.stringify(obj1) === JSON.stringify(obj2));

// var obj1 = { name: "Person 1", age: 5 }
// var obj2 = { name: "Person 1", age: 5 }
// var guvi = JSON.stringify(obj1) === JSON.stringify(obj2)
// console.log(guvi);

//2 and 3 pending;

//day 5:
//1. print odd numbers in an Array;

//normal function
// var arr = [1, 2, 3, 4, 5, 6, 7, 8];
// function foo() {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0) {
//             console.log(arr[i]);
//         }
//     }
// }
// foo();

//Annonymous function:
// var arr = [1, 2, 3, 4, 5, 6, 7, 8];
// var anna = function (arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0) {
//             console.log(arr[i]);
//         }
//     }
// }
// anna(arr);

//IIFE(Immidieately Invoked Function Expression)
// var arr = [1, 2, 3, 4, 5, 6, 7, 8];
// (function foo(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0) {
//             console.log(arr[i]);
//         }
//     }
// })(arr);

//Arrow function:
// var arr = [1, 2, 3, 4, 5, 6, 7, 8];
// var rob = arr.filter(a => a % 2 === 0)
// console.log(rob);

//2. convert all the strings to title caps in a string array;

//normal function
// var kes = "kesavan kes";
// var b = "";
// function foo() {
//     for (var i = 0; i < kes.length; i++) {
//         if (kes[i] !== " ") {
//             b = b + kes[i].toUpperCase() + " ";
//         }
//     }
// }
// foo(kes);
// console.log(b);

//Annonymous Function
// var kes = "kesavan kes";
// var b = "";
// var cat = function foo() {
//     for (var i = 0; i < kes.length; i++) {
//         if (kes[i] !== " ") {
//             b = b + kes[i].toUpperCase() + " ";
//         }
//     }
// }
// cat(kes);
// console.log(b);

//IIFE (Immidiaetely Invoked Function Expression)
// var kes = "kesavan kes";
// (function foo(kes) {
//     var b = "";
//     for (var i = 0; i < kes.length; i++) {
//         if (kes[i] !== " ") {
//             b = b + kes[i].toUpperCase() + " ";
//         }
//     }
//     console.log(b);
// })(kes);

//Arrow Function
// var kes = ["kesavan kes"];
// var varai = kes.map((a) => a.toUpperCase());
// console.log(varai);

//3. sum all numbers in a array

//normal function:
// var kes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function foo(kes) {
//     var b = kes.reduce((a, b) => a + b);
//     return b;
// }
// console.log(foo(kes));

//Annonymous Function:
// var kes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var anna = function (kes) {
//     var b = kes.reduce((a, b) => a + b);
//     return b;
// }
// console.log(anna(kes));

//IIFE Function:
// var kes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// (function foo(kes) {
//     var b = kes.reduce((a, b) => a + b);
//     console.log(b);
// })(kes);

//Arrow Function:
// var kes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var anna = kes.reduce((a, b) => a + b);
// console.log(anna);

//4. return all prime numbers in an array:
// var arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 43, 44, 67, 68];

// var anna = arr.filter((a) => {
//     for (var i = 2; i <= Math.sqrt(a); i++) {
//         if (a % 2 === 0) {
//             return false
//         }
//     }
//     return true
// })
// console.log(anna);
// [1, 2, 3, 5, 7, 9, 11, 13, 43, 67]
//2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97.

//5. Return all the palindrome in the array;

// var arr = ["civic", "Racecar", "kesavan", "akka", "Anna", "Amul"];

// function foo(arr) {
//     var result = [];
//     for (var i = 0; i < arr.length; i++) {
//         let ispal = arr[i].toLowerCase().split("").reverse().join("");
//         let isntpal = arr[i].toLowerCase();
//         if (ispal === isntpal) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }
// console.log(foo(arr));

//6. Return median of 2 sorted arrays of the same size;

// const median = arr => {
//     const mid = Math.floor(arr.length / 2),
//         nums = [...arr].sort((a, b) => a - b);
//     return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
// };
// console.log(median([5, 6, 50, 1, -5]));
// console.log(median([1, 2, 3, 4, 5, 6]));
