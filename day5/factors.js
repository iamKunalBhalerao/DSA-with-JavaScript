// const input = prompt("Enter a number:");

// if (input === null) {
//   console.log("Input cancelled by the user.");
// } else {
//   const n = Number(input);

//   if (isNaN(n)) {
//     console.log("Invalid input. Please enter a number.");
//   } else {
//     if (n > 0) {
//       for (let i = 1; i <= Math.floor(n / 2); i++) {
//         if (n % i === 0) {
//           console.log(i);
//         }
//       }
//       console.log(n); // n is also a factor of itself
//     } else {
//       console.log("Number should be positive and greater than zero.");
//     }
//   }
// }

// Short and clean

const pr = prompt("Enter a number: ");
const n = Number(pr);

if (!pr || isNaN(n) || n <= 0) {
  console.log("Please enter a valid positive number.");
} else {
  for (let i = 1; i <= Math.floor(n / 2); i++) n % i === 0 && console.log(i);
  console.log(n); // n is also a factor of itself
}
