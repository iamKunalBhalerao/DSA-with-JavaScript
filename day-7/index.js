const prompt = require("prompt-sync")();

// let arr = [10, 20, 30, 40, 50];

// for (let i = 0; i < arr.length; i++) {
//   arr[i] = Number(prompt(`Enter ${i + 1} number:`));
// }

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum = sum + arr[i];
//   // sum += arr[i];
// }
// console.log(`Sum of all numbers in the array is: ${sum}`);

// Find the minimum number in the array
// let arr = [23, 24, 56, 78, 100, 2, 34, 56, 78, 89];
// let min = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (min > arr[i]) {
//     min = arr[i];
//   }
// }
// console.log(`Minimum number in the array is: ${min}`);

// Find the maximum number in the array
// let arr = [23, 24, 56, 78, 100, 2, 34, 56, 78, 89];
// let max = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
// }
// console.log(`Maximum number in the array is: ${max}`);

// Find the second maximum number in the array
// let arr = [23, 24, 56, 78, 100, 2, 34, 56, 78, 89];
// let max1 = Math.max(arr[0], arr[1]);
// let max2 = Math.min(arr[0], arr[1]);

// for (let i = 2; i < arr.length; i++) {
//   if (arr[i] > max1) {
//     max2 = max1;
//     max1 = arr[i];
//   } else if (arr[i] > max2 && arr[i] != max1) {
//     max2 = arr[i];
//   }
// }
// console.log(`Maximum number in the array is: ${max1}`);
// console.log(`Second maximum number in the array is: ${max2}`);

// Find the second minimum number in the array
// let arr = [23, 24, 56, 78, 100, 2, 34, 2, 2, 56, 78, 89];
// let max1 = Math.min(arr[0], arr[1]);
// let max2 = Math.max(arr[0], arr[1]);

// for (let i = 2; i < arr.length; i++) {
//   if (arr[i] < max1) {
//     max2 = max1;
//     max1 = arr[i];
//   } else if (arr[i] < max2 && arr[i] != max1) {
//     max2 = arr[i];
//   }
// }
// console.log(`Minimum number in the array is: ${max1}`);
// console.log(`Second minimum number in the array is: ${max2}`);

// Reverse the array using a temporary array
// let arr = [10, 20, 30, 40, 50];
// let temp = new Array(arr.length);
// let j = 0;
// for (let i = arr.length - 1; i >= 0; i--) {
//   temp[j] = arr[i];
//   j++;
// }
// console.log(`Original array is: ${arr}`);
// console.log(`Reversed array is: ${temp}`);

// Reverse the array without using a temporary array
// let arr = [10, 20, 30, 40, 50];
// let i = 0;
// let j = arr.length - 1;
// while (i != j) {
//   temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
//   i++;
//   j--;
// }
// console.log(`Original array is: ${arr}`);

// let arr = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1];
// let arr = [-1, 2, 3, -5, 6, 9, -10, -44, 4, -88, 77];
// let i = 0;
// let j = 0;
// while (i < arr.length) {
//   if (arr[i] < 0) {
//     temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     j++;
//   }
//   i++;
// }
// console.log(`Sorted array is: ${arr}`);
