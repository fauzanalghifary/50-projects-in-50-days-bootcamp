// let plat = "2341;3429;864;1309;1276";

// function ganjilGenap(plat) {
//   let arr = [];
//   let output = "";
//   for (let i = 0; i < plat.length; i++) {
//     if (plat[i] !== ";") {
//       output += plat[i];
//     } else if (plat[i] === ";") {
//       arr.push(output);
//       output = "";
//     }

//     if (i === plat.length - 1) {
//       arr.push(output);
//     }
//   }

//   let genap = 0;
//   let ganjil = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       genap++;
//     } else {
//       ganjil++;
//     }
//   }

//   if (genap && ganjil) {
//     return `plat genap sebanyak ${genap} dan plat ganjil sebanyak ${ganjil}`;
//   } else if (genap === 0) {
//     return `plat ganjil sebanyak ${ganjil} dan plat genap tidak ditemukan`;
//   } else if (ganjil === 0) {
//     return `plat genap sebanyak ${genap} dan plat ganjil tidak ditemukan`;
//   }
// }

//------------------------------------------------------

/* Simple Calculator
 * ================
 *
 * Buatlah sebuah fungsi kalkulator yang menerima dua paramter
 * berupa angka dan satu parameter berupa operator
 *
 * Operator yang akan kita lakukan adalah
 * + -> penjumlahan angka tersebut
 * - -> pengurangan angka tersebut
 * * -> perkalian angka tersebut
 * / -> pembagian angka tersebut
 * % -> modulus angka tersebut
 */

// ---------------------

function getUnique(arrArtist) {
  let uniqueArr = [];

  for (let i = 0; i < arrArtist.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < uniqueArr.length; j++) {
      if (arrArtist[i] === uniqueArr[j]) {
        isDuplicate = true;
      }
    }
    if (isDuplicate === false) {
      uniqueArr.push(arrArtist[i]);
    }
  }

  return uniqueArr;
}

const femaleArtists = [
  "Billie Eilish",
  "Billie Eilish",
  "Selena Gomez",
  "Taylor Swift",
  "Taylor Swift",
  "Lady Gaga",
  "Taylor Swift",
  "Billie Eilish",
  "Selena Gomez",
  "Barbie Ken",
];

console.log(getUnique(femaleArtists));
/*
output
[
  "Billie Eilish",
  "Selena Gomez",
  "Taylor Swift",
  "Lady Gaga",
  "Barbie Ken"
]

*/
