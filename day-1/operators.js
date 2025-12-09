// // Operators
// // Arithmatic operators + - * / %
// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);

// // Math.floor() method to remove numbers of decimal.
// console.log(Math.floor(7/2))

// // Mod % use cases
// console.log(7%2); // gives us remainder

// // Relational Operators > < >= <= == != !==
// console.log(10 > 5); // true
// console.log(10 < 5); // false
// console.log(10 >= 5); // true
// console.log(10 >= 10); // true
// console.log(10 <= 5); // false
// console.log(10 <= 10); // true
// console.log(10 !== 5); // true
// console.log(10 === 5); // false - === had a strict type checking
// console.log(10 == "10"); // true - because its not check type in ==.
// console.log(10 === 10); // true

// // Logical operator - && ||
// console.log(10 > 9 && 5 < 10); // true - for using && operator all the conditions should be true
// console.log(10 > 9 || 5 < 10); // true - In || OR operator if any one condition is true, the final ans is true.

// // Unary operator ++ --
// // Q.
// let i = 11
// i = i++ + ++i;
// console.log(i); // 24

// let a = 11;
// let b = 22;
// let c = a + b + a++ + b++ + ++a + ++b; // 103
// console.log("a=" + a); // 13
// console.log("b=" + b); // 24
// console.log("c=" + c); // 103

// // Some amazing concepts

// let a = true; // true will assume as 1 || same with false will assume as 0
// a++; // 2
// console.log(a);

// let a = 12++;
// console.log(a); // Error - you cannot change values assign to variable directly from scrach it will assume as constat value
