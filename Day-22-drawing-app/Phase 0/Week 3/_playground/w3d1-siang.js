// ------------------------- SAME HOBBIES ------------------------- THE-SECTION

// function sameHobbies(obj1, obj2) {
//   let result = [];
//   for (let i = 0; i < obj1.hobbies.length; i++) {
//     for (let j = 0; j < obj2.hobbies.length; j++) {
//       if (obj1.hobbies[i] === obj2.hobbies[j]) {
//         result.push(obj1.hobbies[i]);
//         break;
//       }
//     }
//   }
//   return result;
// }

// let semmi = {
//   name: "semmi",
//   hobbies: ["Sleeping", "Dancing", "Coding"],
// };

// let bimo = {
//   name: "bimo",
//   hobbies: ["Sleeping", "Cooking", "Coding", "Cleaning"],
// };

// console.log(sameHobbies(semmi, bimo));

// ------------------------- BATTLE STATS ------------------------- THE-SECTION

// function battleStats(arr) {
//   let output = {};

//   for (let i = 0; i < arr.length; i++) {
//     if (!output[arr[i][0]]) {
//       output[arr[i][0]] = {
//         Kalah: 0,
//         Menang: 0,
//       };
//     }
//     if (arr[i][1] > 0) {
//       output[arr[i][0]]["Menang"] += arr[i][1];
//     } else {
//       output[arr[i][0]]["Kalah"] += arr[i][1] * -1;
//     }
//   }

//   return output;
// }

// let battle = [
//   ["Jenderal A", -1],
//   ["Jenderal B", -7],
//   ["Jenderal A", 5],
//   ["Jenderal B", 10],
// ];

// console.log(battleStats(battle));

// ------------------------- KOMPILASI ------------------------- THE-SECTION

// function kompilasi(arr) {
//   let result = {};

//   for (let i = 0; i < arr.length; i++) {
//     if (!result[arr[i][0]]) {
//       result[arr[i][0]] = [];
//     }
//     result[arr[i][0]].push(arr[i][1]);
//   }

//   return result;
// }

// let array = [
//   ["Biologi", "Jonas"],
//   ["Fisika", "Ulrich"],
//   ["Fisika", "Jonas"],
// ];

// console.log(kompilasi(array));

// ------------------------- GANJIL GENAP ------------------ THE-SECTION

// // Diberikan sebuah array of number. Tugas kalian adalah memisahkan angka2 tersebut sesuai dengan kelompoknya, ganjil, genap, atau kelipatan 3. Buatlah sebuah function dengan nama bebas, dan parameter inputnya adalah array yang akan di olah.

// function ganjilGenap(arr) {
//   let result = {
//     genap: [],
//     ganjil: [],
//     tiga: [],
//   };

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 === 0) {
//       result["tiga"].push(arr[i]);
//     } else if (arr[i] % 2 === 0) {
//       result["genap"].push(arr[i]);
//     } else if (arr[i] % 2 === 1) {
//       result["ganjil"].push(arr[i]);
//     }
//   }

//   return result;
// }

// console.log(ganjilGenap([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// // input : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // { genap: [ 2, 4, 8, 10 ], ganjil: [ 1, 5, 7 ], tiga: [ 3, 6, 9 ] }

// function finalResult(arr) {
//   let result = {
//     genap: {},
//     ganjil: {},
//     tiga: {},
//   };

//   for (let key in result) {
//     result[key].numbers = ganjilGenap(arr)[key];
//     let max = result[key].numbers[0];
//     let min = result[key].numbers[0];
//     for (let i = 0; i < result[key].numbers.length; i++) {
//       if (result[key].numbers[i] > max) {
//         max = result[key].numbers[i];
//       } else if (result[key].numbers[i] < min) {
//         min = result[key].numbers[i];
//       }
//     }
//     if (result[key].numbers.length === 0) {
//       result[key].highest = 0;
//       result[key].lowest = 0;
//     } else {
//       result[key].highest = max;
//       result[key].lowest = min;
//     }
//   }
//   return result;
// }

// console.log(finalResult([1, 2, 3, 4, 5, 6, 10, 7, 8, 9]));

// // Contoh :
// // input : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // output :
// // {
// //   genap: {
// //     numbers: [2, 4, 8, 10],
// //     highest: 10,
// //     lowest: 2
// //   },
// //   ganjil: {
// //     numbers:  [1, 5, 7],
// //     highest: 7,
// //     lowest: 1
// //   },
// //   tiga: {
// //     numbers: [3, 6, 9],
// //     highest: 9,
// //     lowest: 3
// //   }
// // }

// // input : [1, 3, 5]
// // output :
// // {
// //   genap: {
// //     numbers: [],
// //     highest: 0,
// //     lowest: 0
// //   },
// //   ganjil: {
// //     numbers: [1, 5]
// //     highest: 5,
// //     lowest: 1
// //   },
// //   tiga: {
// //     numbers: [3],
// //     highest: 3,
// //     lowest: 3
// //   }
// // }

// ------------------------- ??? ------------------ THE-SECTION
