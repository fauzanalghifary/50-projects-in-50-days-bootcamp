// -------------- FILTER PRODUCTS -----------------THE-SECTION

// /**
//  * Buatlah program untuk mengumpulkan pilihan produk mana saja yang sesuai dengan uang customer dan stock tersedia.
//  */

// let products = [
//   ["baju", 50000, 3],
//   ["sepatu", 125000, 2],
//   ["tas", 99000, 1],
//   ["jam tangan", 525000, 1],
//   ["permen", 2500, 0],
// ];

// /**
//    * function filterStockAndPrice akan mengembalikan array produk yang sudah difilter berdasarkan harga dan stock
//    *
//    *  let input = [
//         ['baju', 50000, 3],
//         ['sepatu', 125000, 2],
//         ['tas', 99000, 1],
//         ['jam tangan', 525000, 1],
//         ['permen', 2500, 0]
//       ];
//    *  filterStockAndPrice(input, 60000)
//       // return
//       [
//         ['baju', 50000, 3]
//       ]
//    */
// function filterStockAndPrice(data, money) {
//   let result = [];
//   for (let i = 0; i < data.length; i++) {
//     if (data[i][1] <= money && data[i][2] > 0) {
//       result.push(data[i]);
//     }
//   }

//   return result;
// }

// /**
//    * function formatOutput akan mengembalikan array nama" produk berdasarkan array input
//    *
//    *  let input = [
//         ['baju', 50000, 3]
//       ]
//       formatOutput(data)
//       // return
//       ['baju']
//    */
// function formatOutput(data) {
//   let result = [];

//   for (let i = 0; i < data.length; i++) {
//     result.push(data[i][0]);
//   }

//   return result;
// }

// /**
//  * function findMatching adalah function utama yang akan mengembalikan array nama" produk yang sesuai dengan uang customer dan stock tersedia.
//  *
//  * jika input produk tidak diberikan, kembalikan 'invalid input'
//  * jika tidak ada produk yang ditemukan, kembalikan 'tidak ada produk yang cocok'
//  */
// function findMatching(data, money) {
//   if (!data) {
//     return "invalid input";
//   }

//   const filteredData = filterStockAndPrice(data, money);

//   const formattedData = formatOutput(filteredData);

//   if (formattedData.length === 0) {
//     return "tidak ada produk yang cocok";
//   }

//   return formattedData;
// }

// console.log(findMatching(products, 100000)); // ['baju', 'tas']
// console.log(findMatching(products, 5000)); // 'tidak ada produk yang cocok'
// console.log(findMatching()); // 'invalid input'

// -------------- MENGELOMPOKKAN ANGKA -----------------THE-SECTION

// function mengelompokkanAngka(arr) {
//   let result = [];
//   let kelipatanTiga = [];
//   let genap = [];
//   let ganjil = [];

//   if (arr) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 3 === 0) {
//         kelipatanTiga.push(arr[i]);
//       } else if (arr[i] % 2 === 0) {
//         genap.push(arr[i]);
//       } else if (arr[i] % 2 === 1) {
//         ganjil.push(arr[i]);
//       }
//     }
//   }

//   result.push(genap);
//   result.push(ganjil);
//   result.push(kelipatanTiga);

//   return result;
// }

// console.log(mengelompokkanAngka([2, 4, 6]));
// console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(mengelompokkanAngka([100, 151, 122, 99, 111]));
// console.log(mengelompokkanAngka());

// -------------- DERET GEOMETRI -----------------THE-SECTION

// function tentukanDeretGeometri(arr) {
//   if (!arr || arr.length === 0) {
//     return "Invalid input";
//   }

//   let isGeometri = true;
//   let ratio = arr[1] / arr[0];
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i + 1] / arr[i] !== ratio) {
//       isGeometri = false;
//       break;
//     }
//   }
//   return isGeometri;
// }

// console.log(tentukanDeretGeometri([1, 3, 9, 27, 81]));
// console.log(tentukanDeretGeometri([2, 4, 8, 16, 32]));
// console.log(tentukanDeretGeometri([2, 4, 6, 8]));
// console.log(tentukanDeretGeometri([2, 6, 18, 54]));
// console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9]));
// console.log(tentukanDeretGeometri([1, 3, 9, 27, 27, 81]));
// console.log(tentukanDeretGeometri([1, 3]));

// -------------- TARGET TERDEKAT ----------------- THE-SECTION

// function targetTerdekat(arr) {
//   let indexO = null;
//   let indexX = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "o") {
//       indexO = i;
//     } else if (arr[i] === "x") {
//       indexX.push(i);
//     }
//   }

//   if (!arr || !Array.isArray(arr) || indexO === null) {
//     return "Invalid Input";
//   }

//   if (indexX.length === 0) {
//     return 0;
//   }

//   let jarakMin = Math.abs(indexO - indexX[0]);
//   for (let i = 0; i < indexX.length; i++) {
//     if (Math.abs(indexO - indexX[i]) < jarakMin) {
//       jarakMin = Math.abs(indexO - indexX[i]);
//     }
//   }

//   return jarakMin;
// }

// console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); //3
// console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"]));
// console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "]));
// console.log(targetTerdekat([" ", " ", "o", " "]));
// console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"]));
// console.log(targetTerdekat([" ", " ", " ", "x", "x", " ", " ", "x"]));

// -------------- DAMAGE CALCULATION ----------------- THE-SECTION

// function attack(damage) {
//   return damage - 2;
// }

// function damageCalculation(numberOfAttacks, damagePerAttack) {
//   return numberOfAttacks * attack(damagePerAttack);
// }

// console.log(damageCalculation(9, 25));
// console.log(damageCalculation(10, 4));
// console.log(damageCalculation(5, 20));

// -------------- PAYROLL ----------------- THE-SECTION

// function payroll(monthlyAbsen) {
//   let hadir = 0;
//   let sakit = 0;
//   let cuti = 0;
//   let terlambat = 0;
//   let alpa = 0;
//   let jamLembur = 0;
//   const dendaTerlambat = 50000;
//   const uangLemburPerJam = 50000;
//   const dendaAlpa = 200000;
//   const bonusSelaluHadir = 500000;

//   let gaji = 5000000;

//   if (!monthlyAbsen) {
//     return "Invalid data!";
//   }

//   if (monthlyAbsen.length < 4) {
//     return "Data absen tidak lengkap!";
//   }

//   for (let i = 0; i < monthlyAbsen.length; i++) {
//     for (let j = 0; j < monthlyAbsen[i].length; j++) {
//       if (monthlyAbsen[i][j] === "H") {
//         hadir++;
//       } else if (monthlyAbsen[i][j] === "T") {
//         hadir++;
//         terlambat++;
//         gaji -= dendaTerlambat;
//       } else if (monthlyAbsen[i][j][0] === "L") {
//         hadir++;
//         jamLembur += monthlyAbsen[i][j][1];
//         gaji += monthlyAbsen[i][j][1] * uangLemburPerJam;
//       } else if (monthlyAbsen[i][j][0] === "A") {
//         if (monthlyAbsen[i][j][1] === "B") {
//           gaji -= dendaAlpa;
//           alpa++;
//         } else if (monthlyAbsen[i][j][1] === "S") {
//           sakit++;
//         } else if (monthlyAbsen[i][j][1] === "C") {
//           cuti++;
//         }
//       }
//     }
//   }

//   if (hadir === 24) {
//     gaji += bonusSelaluHadir;
//   }

//   return `Absensi Bulan ini :
// Hadir: ${hadir}
// Sakit: ${sakit}
// Terlambat: ${terlambat}
// Alpa: ${alpa}
// Cuti: ${cuti}
// Lembur: ${jamLembur} jam
// Gaji yang anda terima bulan ini adalah Rp. ${gaji}.`;
// }

// let januari = [
//   ["H", "H", "H", "T", "H", "H"],
//   ["H", "H", ["A", "C"], "H", "H", "H"],
//   ["H", "H", "H", "H", "H", "H"],
//   ["H", "H", "H", "H", ["A", "S"], "H"],
// ];

// let februari = [
//   ["H", "H", "H", "H", ["L", 3], "H"],
//   ["H", "H", "H", "H", "H", "H"],
//   ["H", ["L", 2], "H", "H", "H", "H"],
//   ["H", "H", "H", "H", "H", "H"],
// ];

// let maret = [
//   ["H", "H", "H", "H", "H", "H"],
//   [["A", "B"], "H", "H", "H", "H", "H"],
//   ["H", "H", "T", "H", "H", "H"],
//   ["H", "H", "H", "H", ["A", "B"], "H"],
// ];

// let april = [["H", "H", "H", "H", "H", "H"]];

// console.log(payroll(januari));

// /*
// Absensi Bulan ini :
// Hadir: 22
// Sakit: 1
// Terlambat: 1
// Alpa: 0
// Cuti: 1
// Lembur: 0 jam
// Gaji yang anda terima bulan ini adalah Rp. 4950000.
// */

// console.log("------------------------------");

// console.log(payroll(februari));
// /*
// Absensi Bulan ini :
// Hadir: 24
// Sakit: 0
// Terlambat: 0
// Alpa: 0
// Cuti: 0
// Lembur: 5 jam
// Gaji yang anda terima bulan ini adalah Rp. 5750000.
// */
// console.log("------------------------------");
// console.log(payroll(maret));
// /*
// Absensi Bulan ini :
// Hadir: 22
// Sakit: 0
// Terlambat: 1
// Alpa: 2
// Cuti: 0
// Lembur: 0 jam
// Gaji yang anda terima bulan ini adalah Rp. 4550000.
// */
// console.log("------------------------------");
// console.log(payroll(april));
// // Data absen tidak lengkap!
// console.log(payroll());
// // Invalid data!

// -------------- ... ----------------- THE-SECTION
