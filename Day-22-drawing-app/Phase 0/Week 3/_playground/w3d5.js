// ------------------------- CARI MODUS ------------------------- THE-SECTION

// function cariModus(arr) {
//   let obj = {};
//   let maxFreq = -Infinity;
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let key = arr[i];
//     if (!obj[key]) {
//       obj[key] = 0;
//       count++;
//     }
//     obj[key]++;
//     if (obj[key] > maxFreq) {
//       maxFreq = obj[key];
//     }
//   }

//   if (maxFreq === 1 || count === 1) {
//     return -1;
//   }

//   for (let i = 0; i < arr.length; i++) {
//     for (let key in obj) {
//       if (obj[arr[i]] === maxFreq) {
//         return arr[i];
//       }
//     }
//   }
// }

// console.log(cariModus([10, 5, 2, 4, 4, 2]));

// ------------------------- ANGKA PRIMA ------------------------- THE-SECTION

function angkaPrima(angka) {
  let prime = false;
  let count = 0;

  for (let i = 1; i <= angka; i++) {
    if (angka % i === 0) {
      count++;
    }
  }

  if (count === 2) {
    prime = true;
  }

  return prime;
}

console.log(angkaPrima(2));

// ------------------------- ????------------------------- THE-SECTION
