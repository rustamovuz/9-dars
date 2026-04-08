// if (arr.length < 2) return [];
//     let closestPair = [];
//     let minDiff = Infinity;
//     for (let i = 0; i < arr.length - 1; i++) {
//         let currentSum = arr[i] + arr[i + 1];
//         let diff = Math.abs(currentSum - R);
//         // Agar joriy farq avvalgi eng kichik farqdan ham kichik bo'lsa, uni yangilaymiz
//         if (diff < minDiff) {
//             minDiff = diff;
//             closestPair = [arr[i], arr[i + 1]];
//         }
//     }
//     return closestPair;

//2
// function replaceEvens(arr) {
//   let firstEven = null;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             firstEven = arr[i];
//             break;
//         }
//     }
//     if (firstEven === null) {
//         return arr;
//     }
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             result.push(arr[i] + firstEven); 
//         } else {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }

//3
// function replaceOdds(arr) {
//   let lastOdd = null;
//     for (let i = arr.length - 1; i >= 0; i--) {
//         if (arr[i] % 2 !== 0) {
//             lastOdd = arr[i];
//             break;
//         }
//     }
//     if (lastOdd === null) {
//         return arr;
//     }
//     return arr.map(num => {
//         if (num % 2 !== 0) {
//             return num + lastOdd;
//         }
//         return num;
//     });
// }

//4
// function swapMinMax(arr) {
//   if (arr.length < 2) return arr;
//   let minIdx = 0;
//   let maxIdx = 0;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < arr[minIdx]) {
//       minIdx = i;
//     }
//     if (arr[i] > arr[maxIdx]) {
//       maxIdx = i;
//     }
//   }
//   [arr[minIdx], arr[maxIdx]] = [arr[maxIdx], arr[minIdx]];
//   return arr;
// }

//5
// function zeroMiddle(arr) {
//    if (arr.length < 3) return arr; 
//   let minIdx = 0;
//   let maxIdx = 0;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < arr[minIdx]) {
//       minIdx = i;
//     }
//     if (arr[i] > arr[maxIdx]) {
//       maxIdx = i;
//     }
//   }
//   let start = Math.min(minIdx, maxIdx);
//   let end = Math.max(minIdx, maxIdx);
//   for (let i = start + 1; i < end; i++) {
//     arr[i] = 0;
//   }

//   return arr;
// }

//6
// function reverseMiddle(arr) {
//   if (arr.length < 2) return arr;
//   let minIdx = 0;
//   let maxIdx = 0;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < arr[minIdx]) minIdx = i;
//     if (arr[i] > arr[maxIdx]) maxIdx = i;
//   }
//   let start = Math.min(minIdx, maxIdx);
//   let end = Math.max(minIdx, maxIdx);
//   let middlePart = arr.slice(start, end + 1).reverse();
//   let result = [
//     ...arr.slice(0, start),
//     ...middlePart,
//     ...arr.slice(end + 1)
//   ];
//   return result;
// }
//7
// function removeNumber(arr, k) {
//   let newArr = [...arr]
//   newArr.splice(k, 1)
//   return newArr;
// }
//8
// function removeDuplicate(arr) {
//   return arr.filter((val, index) => val !== arr[index + 1]);
// }

//9
// function threeElements(arr) {
//   const countMap = {};
//   for (const num of arr) {
//     countMap[num] = (countMap[num] || 0) + 1;
//   }
//   const result = [];
//   for (const key in countMap) {
//     if (countMap[key] >= 3) {
//       result.push(Number(key)); 
//     }
//   }
//   return result.sort((a, b) => a - b);
// }

//10
// function arrayIndexSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i += 2) {
//     sum += i;
//   }
//   return sum;
// }