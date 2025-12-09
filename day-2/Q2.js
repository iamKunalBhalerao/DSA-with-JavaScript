// // Q2. Shop Discount Calculation

let bill = Number(prompt("Enter Your Bill Amount."));
let discount = 0;

if (bill > 0 && bill <= 5000) {
  discount = 0;
} else if (bill > 5000 && bill <= 7000) {
  discount = 5;
} else if (bill > 7000 && bill <= 9000) {
  discount = 10;
} else if (bill > 9000) {
  discount = 20;
} else {
  console.log("Wrong Input!");
}

console.log(
  `Your final bill with ${discount}%. Discount is = ${
    bill - Math.floor((discount * bill) / 100)
  }`
);
