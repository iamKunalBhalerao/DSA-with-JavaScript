// // INR Denomination

let amount = Number(prompt("Enter Your Amount : "));

console.log("Your Amount is : " + amount);

if (amount >= 500) {
  console.log("500 ke Notes : " + Math.trunc(amount / 500));
  amount = amount % 500;
}
if (amount >= 200) {
  console.log("200 ke Notes : " + Math.trunc(amount / 200));
  amount = amount % 200;
}
if (amount >= 100) {
  console.log("100 ke Notes : " + Math.trunc(amount / 100));
  amount = amount % 100;
}
if (amount >= 50) {
  console.log("50 ke Notes : " + Math.trunc(amount / 50));
  amount = amount % 50;
}
if (amount >= 20) {
  console.log("20 ke Notes : " + Math.trunc(amount / 20));
  amount = amount % 20;
}
if (amount >= 10) {
  console.log("10 ke Notes : " + Math.trunc(amount / 10));
  amount = amount % 10;
}
if (amount >= 5) {
  console.log("5 ke Coins : " + Math.trunc(amount / 5));
  amount = amount % 5;
}
if (amount >= 2) {
  console.log("2 ke Coins : " + Math.trunc(amount / 2));
  amount = amount % 2;
}
if (amount === 1) {
  console.log("1 ke Coins : " + amount);
}
