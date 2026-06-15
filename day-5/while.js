// while loop

// start;
// while (end) {
//   // code
//   change;
// }

// let i = 1;

// while (i <= 30) {
//   console.log(i);
//   i++;
// }

// example
// let input = prompt("Enter anything, (exit for close)");

// while (input !== "exit") {
//   input = prompt("Enter anything, (exit for close)");
// }

const pr = prompt("Enter a number: ");

if (pr === null) {
  console.log("Input cancelled by the user.");
} else {
  let n = Number(pr);

  if (isNaN(n)) {
    console.log("Invalid input. Please enter a number.");
  } else {
    if (n > 0) {
      let rev = 0;
      while (n > 0) {
        let rem = n % 10;
        rev = rev * 10 + rem;
        n = Math.floor(n / 10);
      }
      console.log(rev);
    } else {
      console.log("Number should be positive and greater than zero.");
    }
  }
}
