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