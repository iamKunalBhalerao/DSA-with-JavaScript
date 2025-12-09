// Area of triangle using heron's formula
// sqrt of s * (s - a) * (s - b) * (s - c) 
// s is a semiparameter = (a + b + c) / 2

let a = 5;
let b = 4;
let c = 3;

let s = (a + b + c) / 2; // Semiparameter
console.log(s)

let ans = Math.sqrt(s * (s - a) * (s - b) * (s - c))

console.log(`Area of triangle using heron's formua is: ${ans}`)