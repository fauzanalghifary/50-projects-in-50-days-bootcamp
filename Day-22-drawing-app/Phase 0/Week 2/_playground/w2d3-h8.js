// -------------- SPLIT -----------------THE-SECTION

// const data = ["jon-snow-rmt24", "robb-stark-rmt23", "arya-stark-rmt22"];

// /*
//   [
//     ["jon", "snow", "rmt24"],
//     ["robb", "stark", "rmt23"],
//     ["arya", "stark", "rmt22"],
//   ]
// */

// function manualSplit(arrString) {
//   let result = [];

//   for (let i = 0; i < arrString.length; i++) {
//     let arr = [];
//     let temp = "";
//     for (let j = 0; j < arrString[i].length; j++) {
//       if (arrString[i][j] !== "-") {
//         temp += arrString[i][j];
//       }

//       if (arrString[i][j] === "-" || j === arrString[i].length - 1) {
//         arr.push(temp);
//         temp = "";
//       }
//     }
//     result.push(arr);
//   }
//   return result;
// }

// console.log(manualSplit(data));

// -------------- BOX OF ALPHABET -----------------THE-SECTION

/**
 * =================
 * Box of alphabet
 * =================
 *
 * Terdapat sebuah fungsi yang akan membuat sebuah array multi dimensi dengan jumlah baris dan kolom yang diminta oleh user.
 *
 * Pada setiap elementnya kita akan memasukkan huruf alphabet berurutan dari A hingga Z.
 * Pengisian huruf dimulai dari baris pertama dari kiri ke kanan, ketika baris pertama sudah terisi dengan huruf huruf alfabet,
 * maka pengisian dimulai dari baris kedua paling kiri dan bergerak ke kanan dan seterusnya.
 *
 * Ketika huruf sudah mencapai huruf Z maka element selanjutnya akan diisi oleh huruf A lagi dan seterusnya.
 *
 * Rules:
 * - Hanya boleh menggunakan built in function push()
 *
 */

// function boxOfAlphabet(row, col) {
//   const result = [];
//   const kamus = "abcdefghijklmnopqrstuvwxyz";
//   let idx = 0;
//   for (let i = 0; i < row; i++) {
//     const tempArr = [];
//     for (let j = 0; j < col; j++) {
//       tempArr.push(kamus[idx % 26]);
//       idx++;
//     }
//     result.push(tempArr);
//   }

//   return result;
// }

// console.log(boxOfAlphabet(2, 2));
/**
 * [
 *  ['a', 'b'],
 *  ['c', 'd']
 * ]
 */

// console.log(boxOfAlphabet(3, 4));

/**
 *  [
 *   ['a', 'b', 'c', 'd'],
 *   ['e', 'f', 'g', 'h'],
 *   ['i', 'j', 'k', 'l'],
 * ]
 */

// console.log(boxOfAlphabet(6, 5));

/**
 * [
 *   ['a', 'b', 'c', 'd', 'e'],
 *   ['f', 'g', 'h', 'i', 'j'],
 *   ['k', 'l', 'm', 'n', 'o'],
 *   ['p', 'q', 'r', 's', 't'],
 *   ['u', 'v', 'w', 'x', 'y'],
 *   ['z', 'a', 'b', 'c', 'd']
 * ]
 */

// let row = 6;
// let col = 5;
// let output = boxOfAlphabet(row, col);
// // let panjangRow = output.length - 1
// // let panjangCol = output[1].length - 1
// console.log(output[row - 1][col - 1]);
// console.log(output[output.length - 1][output[1].length - 1]);

// -------------- FIND COORDINATE -----------------THE-SECTION

/*
==========================
Find Character Coordinate
==========================
[INSTRUCTION]
Terdapat function findCharacterCoordinate, function ini menerima 2 parameter,
parameter pertama merupakan array multidimensi,
parameter kedua merupakan character yang akan di cari dari parameter pertama.
Fungsi ini akan mengembalikan array multidimensi seperti contoh dibawah ini
[EXAMPLE]
input 1: 
[
    ["F","$","#","*"],
    ["$","A","@","O"],
    "impostor"
    ["%","&","#","@"],
    ["A","*","&","%"]
]
input 2: '$'
proses: mencari $ di dalam array multidimensi yang diberikan
output :["$",[0,1],[1,0]]
*/
// function groupCharacterCoordinate(arr, character) {
//   if (!arr) {
//     return "Invalid data";
//   }

//   if (!Array.isArray(arr)) {
//     return "Bukan Array";
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (!Array.isArray(arr[i])) {
//       return "Terdapat impostor";
//     }
//   }

//   const result = [character];

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       if (arr[i][j] === character) {
//         result.push([i, j]);
//       }
//     }
//   }

//   return result;
// }

// console.log(
//   groupCharacterCoordinate(
//     [
//       ["F", "$", "#", "*"],
//       ["$", "A", "@", "O"],
//       ["%", "&", "#", "@"],
//       ["A", "*", "&", "%"],
//     ],
//     "$"
//   )
// );
/* output : 
   ["$",[0,1],[1,0]]
*/

// console.log(
//   groupCharacterCoordinate(
//     [
//       ["F", "$", "#", "*", "B", "^", "P", "%"],
//       ["$", "A", "@", "O", "O", "G", "$", "?"],
//       ["%", "&", "#", "@", "A", "*", "#", "F"],
//       ["A", "*", "&", "%", "B", "O", "?", "N"],
//       ["F", "$", "#", "*", "$", "%", "&", "B"],
//       ["$", "A", "@", "O", "N", "F", "O", "P"],
//       ["%", "&", "#", "@", "!", "%", "*", "#"],
//       ["A", "*", "&", "%", "^", "M", "@", "P"],
//     ],
//     "@"
//   )
// );
/* output:
   [ '@', [ 1, 2 ], [ 2, 3 ], [ 5, 2 ], [ 6, 3 ], [ 7, 6 ] ]
*/

// console.log(groupCharacterCoordinate());
// console.log(groupCharacterCoordinate(null, "$"));
// console.log(groupCharacterCoordinate("Aku adalah array", "$"));

// console.log(
//   groupCharacterCoordinate([
//     ["F", "$", "#", "*"],
//     ["$", "A", "@", "O"],
//     '["$", "A", "@", "O"]',
//     ["%", "&", "#", "@"],
//     ["A", "*", "&", "%"],
//   ])
// );

// -------------- MINI SUDOKU -----------------THE-SECTION

/**
Mini Sudoku Board
=================
Implementasikan function `miniSudokuBoard` untuk membuat
papan 3x3 yang tipe data-nya berupa Array.
`miniSudokuBoard` akan menerima satu parameter yaitu `text`
yang tipe data-nya berupa String.
# Contoh I/O
- Input: '290500007'
  Output: [ ['2', '9', '0'], ['5', '0', '0'], ['0', '0', '7] ]
- Input: '302609005'
  Output: [ ['3', '0', '2'], ['6', '0', '9'], ['0', '0', '5'] ]
# Kondisi khusus
- Jika parameter adalah string kosong, kembalikan nilai 'Empty board'
- Jika panjang dari string tidak sama dengan 9, kembalikan nilai 'Invalid input'
*/

// function miniSudokuBoard(text) {
//   if (text === "") {
//     return "Empty board";
//   }

//   if (text.length !== 9) {
//     return "Invalid input";
//   }

//   const result = [];
//   let idx = 0;
//   for (let i = 0; i < 3; i++) {
//     const temp = [];
//     for (let j = 0; j < 3; j++) {
//       temp.push(text[idx]);
//       idx++;
//     }
//     result.push(temp);
//   }
//   return result;
// }

// console.log(miniSudokuBoard("005030081"));
// // /[ [ '0', '0', '5' ], [ '0', '3', '0' ], [ '0', '8', '1' ] ]
// console.log(miniSudokuBoard("105802000"));
// // [ [ '1', '0', '5' ], [ '8', '0', '2' ], [ '0', '0', '0' ] ]
// console.log(miniSudokuBoard("608730000"));
// // [ [ '6', '0', '8' ], [ '7', '3', '0' ], [ '0', '0', '0' ] ]
// console.log(miniSudokuBoard("096040001"));
// // [ [ '0', '9', '6' ], [ '0', '4', '0' ], [ '0', '0', '1' ] ]
// console.log(miniSudokuBoard("87109"));
// // Invalid input
// console.log(miniSudokuBoard(""));
// // Empty board

// -------------- ROW SUM -----------------THE-SECTION

// function calculateArr(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     for (let j = 0; j < arr[i].length; j++) {
//       sum += arr[i][j];
//     }
//     arr[i] = sum;
//   }
//   return arr;
// }

// let arr = [
//   [5, 2, 4], // 11  0
//   [2, 1, 12, 8], // 23  1
//   [4, 56, 3], // 63  2
// ];

// console.log(calculateArr(arr));

// //output = [11, 23, 63];

// -------------- FIND EMPTY SEAT -----------------THE-SECTION

/*
=================
FIND EMPTY SEAT
=================

[INSTRUCTION]
Terdapat function findEmptySeat , function ini akan memberikan daftar tempat duduk yang kosong sesuai dengan row yang diinput user.
Terdapat 2 parameter yang pertama adalah array multidimensi yang berisi list tempat duduk, tempat duduk yang telah di booking ditandai dengan huruf X.
Parameter kedua adalah row yang ingin dicari user ('ditandai dengan huruf kapital') .

[EXAMPLE]
param 1 : 
[
  ['ROW', '1', '2', '3', '4', '5', '6'],
  ['A', 'X', 'X', 'X', 'X', ' ', ' '],
  ['B', ' ', 'X', ' ', ' ', ' ', ' '],
  ['C', 'X', 'X', 'X', 'X', ' ', ' '],
  ['D', ' ', ' ', ' ', 'X', 'X', 'X'],
]
param 2 : 
D
output :
Terdapat 3 bangku kosong, D1, D2, D3

[RULES]
- dilarang menggunakan indexof, includes

*/

// function findEmptySeat(arr, row) {
//   let total = 0;
//   let kursiKosong = [];
//   let find = false;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i][0] === row) {
//       find = true;
//       for (let j = 0; j < arr[i].length; j++) {
//         if (arr[i][j] === " ") {
//           total++;
//           kursiKosong.push(`${row}${arr[0][j]}`); // G11
//         }
//       }
//     }
//   }

//   if (!find) {
//     return `Baris ${row} tidak tersedia`;
//   }

//   let output = "";
//   if (total > 0) {
//     output += `Terdapat ${total} bangku kosong`;
//     for (let i = 0; i < kursiKosong.length; i++) {
//       output += ", " + kursiKosong[i];
//     }
//   } else {
//     output = `Bangku di baris ${row} sudah penuh`;
//   }
//   return output;
// }

// var cinemaSeat2 = [
//   ["ROW", "10", "11", "12", "13"],
//   ["E", "X", "X", "X", "X"],
//   ["F", " ", "X", " ", " "],
//   ["G", "X", " ", "X", "X"],
//   ["H", " ", " ", " ", "X"],
// ];

// console.log(findEmptySeat(cinemaSeat2, "G"));
// // Terdapat 1 bangku kosong, G11

// console.log(findEmptySeat(cinemaSeat2, "Z"));
// // // Baris Z tidak tersedia

// var cinemaSeat = [
//   ["ROW", "1", "2", "3", "4", "5", "6"],
//   ["A", "X", "X", "X", "X", " ", " "],
//   ["B", " ", "X", " ", " ", " ", " "],
//   ["C", "X", "X", "X", "X", "X ", "X"],
//   ["D", " ", " ", " ", "X", "X", "X"],
// ];

// console.log(findEmptySeat(cinemaSeat, "D"));
// // // Terdapat 3 bangku kosong, D1, D2, D3

// console.log(findEmptySeat(cinemaSeat, "A"));
// // // Terdapat 2 bangku kosong, A5, A6

// console.log(findEmptySeat(cinemaSeat, "C"));
// //   // Bangku di baris C sudah penuh

// -------------- SUSUN PESAN -----------------THE-SECTION

/*
Buatlah fungsi dengan nama susunPesan, dengan parameter input berupa array 2 dimensi. 
Setiap elemen array akan berupa array yang berisi kata dan posisi nya. 
Tugas fungsi ini adalah untuk menghasilkan kalimat sesuai dengan posisi kata mulai dari posisi terkecil ke posisi terbesar 
Silakan menambahkan contoh soal lain jika merasa perlu

Contoh :

[
  ['besok', 34],
  ['kita', 11],
  ['akan', 21],
  ['menyerang', 32],
  ['pagi', 45],
]

outputnya : 'kita akan menyerang besok pagi'


[
  ['granat', 13],
  ['musuh', 4],
  ['membawa', 7],
]

outputnya : 'musuh membawa granat'
*/

// function susunPesan(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j][1] < arr[i][1]) {
//         let temp3 = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp3;
//       }
//     }
//   }

//   console.log(arr);
//   let str = "";
//   for (let i = 0; i < arr.length; i++) {
//     str += arr[i][0] + " ";
//   }

//   return str;
// }

// let arr = [
//   ["besok", 34],
//   ["kita", 11],
//   ["akan", 21],
//   ["menyerang", 32],
//   ["pagi", 45],
// ];

// console.log(susunPesan(arr));

// let arr2 = [
//   ["granat", 13],
//   ["musuh", 4],
//   ["membawa", 7],
// ];

// console.log(susunPesan(arr2));

// -------------- SUM COLUMN -----------------THE-SECTION

/*
    =========
    sumColumn
    =========
    [INSTRUCTION]
    program sumRow adalah program yang dapat menjumlahkan angka per column
    pada array multidimensi. masing - masing row bisa memiliki jumlah row yang 
    berbeda
    [EXAMPLE]
    input: 
    [
     [5],
     [2,  5, 12, 8],
     [4, 56,  3]
    ]
    cara menjumlahkannya, jumlahkan angka - angka tersebut dengan column yang sama.
    maka yang di jumlahkan adalah 
    column 1 => 5 + 2 + 4 = 11 
    column 2 => 5 + 56 = 61
    column 3 => 12 + 3 = 15 
    column 4 => 8 = 8
    hasil masing - masing penjumlahan disetiap column di masukkan kedalam 1 array
    output :
    [11, 61, 15, 8 ]
*/

// function sumColumn(arr) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       if (!result[j]) {
//         result.push(0);
//       }
//       if (arr[i][j]) {
//         result[j] += arr[i][j];
//       }
//     }
//   }

//   return result;
// }

// console.log(sumColumn([[5], [2, 5, 12, 8], [4, 56, 3]])); // [11, 61, 15, 8 ]

// console.log(
//   sumColumn([
//     [3, 5, 12, 6],
//     [1, 7, 4, 3, 8, 4, 9],
//     [8, 5, 8],
//     [4, 7, 8, 2, 8, 3],
//   ])
// );
// [(16, 24, 32, 11, 16, 7, 9)];

// -------------- GAME CONTROL -----------------THE-SECTION

// function gameControl(gameBoard, controller) {
//   let rowIndex;
//   let columnIndex;

//   for (let i = 0; i < gameBoard.length; i++) {
//     for (let j = 0; j < gameBoard[i].length; j++) {
//       if (gameBoard[i][j] === "*") {
//         rowIndex = i;
//         columnIndex = j;
//         gameBoard[i][j] = "";
//         break;
//       }
//     }
//   }

//   for (let i = 0; i < controller.length; i++) {
//     if (controller[i] === "↑") {
//       rowIndex--;
//     } else if (controller[i] === "↓") {
//       rowIndex++;
//     } else if (controller[i] === "→") {
//       columnIndex++;
//     } else if (controller[i] === "←") {
//       columnIndex--;
//     }
//   }

//   gameBoard[rowIndex][columnIndex] = "*";

//   return gameBoard;
// }

// let board1 = [
//   ["", "", "", "", ""],
//   ["", "", "", "", ""],
//   ["", "", "*", "", ""],
//   ["", "", "", "", ""],
//   ["", "", "", "", ""],
// ];

// console.log(gameControl(board1, ["↑", "←", "↑", "→"]));

// // [
// //   (["", "", "*", "", ""],
// //   ["", "", "", "", ""],
// //   ["", "", "", "", ""],
// //   ["", "", "", "", ""],
// //   ["", "", "", "", ""])
// // ];

// let board2 = [
//   ["", "", "", "", ""],
//   ["", "", "", "", ""],
//   ["", "", "*", "", ""],
//   ["", "", "", "", ""],
//   ["", "", "", "", ""],
// ];
// console.log(gameControl(board2, ["↓", "←", "↑", "→", "→", "↑", "→"]));

// // [
// //   (["", "", "", "", ""],
// //   ["", "", "", "", "*"],
// //   ["", "", "", "", ""],
// //   ["", "", "", "", ""],
// //   ["", "", "", "", ""])
// // ];
