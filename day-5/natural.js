// Write a program to find the sum of first n natural numbers.
// const pr = prompt("Enter a number: ");

// if (pr === null) {
//   console.log("Input cancelled by the user.");
// } else {
//   const n = Number(pr);

//   if (isNaN(n)) {
//     console.log("Invalid input. Please enter a number.");
//   } else {
//     if (n > 0) {
//       let sum = 0;
//       for (let i = 1; i <= n; i++) {
//         sum = sum + i;
//       }
//       console.log(`The sum of the first ${n} natural numbers is: ${sum}`);
//     } else {
//       console.log("Number should be positive and greater than zero.");
//     }
//   }
// }

// Short and clean

const input = prompt("Enter a number: ");
const n = Number(input);

if (!input || isNaN(n) || n <= 0) {
  console.log("Please enter a valid positive number.");
} else {
  let sum = 0;
  for (let i = 1; i <= n; i++) sum += i;
  console.log(`The sum of the first ${n} natural numbers is: ${sum}`);
}
