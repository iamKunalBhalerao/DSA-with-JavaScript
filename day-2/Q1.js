// // Q1. Valid Voter condition check

let age = Number(prompt("Enter your age"));

if (isNaN(age)) {
  console.log("Invalid Input!");
} else if (age >= 18) {
  console.log("You are a VALID Voter. You can Vote.");
} else {
  console.log("You are not a VALID Voter. You cannot Vote!");
}
