// Write a program to find the factorial of a number using a loop.
// const pr = prompt("Enter a number: ");

// if (pr === null) {
//   console.log("Input cancelled by the user.");
// } else {
//   const n = Number(pr);

//   if (isNaN(n)) {
//     console.log("Invalid input. Please enter a number.");
//   } else {
//     if (n > 0) {
//       let factorial = 1;
//       for (let i = 1; i <= n; i++) {
//         factorial = factorial * i;
//       }
//       console.log(`The factorial of ${n} is: ${factorial}`);
//     } else {
//       console.log("Number should be positive and greater than zero.");
//     }
//   }
// }

// Optimized Version (Short + Clean)

const input = prompt("Enter a number: ");
const n = Number(input);

if (!input || isNaN(n) || n <= 0) {
  console.log("Please enter a valid positive number.");
} else {
  let fact = 1;
  for (let i = 1; i <= n; i++) fact *= i;
  console.log(`The factorial of ${n} is: ${fact}`);
}
