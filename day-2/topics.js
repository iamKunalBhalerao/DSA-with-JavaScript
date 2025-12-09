// // Ternary Operator ? :

// console.log(112>13 ? "okay" : "gadbad")

// // Nested Ternary
let num = -12;
let ans = num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
// console.log(ans);

// // Switch Case

let dayInWeek = 5;

switch (dayInWeek) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  case 4:
    console.log("Thirsday");
    break;

  case 5:
    console.log("Friday");
    break;

  case 6:
    console.log("Saturday");
    break;

  case 7:
    console.log("Sunday");
    break;

  default:
    console.log("Invalis Day in week");
}

// // Another way of ding switch case

let a = 1;

switch (a) {
  case 1:
  case 2:
  case 3:
    console.log("Monday");
    break;
  case 4:
  case 5:
  case 6:
    console.log("Sunday");
    break;

  default:
    "Invalid";
}

// // comparison in swich case

switch (true) {
  case 12 > 13:
    console.log("True");
    break;

  case 23 > 12:
    console.log("True");
    break;

  default:
    console.log("false");
}
