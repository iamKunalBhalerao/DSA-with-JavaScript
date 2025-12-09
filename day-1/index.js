// sum of two integers

// Concatination
let n1 = 10;
let n2 = "20";
// console.log(n1 + n2); // JS will concatinate both the variables and final answer will be 1020

// Type coercion
let a = 12;
let b = "13"; // This string will be convert into number only if their is -, * and / is used.
// console.log(a - b);

// Getting inputs from User
// Taking inputs from user using prompt() method and converting it into number using Number() method.
// let num1 = Number(prompt("Enter the first number"));
// let num2 = Number(prompt("Enter the second number"));
// console.log(num1 + num2);

// Swap two numbers using extra variable
let var1 = 10;
let var2 = 20;
// console.log(var1, var2); // 10 20
let var3;
var3 = var1; // var3 = 10, var1 = 10.
var1 = var2; // var1 = 20, var2 = 20.
var2 = var3; // var2 = 10.
// console.log(var1, var2); // var1 = 20, var2 = 10.

// Swap two numbers without using extra variable.
let x = 10;
let y = 20;
// console.log(x, y); // x = 10, y = 20

// x = x + y; // x = 30, y = 20
// y = x - y; // y = 10, x = 30
// x = x - y; // x = 20, y = 10

// console.log(x, y); // x = 20, y = 10

// Swap two numbers using [] method.
// [x, y] = [y, x]
// console.log(x, y); // x = 20, y = 10
