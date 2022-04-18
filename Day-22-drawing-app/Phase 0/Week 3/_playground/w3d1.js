// ------------------------- GROUPING ------------------------- THE-SECTION

// function groupByAge(arr) {
//   let result = {};
//   for (let i = 0; i < arr.length; i++) {
//     let age = 2022 - arr[i];
//     if (result[age] === undefined) {
//       result[age] = 0;
//     }
//     result[age]++;
//   }
//   return result;
// }

// console.log(groupByAge([2004, 1992, 1822, 2004, 1822, 1996, 1996]));

/*
    { '18': 2, '26': 2, '30': 1, '200': 2 }
*/

// 2022
// 09:11 - 09:26

// ------------------------- CHANGE ME! ------------------------- THE-SECTION

// function changeMe(arr) {
//   if (arr.length === 0) {
//     console.log();
//   } else {
//     for (let i = 0; i < arr.length; i++) {
//       let obj = {};
//       obj.firstName = arr[i][0];
//       obj.lastName = arr[i][1];
//       obj.gender = arr[i][2];
//       if (arr[i][3]) {
//         obj.age = 2022 - arr[i][3];
//       } else {
//         obj.age = "Invalid Birth Year";
//       }
//       console.log(`${i + 1}. ${arr[i][0]} ${arr[i][1]}:`);
//       console.log(obj);
//     }
//   }
// }

// changeMe([
//   ["Christ", "Evans", "Male", 1982],
//   ["Robert", "Downey", "Male"],
// ]);

// changeMe([]);

// ------------------------- COUNT ME! ------------------------- THE-SECTION

// function countMe(arr) {
//   let obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (!obj[arr[i]]) {
//       obj[arr[i]] = 0;
//     }
//     obj[arr[i]]++;
//   }

//   return obj;
// }

// console.log(countMe(["Sofyan", "Ricky", "Sofyan", "Semmi", "Semmi", "Wika"]));

// ------------------------- RATA2, LOWEST, HIGHEST ------------------------- THE-SECTION

// // ESTIMATE = 15 MIN

// // Menentukan rata-rata dari tiap baris array
// // input => [[5, 89, 32], [77, 1, 98], [3, 9, 10], [2, 99, 72]];
// // output => [ 42, 58.666666666666664, 7.333333333333333, 57.666666666666664 ]
// function average(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     for (let j = 0; j < arr[i].length; j++) {
//       sum += arr[i][j];
//     }
//     let avg = sum / arr[i].length;
//     result.push(avg);
//   }
//   return result;
// }

// // Menentukan rata2 terkecil
// // output => 7.333333333333333
// function lowest(arr) {
//   let avg = average(arr);
//   let min = avg[0];
//   for (let i = 0; i < avg.length; i++) {
//     if (avg[i] < min) {
//       min = avg[i];
//     }
//   }
//   return min;
// }

// // Menentukan angka terbesar
// // output => 58.666666666666664
// function highest(arr) {
//   let avg = average(arr);
//   let max = avg[0];
//   for (let i = 0; i < avg.length; i++) {
//     if (avg[i] > max) {
//       max = avg[i];
//     }
//   }
//   return max;
// }

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

// ------------------------- SEARCH PRODUCTS ------------------------- THE-SECTION

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

// //Pencarian sesuai kata yang diinputkan
// // input => 'mie'
// // output => ['Betamart', '8Twelve']
// // karena di dalam array products, keyword 'mie' terdapat di array indeks ke 0 dan ke 1,
// // sehingga nama toko yang menyediakan produk tersebut menyesuaikan indek dimana produk ditemukan (indeks 0 dan 1)
// function search(obj, keyword) {
//   //panggil manual split dan sesuaikan parameternya
//   let result = [];
//   let allProducts = obj.products;
//   let isFound = false;

//   for (let i = 0; i < allProducts.length; i++) {
//     for (let j = 0; j < allProducts[i].length; j++) {
//       //minyak goreng
//       let perKataProduk = manualSplit(allProducts[i][j]); // ['minyak', 'goreng']
//       for (let k = 0; k < perKataProduk.length; k++) {
//         if (perKataProduk[k] === keyword) {
//           result.push(obj.name[i]);
//           isFound = true;
//           break;
//         }
//       }
//       if (isFound) {
//         break;
//       }
//     }
//   }
//   return result;
// }

// let market = {
//   name: ["Betamart", "8Twelve", "MiniMall"],
//   products: [
//     ["minyak goreng", "keju", "mie rebus", "mie goreng"],
//     ["mie pedas", "sirup jeruk", "sirup mangga"],
//     ["kentang goreng", "kentang goreng keju", "keju slice"],
//   ],
// };

// // panggil function disini dan sesuaikan parameternya
// console.log(search(market, "mie"));

// ------------------------- NBA MATCH ------------------------- THE-SECTION

// /**
//  * NBA match
//  * =====================
//  *
//  * Kita mendapat tabel pertandingan basket berupa array multidimensi (cek input dibawah), kita ditugaskan untuk mengolah data menjadi data pertandingan dan total poin per teamnya. untuk poin kemenangan akan dapat 1 dan lose 0.
//  * buatlah function generateTeamStatus dengan input dan output seperti di contoh !
//  */

// const input = [
//   ["Team 1", "Team 2", "Score"],
//   ["clippers", "suns", "113-115"],
//   ["lakers", "mavericks", "122-112"],
//   ["gsw", "clippers", "97-118"],
//   ["suns", "lakers", "131-101"],
//   ["mavericks", "gsw", "104-105"],
//   ["clippers", "mavericks", "120-93"],
//   ["lakers", "gsw", "101-106"],
//   ["suns", "mavericks", "121-119"],
// ];

// function generateTeamStatus(matchTable) {
//   //   let teamArray = [];
//   //   let found = false;

//   //   // CARI DAFTAR TIM
//   //   for (let i = 1; i < matchTable.length; i++) {
//   //     //["clippers", "suns", "113-115"],
//   //     for (let j = 0; j < matchTable[i].length - 1; j++) {
//   //       //'clippers' 'suns'
//   //       for (let k = 0; k < teamArray.length; k++) {
//   //         if (teamArray[k] === matchTable[i][j]) {
//   //           found = true;
//   //           break;
//   //         }
//   //       }
//   //       if (!found) {
//   //         teamArray.push(matchTable[i][j]);
//   //       }
//   //     }
//   //   }

//   //   //   console.log(teamArray);
//   //   //teamArray = [ 'clippers', 'suns', 'lakers', 'mavericks', 'gsw' ]

//   //   let obj = {};
//   //   for (let i = 0; i < teamArray.length; i++) {
//   //     obj[teamArray[i]] = {
//   //       match: [],
//   //       totalPoin: 0,
//   //     };
//   //   }

//   let obj = {};
//   for (let i = 1; i < matchTable.length; i++) {
//     if (!obj[matchTable[i][0]]) {
//       obj[matchTable[i][0]] = {
//         match: [],
//         totalPoin: 0,
//       };
//     }

//     if (!obj[matchTable[i][1]]) {
//       obj[matchTable[i][1]] = {
//         match: [],
//         totalPoin: 0,
//       };
//     }
//   }

//   console.log(obj);

//   for (let key in obj) {
//     //clippers
//     for (let i = 1; i < matchTable.length; i++) {
//       // ["clippers", "suns", "113-115"],
//       let indexStrip;
//       for (let j = 0; j < matchTable[i][2].length; j++) {
//         //113-115
//         if (matchTable[i][2][j] === "-") {
//           indexStrip = j;
//           break;
//         }
//       }

//       let score1 = "";
//       let score2 = "";
//       for (let j = 0; j < matchTable[i][2].length; j++) {
//         //113-115
//         if (j < indexStrip) {
//           score1 += matchTable[i][2][j];
//         } else if (j > indexStrip) {
//           score2 += matchTable[i][2][j];
//         }
//       }

//       // ["clippers", "suns", "113-115"],
//       if (matchTable[i][0] === key) {
//         if (Number(score1) > Number(score2)) {
//           obj[key].match.push([matchTable[i][1], "WIN"]);
//           obj[key].totalPoin++;
//         } else if (Number(score1) < Number(score2)) {
//           obj[key].match.push([matchTable[i][1], "LOSE"]);
//         }
//       } else if (matchTable[i][1] === key) {
//         if (Number(score1) > Number(score2)) {
//           obj[key].match.push([matchTable[i][0], "LOSE"]);
//         } else if (Number(score1) < Number(score2)) {
//           obj[key].match.push([matchTable[i][0], "WIN"]);
//           obj[key].totalPoin++;
//         }
//       }
//     }
//     // console.log(obj[key].match);
//   }

//   return JSON.stringify(obj, null, 2);
// }

// console.log(generateTeamStatus(input));
// // nanti outputnya begini ya:
// //   {
// //     "clippers": {
// //       "match": [
// //         [ "suns", "LOSE" ],
// //         [ "gsw", "WIN" ],
// //         [ "mavericks", "WIN" ]
// //       ],
// //       "totalPoin": 2
// //     },
// //     "suns": {
// //       "match": [
// //         [ "clippers", "WIN" ],
// //         [ "lakers", "WIN" ],
// //         [ "mavericks", "WIN" ]
// //       ],
// //       "totalPoin": 3
// //     },
// //     "lakers": {
// //       "match": [
// //         [ "mavericks", "WIN" ],
// //         [ "suns", "LOSE" ],
// //         [ "gsw", "LOSE" ]
// //       ],
// //       "totalPoin": 1
// //     },
// //     "mavericks": {
// //       "match": [
// //         [ "lakers", "LOSE" ],
// //         [ "gsw", "LOSE" ],
// //         [ "clippers", "LOSE" ],
// //         [ "suns", "LOSE" ]
// //       ],
// //       "totalPoin": 0
// //     },
// //     "gsw": {
// //       "match": [
// //         [ "clippers", "LOSE" ],
// //         [ "mavericks", "WIN" ],
// //         [ "lakers", "WIN" ]
// //       ],
// //       "totalPoin": 2
// //     }
// //   }

// // kemungkinan output di terminal akan seperti ini
// //   {
// //     clippers: { match: [ [Array], [Array], [Array] ], totalPoin: 2 },
// //     suns: { match: [ [Array], [Array], [Array] ], totalPoin: 3 },
// //     lakers: { match: [ [Array], [Array], [Array] ], totalPoin: 1 },
// //     mavericks: { match: [ [Array], [Array], [Array], [Array] ], totalPoin: 0 },
// //     gsw: { match: [ [Array], [Array], [Array] ], totalPoin: 2 }
// //   }

// ------------------------- FOOTBALL MATCH ------------------------- THE-SECTION

// /**
//  * Footbal match
//  * =====================
//  *
//  * Kita mendapat tabel pertandingan sepak bola berupa array multidimensi (cek input dibawah), kita ditugaskan untuk mengolah data menjadi data pertandingan dan total poin per teamnya. untuk poin kemenangan akan dapat 3, draw akan dapat 1 , dan lose 0.
//  * buatlah function generateTeamStatus dengan input dan output seperti di contoh !
//  */

// const input = [
//   ["Team 1", "Team 2", "Score"],
//   ["Juventus", "MU", "0-3"],
//   ["Chelsea", "MU", "1-1"],
//   ["Juventus", "Chelsea", "2-0"],
// ];

// function generateTeamStatus(matchTable) {
//   let teamArray = [];
//   let found = false;

//   for (let i = 1; i < matchTable.length; i++) {
//     for (let j = 0; j < matchTable[i].length - 1; j++) {
//       for (let k = 0; k < teamArray.length; k++) {
//         if (teamArray[k] === matchTable[i][j]) {
//           found = true;
//           break;
//         }
//       }
//       if (!found) {
//         teamArray.push(matchTable[i][j]);
//       }
//     }
//   }

//   //[ 'Juventus', 'MU', 'Chelsea' ]

//   let obj = {};
//   for (let i = 0; i < teamArray.length; i++) {
//     obj[teamArray[i]] = {
//       match: [],
//       totalPoin: 0,
//     };
//   }

//   for (let key in obj) {
//     for (let i = 1; i < matchTable.length; i++) {
//       //["Juventus", "MU", "0-3"]

//       let indexStrip;
//       for (let j = 0; j < matchTable[i][2].length; j++) {
//         if (matchTable[i][2][j] === "-") {
//           indexStrip = j;
//         }
//       }
//       let score1 = "";
//       let score2 = "";
//       for (let j = 0; j < matchTable[i][2].length; j++) {
//         if (j < indexStrip) {
//           score1 += matchTable[i][2][j];
//         } else if (j > indexStrip) {
//           score2 += matchTable[i][2][j];
//         }
//       }

//       if (key === matchTable[i][0]) {
//         if (Number(score1) > Number(score2)) {
//           obj[key].match.push([matchTable[i][1], "WIN"]);
//           obj[key].totalPoin += 3;
//         } else if (Number(score1) === Number(score2)) {
//           obj[key].match.push([matchTable[i][1], "DRAW"]);
//           obj[key].totalPoin += 1;
//         } else if (Number(score1) < Number(score2)) {
//           obj[key].match.push([matchTable[i][1], "LOSE"]);
//         }
//       } else if (key === matchTable[i][1]) {
//         if (Number(score1) < Number(score2)) {
//           obj[key].match.push([matchTable[i][0], "WIN"]);
//           obj[key].totalPoin += 3;
//         } else if (Number(score1) === Number(score2)) {
//           obj[key].match.push([matchTable[i][0], "DRAW"]);
//           obj[key].totalPoin += 1;
//         } else if (Number(score1) > Number(score2)) {
//           obj[key].match.push([matchTable[i][0], "LOSE"]);
//         }
//       }
//     }
//     console.log(obj[key].match);
//   }
//   return obj;
// }

// console.log(generateTeamStatus(input));
// // nanti outputnya begini ya:
// // {
// //   juventus: {
// //     match: [
// //       ["MU", "LOSE"],
// //       ["chelsea", "WIN"],
// //     ],
// //     totalPoin: 3,
// //   },
// //   MU: {
// //     match: [
// //       ["juventus", "WIN"],
// //       ["chelsea", "DRAW"],
// //     ],
// //     totalPoin: 4,
// //   },
// //   chelsea: {
// //     match: [
// //       ["MU", "DRAW"],
// //       ["juventus", "LOSE"],
// //     ],
// //     totalPoin: 1,
// //   },
// // };

// ------------------------- MOVIE DATABASE ------------------------- THE-SECTION

// /**
//  * ==============
//  * Movie Database
//  * ==============
//  *
//  * Instruction
//  * -----------
//  * findMovie adalah sebuah function yang mengelompokkan data film dari input yang diberikan
//  * berdasarkan tahun film itu dibuat.
//  *
//  * Restrictions
//  * ------------
//  * 1. input berupa array multidimensional yang setiap entri-nya merupakan sebuah array
//  *    dengan format [<nama film>, <Tanggal rilis>, <genre>]
//  * 2. Output berupa object dengan key tahun rilis dari masing-masing film
//  *    dengan value berupa array of objects dengan format:
//  *    { <date (tanggal dan bulan)>, <title>, <genre> }
//  *
//  * Rules
//  * -----
//  * 1. Dilarang menggunakan built-in function split, slice, splice
//  */

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

// function findMovie(arrMovie) {
//   let obj = {};

//   for (let i = 0; i < arrMovie.length; i++) {
//     let splitDate = manualSplit(arrMovie[i][1]);
//     let year = splitDate[2];
//     let date = splitDate[0] + " " + splitDate[1];
//     let title = arrMovie[i][0];
//     let genre = arrMovie[i][2];
//     if (!obj[year]) {
//       obj[year] = [];
//     }
//     obj[year].push({ date: date, title: title, genre: genre });
//   }
//   return obj;
// }

// var movie1 = [
//   ["Suicide Squad", "3 May 2016", "Action"],
//   ["Interstellar", "6 June 2018", "Sci-Fi"],
//   ["La La Land", "24 June 2018", "Romatic"],
//   ["Fast Furious", "2 January 2019", "Action"],
//   ["IT", "7 January 2019", "Horror"],
//   ["Justice League", "14 April 2019", "Action"],
//   ["Lion King", "20 July 2019", "Animation"],
// ];
// console.log(findMovie(movie1));
// /*
// {
//   2016: [
//     { date: "3 May", title: "Suicide Squad", genre: "Action" }
//   ],
//   2018: [
//     { date: "6 June", title: "Interstellar", genre: "Sci-Fi" },
//     { date: "24 June", title: "La La Land", genre: "Romantic" }
//   ],
//   2019: [
//     { date: "2 January", title: "Fast Furious", genre: "Action" },
//     { date: "7 January", title: "IT", genre: "Horror" },
//     { date: "14 April", title: "Justice League", genre: "Action" },
//     { date: "20 July", title: "Lion King", genre: "Animation" }
//   ]
// }
// */
// var movie2 = [
//   ["Joker", "4 October 2019", "Thriller"],
//   ["Parasite", "24 June 2019", "Drama"],
//   ["Into the Spider-verse", "14 December 2018", "Animation"],
//   ["Avengers: Infinity War", "27 April 2018", "Action"],
//   ["Avengers: Endgame", "26 April 2019 ", "Action"],
//   ["Coco", "22 November 2017", "Animation"],
//   ["Your Name", "7 April 2017", "Animation"],
// ];
// console.log(findMovie(movie2));
// // {
// //   '2017': [
// //     { date: '22 November', title: 'Coco', genre: 'Animation' },
// //     { date: '7 April', title: 'Your Name', genre: 'Animation' }
// //   ],
// //   '2018': [
// //     { date: '14 December', title: 'Into the Spider-verse', genre: 'Animation' },
// //     { date: '27 April', title: 'Avengers: Infinity War', genre: 'Action' }
// //   ],
// //   '2019': [
// //     { date: '4 October', title: 'Joker', genre: 'Thriller' },
// //     { date: '24 June', title: 'Parasite', genre: 'Drama' },
// //     { date: '26 April', title: 'Avengers: Endgame', genre: 'Action' }
// //   ]
// // }

// ------------------------- MOVIE DATABASE 2 ------------------------- THE-SECTION

// /**
//  * ==============
//  * Movie Database 2
//  * ==============
//  *
//  * Instruction
//  * -----------
//  * findMovie adalah sebuah function yang memberikan data rekomendasi film dari input yang diberikan berdasarkan rating terbaik
//  *
//  * Directions
//  * ------------
//  * 1. input berupa array multidimensional yang setiap entri-nya merupakan sebuah array
//  *    dengan format [<nama film>, <Tanggal rilis>, <genre>, <rating>]
//  * 2. Output berupa object dengan key 3topMovie dengan value array 3 movie teratas yang memiliki rate paling baik, dan key bestMovie dengan value movie yang paling bagus ratingnya
//  *
//  * Rules
//  * -----
//  * 1. Dilarang menggunakan built-in function split, slice, splice
//  */

// function sortingMovie(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let temp;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j][3] > arr[i][3]) {
//         temp = arr[j];
//         arr[j] = arr[i];
//         arr[i] = temp;
//       }
//     }
//   }
//   return arr;
// }

// function recommendMovie(arrMovie) {
//   let obj = {
//     "3topMovie": [],
//     bestMovie: {
//       title: "",
//       date: "",
//       genre: "",
//       rating: 0,
//     },
//   };

//   let sortedMovie = sortingMovie(arrMovie);

//   for (let i = 0; i < sortedMovie.length; i++) {
//     let title = sortedMovie[i][0];
//     let date = sortedMovie[i][1];
//     let genre = sortedMovie[i][2];
//     let rating = sortedMovie[i][3];
//     if (i < 3) {
//       obj["3topMovie"].push([title, date, genre, rating]);
//     }
//     if (i === 0) {
//       obj.bestMovie.title = title;
//       obj.bestMovie.date = date;
//       obj.bestMovie.genre = genre;
//       obj.bestMovie.rating = rating;
//     }
//   }
//   return obj;
// }
// var movie1 = [
//   ["Suicide Squad", "3 May 2016", "Action", 4],
//   ["Interstellar", "6 June 2018", "Sci-Fi", 4.5],
//   ["La La Land", "24 June 2018", "Romatic", 5],
//   ["Fast Furious", "2 January 2019", "Action", 3.5],
//   ["IT", "7 January 2019", "Horror", 2.75],
//   ["Justice League", "14 April 2019", "Action", 4.75],
//   ["Lion King", "20 July 2019", "Animation", 3],
// ];
// console.log(recommendMovie(movie1));
// /*
// {
//   3topMovie: [
//     ["La La Land", "24 June 2018", "Romatic", 5],
//     ["Justice League", "14 April 2019", "Action", 4.75],
//     ["Interstellar", "6 June 2018", "Sci-Fi", 4.5]
//   ],
//   bestMovie: {
//     title: "La La Land",
//     date: "24 June 2018",
//     genre: "Romatic",
//     rating: 5
//   }
// }
// */
// var movie2 = [
//   ["Joker", "4 October 2019", "Thriller", 5],
//   ["Parasite", "24 June 2019", "Drama", 4],
//   ["Into the Spider-verse", "14 December 2018", "Animation", 3],
//   ["Avengers: Infinity War", "27 April 2018", "Action", 3],
//   ["Avengers: Endgame", "26 April 2019 ", "Action", 3.5],
//   ["Coco", "22 November 2017", "Animation", 4.25],
//   ["Your Name", "7 April 2017", "Animation", 2],
// ];
// console.log(recommendMovie(movie2));
// // {
// //   3topMovie: [
// //     ["Joker", "4 October 2019", "Thriller", 5,
// //     ["Coco", "22 November 2017", "Animation", 4.25],
// //     ["Parasite", "24 June 2019", "Drama", 4]
// //   ],
// //   bestMovie: {
// //     title: "Joker",
// //     date: "4 October 2019",
// //     genre: "Thriller",
// //     rating: 5
// //   }
// // }

// ------------------------- PEMILU HOKAGE ------------------------- THE-SECTION

// /*
// PEMILU HOKAGE KE-12
// =====================
// Dibeberapa desa sedang diadakan pemilu hokage ke 12, orang terpilih di tiap desa akan di angkat sebagai hokage di tiap desanya. tiap warga akan mengusulkan 1 nama yang akan di pilih, nama yang paling banyak di usulkan akan di angkat sebagai hokage, warga juga berhak tidak mengusulkan nama.

// Buatlah sebuah function yang akan membantu perhitungan pemilu kali ini.
// Function akan menerima 1 parameter berupa array multidimensi dengan format [ [<nama warga>, <nama yang diusulkan>] ]
// Funciton akan mengembalikan object dengan format :
// {
//   <nama yang diusulkan> : [<nama warga>]
//   <nama yang diusulkan> : [<nama warga>]
//   golput : [<nama warga>] // Hanya jika ada yang tidak mengusulkan nama
//   hokage terpilih : <warga yang paling banyak diusulkan>
// }

// contoh :
// input : [
//   ["Sikura", "Narto"],
//   ["Saske", "Borto"],
//   ["Ichita", ""],
//   ["Takkashi", "Narto"],
//   ["Hinaya", "Narto"],
//   ["Orochimiru", ""]
// ]
// outut : {
//   Narto : ["Sikura", "Takkashi", "Hinaya"],
//   Borto : ["Saske"],
//   Golput : ["Ichita", "Orochimiru"]
//   "Hokage Terpilih" : "Narto"
// }
// */

// function pemilu(arr) {
//   let obj = {};

//   for (let i = 0; i < arr.length; i++) {
//     let pemilih = arr[i][0];
//     let calon = arr[i][1];
//     if (!obj[calon]) {
//       if (calon !== "") {
//         obj[calon] = [];
//       } else if (calon === "") {
//         obj["golput"] = [];
//       }
//     }
//     if (calon !== "") {
//       obj[calon].push(pemilih);
//     } else if (calon === "") {
//       obj["golput"].push(pemilih);
//     }
//   }

//   let max;
//   let winner;
//   for (let key in obj) {
//     max = obj[key].length;
//     winner = key;
//     break;
//   }

//   for (let key in obj) {
//     if (key !== "golput") {
//       if (obj[key].length > max) {
//         max = obj[key].length;
//         winner = key;
//       }
//     }
//   }

//   obj["Hokage Terpilih"] = winner;

//   return obj;
// }

// const desa1 = [
//   ["Sikura", "Narto"],
//   ["Saske", "Borto"],
//   ["Ichita", ""],
//   ["Takkashi", "Narto"],
//   ["Hinaya", "Narto"],
//   ["Orochimiru", ""],
// ];
// console.log(pemilu(desa1));
// /*
// {
//   Narto : ["Sikura", "Takkashi", "Hinaya"],
//   Borto : ["Saske"],
//   Golput : ["Ichita", "Orochimiru"],
//   "Hokage Terpilih" : "Narto"
// }
// */

// const desa2 = [
//   ["Jariya", "Tsudena"],
//   ["Neja", "Raga"],
//   ["Katubo", "Raga"],
//   ["Jicho", "Tsudena"],
//   ["Saori", "Raga"],
// ];
// console.log(pemilu(desa2));
// /*
// {
//   Tsudena : ["Jariya", "Jicho"],
//   Raga : ["Neja", "Katubo", "Saori"],
//   "Hokage Terpilih" : "Raga"
// }
// */

// ------------------------- BUAT PUKIS ------------------------- THE-SECTION

// /*
// Olah data dalam array dan object
// ada sebuah function "buatPukis" yang menerima 1 parameter ingredient yang berupa nested array.
// kamu di minta untuk membuat sebuah code yang mengecek berapa banyak jumlah kue pukis yang dapat di buat dengan bahan yang ada.
// untuk membuat sebuah kue pukis di perlukan
//     flour : 100
//     sugar : 50
//     chocolate : 20
// sedangkan untuk egg, 1 buah egg dapat di gunakan untuk membuat 4 kue pukis.
// contoh :
// - input :
//     [["flour", 1000], ["egg", 5], ["sugar", 400], ["chocolate", 200]]
// - output :
// {
//   kuePukis: 8,
//   info: 'Bahan yang tersisa adalah flour : 200, egg : 3, dan chocolate : 40'
// }
// Jika ada bahan tidak lengkap, ouput nya `Bahan - bahan tidak lengkap untuk membuat kue pukis`
// Jika tidak ada bahan sama sekali, output nya `Tidak ada bahan untuk membuat kue pukis`
// ketentuan:
// - dilarang menggunakan built-in function, selain .push();
// */

// function buatPukis(ingredients) {
//   if (ingredients.length == 0) {
//     return "Tidak ada bahan untuk membuat kue pukis";
//   }

//   if (ingredients.length < 4) {
//     return "Bahan - bahan tidak lengkap untuk membuat kue pukis";
//   }

//   let obj = {
//     kuePukis: 0,
//     sisa: {},
//   };

//   //       flour : 100
//   //     sugar : 50
//   //     chocolate : 20
//   // sedangkan untuk egg, 1 buah egg dapat di gunakan untuk membuat 4 kue pukis.

//   let min = [];
//   for (let i = 0; i < ingredients.length; i++) {
//     if (ingredients[i][0] === "flour") {
//       min.push(Math.floor(ingredients[i][1] / 100));
//     } else if (ingredients[i][0] === "egg") {
//       min.push(Math.floor(ingredients[i][1] / 0.25));
//     } else if (ingredients[i][0] === "sugar") {
//       min.push(Math.floor(ingredients[i][1] / 50));
//     } else if (ingredients[i][0] === "chocolate") {
//       min.push(Math.floor(ingredients[i][1] / 20));
//     }
//   }

//   let lowest = min[0];
//   for (let i = 0; i < min.length; i++) {
//     if (min[i] < lowest) {
//       lowest = min[i];
//     }
//   }

//   obj["kuePukis"] = lowest;

//   for (let i = 0; i < ingredients.length; i++) {
//     if (ingredients[i][0] === "flour") {
//       let sisa = ingredients[i][1] - lowest * 100;
//       if (sisa !== 0) {
//         obj.sisa["flour"] = sisa;
//       }
//     } else if (ingredients[i][0] === "egg") {
//       let sisa = Math.ceil(ingredients[i][1] - lowest * 0.25);
//       if (sisa !== 0) {
//         obj.sisa["egg"] = sisa;
//       }
//     } else if (ingredients[i][0] === "sugar") {
//       let sisa = ingredients[i][1] - lowest * 50;
//       if (sisa !== 0) {
//         obj.sisa["sugar"] = sisa;
//       }
//     } else if (ingredients[i][0] === "chocolate") {
//       let sisa = ingredients[i][1] - lowest * 20;
//       if (sisa !== 0) {
//         obj.sisa["chocolate"] = sisa;
//       }
//     }
//   }

//   return obj;
// }

// console.log(
//   buatPukis([
//     ["flour", 1000],
//     ["egg", 5],
//     ["sugar", 400],
//     ["chocolate", 200],
//   ])
// );
// /*
// {
//     kuePukis: 8,
//     sisa: {
//         flour: 200,
//         egg: 3,
//         chocolate: 40
//     }
// }
// */
// console.log(
//   buatPukis([
//     ["flour", 1000],
//     ["sugar", 400],
//     ["chocolate", 200],
//   ])
// );
// // Bahan - bahan tidak lengkap untuk membuat kue pukis

// console.log(buatPukis([]));
// //Tidak ada bahan untuk membuat kue pukis

// ------------------------- RETAIL DATA ------------------------- THE-SECTION

// const retails = [
//   ["GrandLucky", 10, "SCBD", 22],
//   ["FoodHall", 10, "Setiabudi", 21],
//   ["RanchMarket", 11, "Pondok Indah", 21],
//   ["Giant", 10, "Slipi", 19],
//   ["RanchMarket", 11, "Mega Kuningan", 21],
//   ["FoodHall", 10, "Epicentrum", 21],
//   ["LotteMart", 10, "Kuningan City", 21],
//   ["RanchMarket", 11, "Kemang", 21],
// ];

// function arrangeData(retails) {
//   let obj = {};

//   for (let i = 0; i < retails.length; i++) {
//     // ["GrandLucky", 10, "SCBD", 22],

//     if (!obj[retails[i][0]]) {
//       obj[retails[i][0]] = {
//         jamBuka: retails[i][1],
//         jamTutup: retails[i][3],
//         locations: [],
//       };
//     }
//     obj[retails[i][0]].locations.push(retails[i][2]);
//   }

//   return obj;
// }

// // console.log(arrangeData(retails));
// // 1.  Kelompokkan lokasi dan jam operasional retail berdsarkan nama retail
// // function arrangeData(retails){}
// /** output = {
//   GrandLucky: {
//       jamBuka: 10,
//       jamTutup:22,
//       locations: ['SCBD']
//   },
//   FoodHall: {
//       jamBuka: 10,
//       jamTutup:21,
//       locations: ['Setiabudi', 'Epicentrum']
//   },
//   RanchMarket: {
//       jamBuka: 11,
//       jamTutup:21,
//       locations: ['Pondok Indah', 'Mega Kuningan', 'Kemang']
//   },
//   Giant: {
//       jamBuka: 10,
//       jamTutup:19,
//       locations: ['Slipi']
//   },
//   LotteMart: {
//       jamBuka: 10,
//       jamTutup:21,
//       locations: ['Kuningan City']
//   },
// } **/

// function getRetailWithMostBranches(retails) {
//   let obj = {};

//   let arrangedData = arrangeData(retails);

//   let maxIndex;
//   let max;
//   for (let key in arrangedData) {
//     maxIndex = key;
//     max = arrangedData[key].locations.length;
//     break;
//   }

//   for (let key in arrangedData) {
//     if (arrangedData[key].locations.length > max) {
//       maxIndex = key;
//       max = arrangedData[key].locations.length;
//     }
//   }

//   obj = {
//     retailName: maxIndex,
//     totalBranches: max,
//   };
//   return obj;
// }

// // console.log(getRetailWithMostBranches(retails));
// // 2. Cari Retail dengan cabang yang paling banyak
// // function getRetailWithMostBranches(retails){}
// /** output = {
//   retailName: 'RanchMarket',
//   totalBranches: 3
// } **/

// function getRetailData(retailName, retails) {
//   let obj;

//   let arrangedData = arrangeData(retails);

//   for (let key in arrangedData) {
//     if (key === retailName) {
//       obj = {
//         retailName: key,
//         jamBuka: arrangedData[key].jamBuka,
//         jamTutup: arrangedData[key].jamTutup,
//         locations: arrangedData[key].locations,
//       };
//     }
//   }
//   return obj;
// }

// // console.log(getRetailData("LotteMart", retails));
// // 3. Cari data retail berdasarkan inputan user
// // function getRetailData(retailName, retails){}
// /** output = {
//   retailName: 'LotteMart',
//   jamBuka: 10,
//   jamTutup:21,
//   locations: ['Kuningan City']
// } **/

// function getOperationalTime(retails) {
//   let obj = {};

//   let arrangedData = arrangeData(retails);
//   for (let key in arrangedData) {
//     let total = arrangedData[key].jamTutup - arrangedData[key].jamBuka;
//     obj[key] = {
//       totalTime: total,
//     };
//   }
//   return obj;
// }

// // console.log(getOperationalTime(retails));
// // 4. Get durasi jam operasional setiap retail
// // function getOperationalTime(retails){}
// /** output = {
//   GrandLucky: {
//      totalTime: 12
//   },
//   FoodHall: {
//       totalTime: 11
//   },
//   RanchMarket: {
//      totalTime: 10
//   },
//   Giant: {
//      totalTime: 9
//   },
//   LotteMart: {
//      totalTime: 11
//   },
// }**/

// function getMinMaxTime(retails) {
//   let result = [];

//   let opTime = getOperationalTime(retails);

//   let maxIndex;
//   let minIndex;
//   let max;
//   let min;
//   for (let key in opTime) {
//     maxIndex = key;
//     minIndex = key;
//     max = opTime[key].totalTime;
//     min = opTime[key].totalTime;
//     break;
//   }

//   for (let key in opTime) {
//     if (opTime[key].totalTime > max) {
//       maxIndex = key;
//       max = opTime[key].totalTime;
//     }
//     if (opTime[key].totalTime < min) {
//       minIndex = key;
//       min = opTime[key].totalTime;
//     }
//   }

//   result.push(min);
//   result.push(max);

//   return result;
// }
// console.log(getMinMaxTime(retails));
// // 5. Get jam operasional paling sedikit dan paling lama
// // function getMinMaxTime(retails){}
// /**
//  * output = [9, 12]
//  */

// ------------------------- COMPANY MATCH ------------------------- THE-SECTION

// /**
//  * =============
//  * Company Match
//  * =============
//  *
//  *
//  * Company match adalah sebuah fungsi yang akan mencocokan requirement dari sebuah perusahaan dengan skill yang dimiliki oleh seseorang.
//  *
//  * fungsi ini akan menerima dua parameter yang berupa sebuah object.
//  *
//  * Parameter pertama adalah sebuah object perusahaan dengan beberapa data seperti: nama perusahaan, job yang ditawarkan, dan requirement yang dibutuhkan untuk memdapatkan pekerjaan
//  * Parameter kedua adalah sebuah object pelamar dengan beberapa data seperti: nama pelamar, skill pelamar, dan job yang dinginkan oleh pelamar tersebut.
//  *
//  * Fungsi ini akan menghitung persentase berapa cocok perusahaan dan pelamar yang dikirimkan dengan beberapa syarat.
//  * 1. Jika job yang ditawarkan oleh perusahaan tidak sesuai dengan job yang diinginkan maka persentase mereka adalah 0%
//  * 2. Jika seluruh requirement yang diminta oleh perusahaan dipenuhi oleh pelamar maka persentase mereka adalah 100%.
//  * 3. Jika ada beberapa requirement yang tidak dipenuhi pelamar maka persentase akan dihitung dengan rumus [ jumlah requirement yang dipenuhi] / [ requirement yang diminta]
//  *    contoh: Terdapat 3 requirement pada perusahan tetapi pelamar hanya memenuhi 2 requirement oleh karena itu persentase pelamar tersebut adalah 66% ( dibulatkan ke bawah)
//  *
//  * Jika seseorang mendapatkan persentase diatas 60% maka tampilkanlah pesan `Selamat [nama pelamar] anda cocok dengan perusahaan [ nama perusahaan] dengan persentase kecocokan [ persentas]
//  * Jika tidak maka tampilkan pesan `Mohon maaf [nama pelamar] anda belum cocok dengan perusaahan [nama perusaahn] anda hanya mendapatkan persentase kecocokan [ persentase]
//  */

// function companyMatch(company, user) {
//   let compReq = company.requirement;
//   let userReq = user.skills;
//   let count = 0;

//   for (let i = 0; i < compReq.length; i++) {
//     for (let j = 0; j < userReq.length; j++) {
//       if (compReq[i] === userReq[j]) {
//         count++;
//       }
//     }
//   }

//   let percentage = Math.floor((count / compReq.length) * 100);
//   if (percentage > 60) {
//     return `Selamat ${user.name} anda cocok dengan perusahaan ${company.name} dengan persentase kecocokan ${percentage}%`;
//   } else {
//     return `Mohon maaf ${user.name} anda belum cocok dengan perusaahan ${company.name} anda hanya mendapatkan persentase kecocokan ${percentage}%`;
//   }
// }

// const company1 = {
//   requirement: ["HTML", "CSS", "JS"],
//   job: "Frontend Developer",
//   name: "Pesbok",
// };

// const john = {
//   name: "John",
//   applyAs: "Frontend Developer",
//   skills: ["HTML", "CSS", "JS"],
// };

// const kosasih = {
//   name: "Kosasih",
//   applyAs: "Backend Developer",
//   skills: ["Express", "Node", "PHP"],
// };

// const marry = {
//   name: "Marry",
//   applyAs: "Frontend Developer",
//   skills: ["HTML", "CSS"],
// };

// console.log(companyMatch(company1, john)); // Selamat John anda cocok dengan perusahaan Pesbok dengan persentase kecocokan 100%
// console.log(companyMatch(company1, kosasih)); // Mohon maaf Kosasih anda belum cocok dengan perusaahan Pesbok anda hanya mendapatkan persentase kecocokan 0%
// console.log(companyMatch(company1, marry)); // Selamat Marry anda cocok dengan perusahaan Pesbok dengan persentase kecocokan 66%
