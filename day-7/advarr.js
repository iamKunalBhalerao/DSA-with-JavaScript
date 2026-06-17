const prompt = require("prompt-sync")();

// let arr = [1, 2, 3, 4, 5];
// let copy = arr[arr.length - 1];
// for (let i = arr.length - 1; i > 0; i--) {
//   arr[i] = arr[i - 1];
// }
// arr[0] = copy;
// console.log(arr);

// let arr = [1, 2, 3, 4, 5];
// let temp = new Array(arr.length);
// let k = prompt("Enter a number to rotate: ");
// k = k % arr.length;
// for (let i = 0; i < arr.length; i++) {
//   temp[i] = arr[(i + k) % arr.length];
// }
// console.log(temp);

// let arr = [1, 2, 3, 4, 5];
// let k = prompt("Enter a number to rotate: ");
// k = k % arr.length;

// reverse(0, arr.length - 1);
// reverse(0, k - 1);
// reverse(k, arr.length - 1);

// console.log(arr);

// function reverse(i, j) {
//   while (i < j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
//   }
// }

// let nums = [0, 1, 1, 2, 2, 3];
// let j = 1;
// function removeDuplicates(nums) {
//   for (let i = 0; i < nums.length - 1; i++) {
//     if (nums[i] !== nums[i + 1]) {
//       nums[j] = nums[i + 1];
//       j++;
//     }
//   }
//   return j;
// }
// console.log(removeDuplicates(nums));

// let arr1 = [2, 5, 6];
// let arr2 = [1, 3, 4, 7];
// let merge = new Array(arr1.length + arr2.length);
// let i = 0,
//   j = 0,
//   k = 0;

// while (i < arr1.length && j < arr2.length) {
//   if (arr1[i] < arr2[j]) {
//     merge[k++] = arr1[i++];
//   } else {
//     merge[k++] = arr2[j++];
//   }
// }

// while (i < arr1.length) {
//   merge[k++] = arr1[i++];
// }

// while (j < arr2.length) {
//   merge[k++] = arr2[j++];
// }

// console.log(merge);

// let arr1 = [2, 4, 6, 8];
// let arr2 = [1, 3, 5, 7, 9];
// let merge = new Array(arr1.length + arr2.length);
// let i = 0,
//   j = 0,
//   k = 0;
// while (i < arr1.length && j < arr2.length) {
//   if (arr1[i] < arr2[j]) {
//     merge[k++] = arr1[i++];
//   } else {
//     merge[k++] = arr2[j++];
//   }
// }
// while (i < arr1.length) {
//   merge[k++] = arr1[i++];
// }
// while (j < arr2.length) {
//   merge[k++] = arr2[j++];
// }
// console.log(merge);

// let nums1 = [2, 4, 6];
// let nums2 = [1, 3, 5];
// let m = nums1.length;
// let n = nums2.length;

// const ans = mergeArrays(nums1, m, nums2, n);

// function mergeArrays(nums1, m, nums2, n) {
//   let i = m - 1;

//   let j = n - 1;
//   let k = m + n - 1;

//   while (i >= 0 && j >= 0) {
//     if (nums1[i] > nums2[j]) {
//       nums1[k] = nums1[i];
//       i -= 1;
//     } else {
//       nums1[k] = nums2[j];
//       j -= 1;
//     }
//     k -= 1;
//   }

//   while (j >= 0) {
//     nums1[k] = nums2[j];
//     j -= 1;
//     k -= 1;
//   }
//   return nums1;
// }

// find maximum profit from stock buy or sell
// let arr = [7, 1, 5, 3, 6, 2];
// let min = arr[0];
// let maxProfit = 0;
// for (let i = 0; i < arr.length; i++) {
// if (arr[i] < min) min = arr[i];
// let profit = arr[i] - min;
// maxProfit = Math.max(maxProfit, profit);
// }

// let arr = [0, 1, 0, 1, 0, 1];
// let arr = [2, 0, 2, 1, 1, 0];
let arr = [2, 0, 1];
let i = 0;
let j = 0;
let k = arr.length - 1;

while (i <= k) {
  if (arr[i] === 0) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    j++;
    i++;
  } else if (arr[i] === 2) {
    [arr[i], arr[k]] = [arr[k], arr[i]];
    k--;
  } else i++;
}

console.log(arr);
