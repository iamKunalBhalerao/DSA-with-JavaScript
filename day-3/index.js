// Loops in DSA
// For Loop

// Print Hello world 20 times
// for (let i = 1; i <= 20; i++) {
//     // console.log("Hello World")
// }

// Print 1 to 22
// for (let i = 1; i<23; i++) {
//     // console.log(i);
// }

// Print 23 to 54
// for (let i = 23; i<=54; i++) {
//     // console.log(i)
// }

// Print 200 - 100
// for(let i = 200; i>=100; i--) {
//     // console.log(i)
// }

// Print 156 - 23
// for(let i = 156; i >= 23; i--) {
//     // console.log(i)
// }

// Sum of Natural Numbers
/*
const pr = prompt("Enter Natural Number.");
if (pr !== null) {
  const n = Number(pr);

  if (isNaN(n)) {
    console.log("Invalid Input!");
  } else {
    if (n > 0) {
      console.log("is Positive Number");

      let sum = 0;
      for (let i = 1; i <= n; i++) {
        sum = sum + i;
      }

      console.log(sum);
    } else {
      console.log("Negative Number!");
    }
  }
} else {
  console.log("Input should not null!");
}
*/

// Factorial of Number
/*
const pr = prompt("Enter Number");

if (pr !== null) {
  const n = Number(pr);

  if (isNaN(n)) {
      if (n > 0) {
        console.log("is Positive.");
    
        let fact = 1;
        for (let i = 1; i <= n; i++) {
          fact = fact * i;
        }
        console.log(fact);
      } else {
        console.log("Negative or zero!");
      }
  } else {
    console.log("Invalid Input!")
  }

}
*/

// Factors of Number
/*
const pr = prompt("Enter Number");

if (pr !== null) {
  const n = Number(pr);
  if (isNaN(n)) {
    console.log("Invalid Input!");
  } else {
    if (n > 0) {
      console.log("is Positive.");

      // Core Calculation
      for (let i = 1; i <= Math.floor(n / 2); i++) {
        if (n % i == 0) {
          console.log(i);
        }
      }
      console.log(n);
    } else {
      console.log("Negative or zero!");
    }
  }
}
*/

// Prime Number

const pr = prompt("Enter Number");

if (pr !== null) {
  const n = Number(pr);
  if (isNaN(n)) {
    console.log("Invalid Input!");
  } else {
    if (n > 0) {
      console.log("is Positive.");

      // Core Calculation

      let isPrime = true;
      for (let i = 2; i <= Math.floor(n / 2); i++) {
        if (n % i == 0) {
          isPrime = false;
          break;
        }
      }
      console.log(isPrime);

    } else {
      console.log("Negative or zero!");
    }
  }
}
