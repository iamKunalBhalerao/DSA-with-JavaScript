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
      let sum = 0;
      let copy = n;
      while (n > 0) {
        let rem = n % 10;
        let fact = 1;

        for (let i = 1; i <= rem; i++) {
          fact *= i;
        }
        sum += fact;
        n = Math.floor(n / 10);
      }
      if (sum === copy) {
        console.log(`${copy} is a strong number.`);
      } else {
        console.log(`${copy} is not a strong number.`);
      }
    } else {
      console.log("Number should be positive and greater than zero.");
    }
  }
}
