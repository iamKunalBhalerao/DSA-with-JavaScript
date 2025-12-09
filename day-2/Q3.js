// // Q3. Bijili Bill Calculation by units

let units = Number(prompt("Enter Your Electricity Units."));

let amount = 0;

if (units > 400) {
  amount = (units - 400) * 13;
  units = 400;
}
if (units > 200 && units <= 400) {
  amount += (units - 200) * 8;
  units = 200;
}
if (units > 100 && units <= 200) {
  amount += (units - 100) * 6;
  units = 100;
}
amount += units * 4;

console.log(`Your Electricity Bill is : ${amount}`);
