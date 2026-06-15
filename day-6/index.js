const prompt = require("prompt-sync")();

const n = Number(prompt("Enter anything: "));

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(j + " ");
//   }

//   console.log();
// }

// for (let i = 1; i <= n; i++ ) {
//     let ascii = 65;
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write(String.fromCharCode(ascii) + " ");
//         ascii++;
//     }
//     console.log();
// }

// for (let i = n; i >= 1; i--) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i; j++) {
//     process.stdout.write(" ");
//   }
//   for (let k = 1; k <= i; k++) {
//     process.stdout.write("*");
//   }
//   console.log();
//   }

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     if (i == j || i + j == n + 1) {
//       process.stdout.write("*");
//     } else process.stdout.write(" ");
//   }
//   console.log();
// }

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i; j++) {
//     process.stdout.write(" ");
//   }

//   for (let k = 1; k <= 2 * i - 1; k++) {
//     process.stdout.write("*");
//   }

//   console.log();
// }

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= 2 * n - 1; j++) {
    if (i == j || i + j == 2 * n) {
      process.stdout.write("*");
    } else process.stdout.write(" ");
  }
  console.log();
}
