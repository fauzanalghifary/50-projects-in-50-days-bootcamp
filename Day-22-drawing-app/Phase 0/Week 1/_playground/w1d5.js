/*


*/

// let word = "true3";

// if (typeof word !== "string") {
//   word = word.toString();
// }

// let max = 0;
// let maxChar = "";

// for (let i = 0; i < word.length; i++) {
//   let count = 0;

//   if (word[i] !== " ") {
//     for (let j = 0; j < word.length; j++) {
//       if (word[i].toLowerCase() === word[j].toLowerCase()) {
//         count++;
//       }
//     }
//   }

//   if (count > max) {
//     max = count;
//     maxChar = word[i].toLowerCase();
//   }
// }

// if (max > 10) {
//   console.log(
//     `Karakter terbanyak adalah ${maxChar} dengan jumlah yang sangat banyak yaitu ${max}`
//   );
// } else if (max > 5 && max <= 10) {
//   console.log(
//     `Karakter terbanyak adalah ${maxChar} dengan jumlah yang cukup banyak yaitu ${max}`
//   );
// } else if (max > 1 && max <= 5) {
//   console.log(`Karakter terbanyak adalah ${maxChar} dengan jumlah ${max}`);
// } else if (max === 1) {
//   console.log(`Hanya memiliki satu karakter yaitu ${maxChar}`);
// } else if (max === 0) {
//   console.log("Anda memasukkan string kosong");
// }

// ------------------------------------------------------------------------------

// let row = 10;
// const col = 3;

// for (i = 0; i < row * col; i += 0) {
//   let nomor = "";
//   for (j = 0; j < col; j++) {
//     nomor += `${i + 1} `;
//     i++;
//   }
//   console.log(nomor);
// }

// ------------------------------------------------------------------------------

// let kata = "kataku";

// code here

// let balikKata = "";

// for (let i = kata.length - 1; i >= 0; i--) {
//   balikKata += kata[i];
// }

// if (kata === balikKata) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// -------------------

// let angka = 33;

// //code here
// let isPalindrome = false;

// while (!isPalindrome) {
//   angka++;
//   angka = angka.toString();
//   let angkaBalik = "";
//   for (let i = angka.length - 1; i >= 0; i--) {
//     angkaBalik += angka[i];
//   }

//   if (angka === angkaBalik) {
//     isPalindrome = true;
//   }
//   angka = Number(angka);
// }

// console.log(angka);

// -------------------

// let kata = "i love javascript";
// let kataBaru = "";

// for (let i = 0; i < kata.length; i++) {
//   if (
//     kata[i] === "a" ||
//     kata[i] === "i" ||
//     kata[i] === "u" ||
//     kata[i] === "e" ||
//     kata[i] === "o"
//   ) {
//     kataBaru += "$";
//   } else {
//     kataBaru += kata[i];
//   }
// }

// console.log(kataBaru);

// -------------------------------------

// let kalimat = "f a b c d";
// let jumlahKata = 0;
// let isSpasi = true;

// for (let i = 0; i < kalimat.length; i++) {
//   if (kalimat[i] === " ") {
//     isSpasi = true;
//   } else if (isSpasi === true) {
//     jumlahKata++;
//     isSpasi = false;
//   }
// }

// console.log(jumlahKata);

// -------------------------------------
// let kata = true;
// if (kata === true) {
//   console.log("thank you for agreeing");
// } else if (kata === false) {
//   console.log("cannot proceed without agreement");
// } else if (!kata) {
//   console.log("Invalid data");
// } else if (typeof kata === "string") {
//   console.log(`username ${kata}`);
// } else if (typeof kata === "number") {
//   console.log(`age ${kata}`);
// }

// --------------------------------

// let row = 10;
// let column = 2;
// let n = 1;

// for (let i = 0; i < row; i++) {
//   let output = "";
//   for (let j = 0; j < column; j++) {
//     output += `${n} `;
//     n++;
//   }
//   console.log(output);
// }

// ===================================

// ####*
// ###* *
// ##* * *
// #* * * *
// * * * * *
// #* * * *
// ##* * *
// ####*

// let cress = 5;
// let star = 1;
// let numOfRow = (cress + star) * 2 - 1;
// let firstLoop = true;

// for (let i = 0; i < numOfRow; i++) {
//   let output = "";
//   if (firstLoop) {
//     for (let j = cress; j > 0; j--) {
//       output += "#";
//     }
//     for (let j = 0; j < star; j++) {
//       output += "*";
//     }
//     cress--;
//     star++;
//     console.log(output);
//     if (cress === 0) {
//       firstLoop = false;
//     }
//   } else {
//     for (j = 0; j < cress; j++) {
//       output += "#";
//     }
//     for (let j = star; j > 0; j--) {
//       output += "*";
//     }
//     console.log(output);
//     cress++;
//     star--;
//   }
// }

// -------------------------------------

//     *
//    * *
//   * * *
//  * * * *
// * * * * *
//  * * * *
//   * * *
//    * *
//     *

// let starMax = 5;
// let star = 1;
// let space = starMax;

// for (let i = 0; i < starMax; i++) {
//   let output = "";
//   for (let j = space; j > 0; j--) {
//     output += " ";
//   }
//   for (let j = 0; j < star; j++) {
//     output += "* ";
//   }
//   console.log(output);
//   space--;
//   star++;
// }

// //star = 6;
// //space = 0;
// star -= 2;
// space += 2;

// for (let i = 0; i < starMax; i++) {
//   let output = "";
//   for (let j = 0; j < space; j++) {
//     output += " ";
//   }
//   for (let j = star; j > 0; j--) {
//     output += "* ";
//   }
//   console.log(output);
//   space++;
//   star--;
// }

// -------------------------------------

//     *         *
//    * *       * *
//   * * *     * * *
//  * * * *   * * * *
// * * * * * * * * * *
//  * * * *   * * * *
//   * * *     * * *
//    * *       * *
//     *         *

// let starMax = 6;
// let star = 1;
// let space = starMax;

// for (let i = 0; i < starMax; i++) {
//   let output = "";
//   for (let j = space; j > 0; j--) {
//     output += " ";
//   }
//   for (let j = 0; j < star; j++) {
//     output += "* ";
//   }
//   for (let j = space - 1; j > 0; j--) {
//     output += "  ";
//   }
//   for (let j = 0; j < star; j++) {
//     output += "* ";
//   }

//   console.log(output);
//   space--;
//   star++;
// }

// star -= 2;
// space += 2;

// for (let i = 0; i < starMax; i++) {
//   let output = "";
//   for (let j = 0; j < space; j++) {
//     output += " ";
//   }
//   for (let j = star; j > 0; j--) {
//     output += "* ";
//   }
//   for (let j = 0; j < space - 1; j++) {
//     output += "  ";
//   }
//   for (let j = star; j > 0; j--) {
//     output += "* ";
//   }
//   console.log(output);
//   space++;
//   star--;
// }
