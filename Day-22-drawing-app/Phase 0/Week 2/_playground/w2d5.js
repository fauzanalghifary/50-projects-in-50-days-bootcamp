// ------------------------- MEELE RANGED ------------------------- THE-SECTION
// input:'Razor-Ranged,Meepo-Melee,Invoker-Ranged'
//output: [‘Razor-Ranged’, ‘Meepo-Melee’, ‘Invoker-Ranged’]
// function splitting(str) {
//   let result = [];
//   let temp = "";

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === ",") {
//       result.push(temp);
//       temp = "";
//     } else if (i === str.length - 1) {
//       temp += str[i];
//       result.push(temp);
//     } else {
//       temp += str[i];
//     }
//   }

//   return result;
// }

// console.log(
//   splitting("Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged")
// );

// function meleeRangedGrouping(str) {
//   let result = [];
//   let ranged = [];
//   let meele = [];
//   let splitted = splitting(str);

//   for (let i = 0; i < splitted.length; i++) {
//     //Razor-Ranged
//     let temp = "";
//     let hero = "";
//     for (let j = 0; j < splitted[i].length; j++) {
//       //R a z ..

//       if (splitted[i][j] === "-") {
//         hero += temp;
//         temp = "";
//       } else {
//         temp += splitted[i][j];
//       }

//       if (temp === "Ranged") {
//         ranged.push(hero);
//       } else if (temp === "Melee") {
//         meele.push(hero);
//       }
//     }
//   }
//   result.push(ranged);
//   result.push(meele);

//   return result;
// }

// console.log(
//   meleeRangedGrouping(
//     "Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged"
//   )
// );

// ------------------------- SORTING ------------------------- THE-SECTION

// function sorting(array) {
//   for (let i = 0; i < array.length; i++) {
//     let temp = "";
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[j] < array[i]) {
//         temp = array[j];
//         array[j] = array[i];
//         array[i] = temp;
//       }
//     }
//   }

//   return array;
// }

// function sortingByType(array) {
//   let result = [];
//   let number = [];
//   let theArray = [];
//   let boolean = [];

//   sorting(array);

//   for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === "number" && !isNaN(array[i])) {
//       number.push(array[i]);
//     } else if (typeof array[i] === "string") {
//       theArray.push(array[i]);
//     } else if (typeof array[i] === "boolean") {
//       boolean.push(array[i]);
//     }
//   }

//   result.push(number);
//   result.push(theArray);
//   result.push(boolean);

//   return result;
// }

// function sortAllClean(array) {
//   return sortingByType(sorting(array));
// }

// //do not change the code below
// let inputArrSorting = [2, 4, 6, 8, 2, 3];

// let inputArrSortingType = [1, 3, "array", -45, true, false, "big"];

// let inputArrSortingClean = [
//   undefined,
//   null,
//   456,
//   "def",
//   NaN,
//   [],
//   true,
//   123,
//   "bcd",
//   false,
// ];
// console.log(sorting(inputArrSorting));
// console.log(sortingByType(inputArrSortingType));
// console.log(sortAllClean(inputArrSortingClean));

// ------------------------- DEEP SUM ------------------------- THE-SECTION

// function deepSum(arr) {
//   let result = 0;

//   if (arr.length === 0) {
//     return "No Number";
//   }

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       for (let k = 0; k < arr[i][j].length; k++) {
//         result += arr[i][j][k];
//       }
//     }
//   }

//   return result;
// }

// console.log(
//   deepSum([
//     [
//       [4, 5, 6],
//       [9, 1, 2, 10],
//       [9, 4, 3],
//     ],
//     [
//       [4, 14, 31],
//       [9, 10, 18, 12, 20],
//       [1, 4, 90],
//     ],
//     [
//       [2, 5, 10],
//       [3, 4, 5],
//       [2, 4, 5, 10],
//     ],
//   ])
// );

// console.log(deepSum([]));

// ------------------------- MOST FREQUENT LARGEST NUMBER ------------------------- THE-SECTION

// function sorting(arrNumber) {
//   for (let i = 0; i < arrNumber.length; i++) {
//     let temp = "";
//     for (let j = i + 1; j < arrNumber.length; j++) {
//       if (arrNumber[j] < arrNumber[i]) {
//         temp = arrNumber[j];
//         arrNumber[j] = arrNumber[i];
//         arrNumber[i] = temp;
//       }
//     }
//   }

//   return arrNumber;
// }

// console.log(sorting([2, 8, 4, 6, 8, 5, 8, 4]));

// function getTotal(arrNumber) {
//   if (arrNumber.length === 0) {
//     return "";
//   }

//   let sortedNum = sorting(arrNumber);
//   let highest = sortedNum[sortedNum.length - 1];
//   let highestFreq = 0;

//   for (let i = 0; i < sortedNum.length; i++) {
//     if (sortedNum[i] === highest) {
//       highestFreq++;
//     }
//   }

//   return `angka paling besar adalah ${highest} dan jumlah kemunculan sebanyak ${highestFreq} kali`;
// }

// function mostFrequentLargestNumbers(arrNumber) {
//   var listSort = sorting(arrNumber);
//   var countHighest = getTotal(listSort);

//   return countHighest;
// }

// console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));

// ------------------------- TUKAR UKURAN ------------------------- THE-SECTION

// function tukarBesarKecil(kalimat) {
//   let result = "";
//   for (let i = 0; i < kalimat.length; i++) {
//     if (kalimat[i] === kalimat[i].toLowerCase()) {
//       result += kalimat[i].toUpperCase();
//     } else if (kalimat[i] === kalimat[i].toUpperCase()) {
//       result += kalimat[i].toLowerCase();
//     }
//   }
//   return result;
// }

// console.log(tukarBesarKecil("Hello World"));

// ------------------------- URUTKAN ABJAD ------------------------- THE-SECTION

// function urutkanAbjad(str) {
//   let strArray = [];

//   for (let i = 0; i < str.length; i++) {
//     strArray.push(str[i]);
//   }

//   for (let i = 0; i < strArray.length; i++) {
//     let temp = "";
//     for (let j = i + 1; j < strArray.length; j++) {
//       if (strArray[j] < strArray[i]) {
//         temp = strArray[j];
//         strArray[j] = strArray[i];
//         strArray[i] = temp;
//       }
//     }
//   }

//   let result = "";
//   for (let i = 0; i < strArray.length; i++) {
//     result += strArray[i];
//   }

//   return result;
// }

// console.log(urutkanAbjad("hello"));
