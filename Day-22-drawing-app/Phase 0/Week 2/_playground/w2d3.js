/**
Mini Sudoku Board
=================THE-SECTION
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

//   let result = [];
//   let n = 0;
//   for (let i = 0; i < 3; i++) {
//     result.push([text[n], text[n + 1], text[n + 2]]);
//     n += 3;
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

// -------------- INTERESTING LADDER -----------------THE-SECTION

// function ladder(word) {
//   let result = [];
//   let n = word.length;

//   for (let i = 0; i < word.length; i++) {
//     let arr = [];
//     let j = 0;
//     for (let j = 0; j < n; j++) {
//       arr.push(word[j]);
//     }
//     result.push(arr);
//     n--;
//   }

//   return result;
// }

// const input = "hacktiv8";
// console.log(ladder(input));

// -------------- SITTING ARRANGEMENT -----------------THE-SECTION

// function sittingArrangement(person, column) {
//   let result = [];

//   if (column < 1) {
//     return "Invalid number";
//   }

//   let n = 0;
//   while (n < person.length) {
//     let temp = [];
//     let i = 0;
//     for (let i = 0; i < column; i++) {
//       if (n >= person.length) {
//         temp.push("Kursi Kosong");
//       } else {
//         temp.push(person[n]);
//       }
//       n++;
//     }

//     result.push(temp);
//   }

//   return result;
// }

// const person = ["Lukman", "Adam", "Dimas", "Hansin", "Orion"];

// console.log(sittingArrangement(person, 4));

// -------------- VOKAL SEEKER -----------------THE-SECTION

// function vocalSeeker(board) {
//   let result = [];
//   let hurufvokal = "aiueoAIUEO";
//   let output = "";
//   let count = 0;
//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board[i].length; j++) {
//       for (let k = 0; k < hurufvokal.length; k++) {
//         if (hurufvokal[k] === board[i][j]) {
//           output += board[i][j];
//           count++;
//           break;
//         }
//       }
//     }
//   }

//   return `vokal ditemukan ${count} dan kumpulan vokal adalah ${output}`;
// }

// const board = [
//   ["*", "*", "*", 10],
//   ["*", "*", -5, -10, "*", 100],
//   ["a", "A", "o", "b"],
// ];

// console.log(vocalSeeker(board));

// -------------- SPLICE -----------------THE-SECTION

// function splice(data, add, start = 0, del = 0) {
//   let result = [];

//   if (!Array.isArray(data)) {
//     return result;
//   }

//   let i = 0;

//   while (i < data.length) {
//     let addHere = false;
//     if (i !== start) {
//       result.push(data[i]);
//     } else if (i === start) {
//       result.push(add);
//       if (del === 0) {
//         result.push(data[i]);
//       }
//       addHere = true;
//     }

//     if (!addHere || del === 0) {
//       i++;
//     } else if (addHere) {
//       i = i + del;
//     }
//   }

//   return result;
// }

// // Test case: hasil function splice()
// console.log(splice(["idaz", "fajrin", "samir"], "anggara", 1, 2));
// // [ 'idaz', 'anggara' ]

// console.log(splice(["eko", "basil", "abdullah", "dear"], "idaz", 3, 0));
// // [ 'eko', 'basil', 'abdullah', 'idaz', 'dear' ]

// console.log(
//   splice(["eko", "basil", "abdullah", "dear", "dear2", "dear3"], "idaz", 0, 3)
// );

// console.log(splice([100, 200, 300], "150", 1, 0));
// // [ 100, '150', 200, 300 ]

// // Test case: function menerima parameter start dan del kosong!
// console.log(splice(["anggara"], "idaz"));
// // [ 'idaz', 'anggara' ]

// // Test case: function menerima parameter del kosong!
// console.log(splice(["aku", "kamu"], "dia", 1));
// // [ 'aku', 'dia', 'kamu' ]

// // Test case: catch error!
// console.log(splice("aku", "dia"));
// // []
// console.log(splice());
// // []

// -------------- SPLICE H8 VERSION -----------------THE-SECTION

function splice(data, add, start, del) {
  // Insert your code here
  let result = [];
  if (!data || !Array.isArray(data)) {
    return result;
  }
  if (!start) {
    start = 0;
  }
  if (!del) {
    del = 0;
  }
  let i = 0;
  while (i < data.length) {
    if (i === start) {
      result.push(add);
    }
    if (i < start || i >= start + del) {
      result.push(data[i]);
    }
    i++;
  }
  return result;
}

// Test case: hasil function splice()
console.log(splice(["idaz", "fajrin", "samir"], "anggara", 1, 2));
// [ 'idaz', 'anggara' ]

console.log(splice(["eko", "basil", "abdullah", "dear"], "idaz", 3, 0));
// [ 'eko', 'basil', 'abdullah', 'idaz', 'dear' ]

console.log(
  splice(["eko", "basil", "abdullah", "dear", "dear2", "dear3"], "idaz", 0, 3)
);

console.log(splice([100, 200, 300], "150", 1, 0));
// [ 100, '150', 200, 300 ]

// Test case: function menerima parameter start dan del kosong!
console.log(splice(["anggara"], "idaz"));
// [ 'idaz', 'anggara' ]

// Test case: function menerima parameter del kosong!
console.log(splice(["aku", "kamu"], "dia", 1));
// [ 'aku', 'dia', 'kamu' ]

// Test case: catch error!
console.log(splice("aku", "dia"));
// []
console.log(splice());
// []
