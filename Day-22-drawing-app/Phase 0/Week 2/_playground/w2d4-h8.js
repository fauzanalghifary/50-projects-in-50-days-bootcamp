// ========================== LOWEST, HIGHEST, AVERAGE ======================================= THE-SECTION

// ESTIMATE = 15 MIN

// Menentukan angka terkecil
// output => 1

// function lowest(arr) {
//   let min = arr[0][0];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       if (arr[i][j] < min) {
//         min = arr[i][j];
//       }
//     }
//   }
//   return min;
// }

// // Menentukan angka terbesar
// // output => 99
// function highest(arr) {
//   let max = arr[0][0];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       if (arr[i][j] > max) {
//         max = arr[i][j];
//       }
//     }
//   }
//   return max;
// }

// // Menentukan rata-rata
// // output => 42.4
// function average(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       sum += arr[i][j];
//     }
//   }
//   return sum / arr.length;
// }

// // let angka = [5, 89, 32, 77, 98, 3, 9, 10, 2, 99];

// //case 2
// let angka = [
//   [5, 89, 32],
//   [77, 1, 98],
//   [3, 9, 10],
//   [2, 99, 72],
// ];

// //panggil function beserta parameternya disini
// console.log(lowest(angka));
// console.log(highest(angka));
// console.log(average(angka));

// ========================== SEARCH ======================================= THE-SECTION

// // ESTIMATE = 20 Min

// // split string menjadi array
// // input => 'kentang goreng keju'
// // output => ['kentang', 'goreng', 'keju']
// function manualSplit(str) {
//   let result = [];
//   let temp = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== " ") {
//       temp += str[i];
//     }

//     if (str[i] === " " || i === str.length - 1) {
//       result.push(temp);
//       temp = "";
//     }
//   }
//   return result;
// }

// // console.log(manualSplit("kentang goreng keju"));

// //Pencarian sesuai kata yang diinputkan
// // input => 'goreng'
// // output => ['minyak goreng', 'mie goreng', 'kentang goreng', 'kentang goreng keju']
// function search(arr, keyword) {
//   //panggil manual split dan sesuaikan parameternya
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     let split = manualSplit(arr[i]);
//     for (let j = 0; j < split.length; j++) {
//       if (split[j] === keyword) {
//         result.push(arr[i]);
//         break;
//       }
//     }
//   }
//   return result;
// }

// let products = [
//   "minyak goreng",
//   "mie rebus",
//   "mie goreng",
//   "mie pedas",
//   "sirup jeruk",
//   "sirup mangga",
//   "kentang goreng",
//   "kentang goreng keju",
//   "keju slice",
//   "keju parut keju",
// ];

// // panggil function disini dan sesuaikan parameternya
// console.log(search(products, "keju"));

// ========================== TotalTax ======================================= THE-SECTION

// //ESTIMATE : 45 Min

// //mendapatkan nama asset
// //input => 'rumah2'
// //output => 'rumah'
// function findAssetName(str) {
//   let output = "";

//   for (let i = 0; i < str.length; i++) {
//     if (!Number(str[i]) && Number(str[i]) !== 0) {
//       output += str[i];
//     }
//   }

//   return output;
// }

// // console.log(findAssetName("rumah1"));

// // menghitung jumlah pajak dari 1 aset
// // input => harga aset => 2000000
// //       => pajak => 2
// // output => 40000 (didapat dari (harga aset * pajak / 100) )
// function calculateTax(price, tax) {
//   return (price * tax) / 100;
// }

// // console.log(calculateTax(2000000, 2));

// // koversi number menjadi rupiah
// // input => 2357000000
// // output => Rp 2.357.000.000,00
// function numberToRupiah(num) {
//   let output = "Rp ";
//   let temp = "";
//   let str = String(num);
//   let count = 0;

//   for (let i = str.length - 1; i >= 0; i--) {
//     temp += str[i];
//     count++;
//     if (count === 3 && i !== 0) {
//       temp += ".";
//       count = 0;
//     }
//   }

//   for (let i = temp.length - 1; i >= 0; i--) {
//     output += temp[i];
//   }
//   output += ",00";
//   return output;
// }

// // console.log(numberToRupiah(2357000000));

// //total pajak
// function totalTax(arr) {
//   let totalTax = 0;
//   let taxList = [
//     ["rumah", 2],
//     ["mobil", 5],
//     ["motor", 10],
//     ["tanah", 2],
//   ];

//   for (let i = 0; i < arr.length; i++) {
//     let assetName = findAssetName(arr[i][0]);
//     for (let j = 0; j < taxList.length; j++) {
//       if (assetName === taxList[j][0]) {
//         let price = arr[i][1];
//         let tax = taxList[j][1];
//         let itemTax = calculateTax(price, tax);
//         totalTax += itemTax;
//       }
//     }
//   }
//   return numberToRupiah(Math.floor(totalTax));
// }

// let data = [
//   ["rumah1", 6000000000],
//   ["rumah2", 1000000000],
//   ["rumah3", 800000000],
//   ["rumah4", 400000000],
//   ["mobil1", 1200000000],
//   ["mobil2", 125000000],
//   ["mobil3", 500000000],
//   ["laptop1", 19000000],
//   ["laptop2", 30000000],
//   ["sepeda1", 12000000],
// ];
// // console.log(data.assets[1]);

// console.log(totalTax(data)); //Rp 255.250.000,00
// //hitung total pajak yang harus dibayar dan dijadikan format rupiah
// //panggil fungsi totalTax disini dan disesuaikan parameternya
