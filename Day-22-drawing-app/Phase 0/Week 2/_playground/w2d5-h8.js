// ------------------------- TAMBAHKAN PENUMPANG BUS ------------------------- THE-SECTION

// /*
// ===========================
// Tambah penumpang Bus
// ============================
// [INSTRUCTION]
// Terdapat function tambahPenumpangBus yang menerima 2 parameter berupa :
// :
// 1. array multidimensi yang berisi kondisi penumpang bus yang sudah menaiki bus
// 2. array penumpang bus yang ingin menaiki bus
// Fungsi ini akan mengembalikan array multidimensi yang sudah terisi oleh semua penumpang jika jumlah bangku yang kosong dan penumpang yang ingin naik pas / sama. (LIHAT EXAMPLE 1)
// Sedangkan fungsi ini akan mengembalikan string berupa list penumpang yang tidak mendapatkan kursi, jika jumlah bangku yang kosong tidak mencukupi (LIHAT EXAMPLE 2)
// [EXAMPLES]
// input 1 :
//   [
//     ['Hary', '', 'Miftah'],
//     ['', 'Tony', ''],
//     ['Udin', 'Paijo', 'Butet']
//   ]
// input 2 : ['Budi', 'Soleh', 'Miku']
// output :
//   [
//     ['Hary', 'Budi', 'Miftah'],
//     ['Soleh', 'Tony', 'Miku'],
//     ['Udin', 'Paijo', 'Butet']
//   ]
// --------------------------------------------
// input 1 :
//   [
//     ['Udin', '', ''],
//     ['', '', 'Dede'],
//     ['Saiful', 'Paijo', 'Butet']
//   ]
// input 2 : ['Alucard', 'Balmond', 'Eudora', 'Nana', 'Miya', 'Zilong','Layla', 'Grock']
// output :
// 'Miya, Zilong, Layla, dan Grock tidak mendapatkan kursi bus. Silahkan cari bus lainnya'
// [Rules]:
// - Dilarang menggunakan fungsi map, reduce, filter
// */

// function tambahPenumpangBus(arr1, arr2) {
//   let count = 0;
//   for (let i = 0; i < arr2.length; i++) {
//     let dapatKursi = false;
//     for (let j = 0; j < arr1.length; j++) {
//       for (let k = 0; k < arr1[j].length; k++) {
//         if (arr1[j][k] === "") {
//           arr1[j][k] = arr2[i];
//           dapatKursi = true;
//           count++;
//           break;
//         }
//       }
//       if (dapatKursi) {
//         break;
//       }
//     }
//   }

//   if (count === arr2.length) {
//     return arr1;
//   } else if (count !== arr2.length) {
//     let output = "";
//     for (let i = count; i < arr2.length; i++) {
//       if (i !== arr2.length - 1) {
//         output += `${arr2[i]}, `;
//       } else {
//         output += `dan ${arr2[i]}`;
//       }
//     }
//     output += " tidak mendapatkan kursi bus. Silahkan cari bus lainnya";
//     return output;
//   }
// }

// console.log(
//   tambahPenumpangBus(
//     [
//       // Parameter pertama
//       ["Hary", "", "Miftah"],
//       ["", "Tony", ""],
//       ["Udin", "Paijo", "Butet"],
//     ],
//     ["Budi", "Soleh", "Miku"] // parameter 2
//   )
// );
// /*
//   [
//     ['Hary', 'Budi', 'Miftah'],
//     ['Soleh', 'Tony', 'Miku'],
//     ['Udin', 'Paijo', 'Butet']
//   ]
//   */

// console.log(
//   tambahPenumpangBus(
//     [
//       ["Udin", "", ""],
//       ["", "", "Dede"],
//       ["Saiful", "Paijo", "Butet"],
//     ],
//     ["Alucard", "Balmond", "Eudora", "Nana", "Miya", "Zilong", "Layla", "Grock"]
//   )
// );
// /*
//   output :
//   'Miya, Zilong, Layla, dan Grock tidak mendapatkan kursi bus. Silahkan cari bus lainnya'
//   */

// ------------------------- TOTAL BELANJA ------------------------- THE-SECTION

// let dataBarang = [
//   ["Yakult", 10000],
//   ["Indomie", 2500],
//   ["Bear brand", 10000],
//   ["salonpas", 11000],
//   ["Tissue", 15000],
// ];

// // function untuk menghitung total belanja
// // param1 => array, list data barang yang akan dihitung totalnya
// // output =>  integer, akan  mengembalikan nilai total belanja
// function getTotalBelanja(listBarang) {
//   let sum = 0;

//   for (let i = 0; i < listBarang.length; i++) {
//     sum += listBarang[i][1];
//   }

//   return sum;
// }
// // 48500

// // console.log(getTotalBelanja(dataBarang));

// // funtion untuk hitung pembayaran dan sekaligus pengurangan saldo
// // param1 => integer, saldo user
// // param2 => integer, total belanja oleh user
// // output => array, berisi sisa saldo dan pesan
// // saldo hanya akan berkurang jika saldo >= total belanja
// function pembayaran(saldo, totalBelanja) {
//   let result = [];
//   let SaldoCukup = true;

//   if (saldo < totalBelanja) {
//     result.push(saldo);
//     SaldoCukup = false;
//   } else {
//     let sisaSaldo = saldo - totalBelanja;
//     result.push(sisaSaldo);
//   }

//   result.push(SaldoCukup);
//   return result;
// }

// // console.log(pembayaran(100000, 180000));

// /*
//   [ 201500, true ]

//   [<saldo>, false]
//   */

// // checkout alfamart
// // 1. didata barang nya
// // 2. Dapet harga nya masing2
// // 3. Total belanja
// // 4. Bayar
// // 5. Cetak struk belanja
// // validasi listbarang length > 0

// function checkout(listBarang, saldo) {
//   const hasilGetTotal = getTotalBelanja(listBarang);
//   // console.log("hasil dari function getTotalBelanja", hasilGetTotal)
//   const hasilPembayaran = pembayaran(saldo, hasilGetTotal);
//   // console.log("Hasil dari function pembayaran", hasilPembayaran)
//   if (hasilPembayaran[1] === true) {
//     return `      ========================================================================
//       Terimakasih telah berbelanja di alfamart,
//       Saldo anda senilai Rp.${saldo}
//       Total belanja adalah Rp.${hasilGetTotal}
//       Sisa saldo anda adalah Rp.${hasilPembayaran[0]}
//       ========================================================================`;
//   } else {
//     return `      ========================================================================
//       pembayaran gagal dikarenakan saldo tidak mencukupi
//       Saldo anda senilai Rp.${saldo}
//       Total belanja adalah Rp.${hasilGetTotal}
//       ========================================================================`;
//   }
// }

// console.log(checkout(dataBarang, 250_000));
/*
      ========================================================================
      Terimakasih telah berbelanja di alfamart,
      Saldo anda senilai Rp.250000
      Total belanja adalah Rp.48500
      Sisa saldo anda adalah Rp.201500
      ========================================================================
  */

// console.log(checkout(dataBarang, 10000));
/*
      ========================================================================
      pembayaran gagal dikarenakan saldo tidak mencukupi
      Saldo anda senilai Rp.10000
      Total belanja adalah Rp.48500
      ========================================================================
      */

// ------------------------- HIGHEST GLOBAL MINIMUM ------------------------- THE-SECTION

// /*

//     Highest Global Minimum

//     highestGlobalMinimum adalah sebuah function yang menerima dua parameter, dan keduanya merupakan array of number.
//     Function akan mendapatkan angka minimum dari masing-masing array yang diinput sebagai parameter, kemudian bandingkan kedua angka tersebut.
//     Function akan me-return salah satu dari angka minimum yang paling besar.

//     contoh:
//     highestGlobalMinimum([1, 1, 1] , [8, 15, 17, 9])
//     firstArr = [1, 1, 1]
//     secondArr = [8, 15, 17, 9]

//     nilai minimum dari firstArr = 1
//     nilai minimum dari secondArr = 8

//     karena 1 < 8, maka function highestGlobalMinimum akan me-return 8.

//     snippet:

//     */
// function highestGlobalMinimum(firstArr, secondArr) {
//   let result = 0;
//   let temp = [];

//   let min1 = firstArr[0];
//   for (let i = 0; i < firstArr.length; i++) {
//     if (firstArr[i] < min1) {
//       min1 = firstArr[i];
//     }
//   }
//   temp.push(min1);

//   let min2 = secondArr[0];
//   for (let i = 0; i < secondArr.length; i++) {
//     if (secondArr[i] < min2) {
//       min2 = secondArr[i];
//     }
//   }
//   temp.push(min2);

//   let highestMin = temp[0];
//   for (let i = 0; i < temp.length; i++) {
//     if (temp[i] > highestMin) {
//       highestMin = temp[i];
//     }
//   }

//   return highestMin;
// }

// console.log(highestGlobalMinimum([1, 1, 1], [8, 15, 17, 9])); // 8
// console.log(highestGlobalMinimum([4, 8, 9, 12], [33, 88, 99, 11])); // 11
// console.log(highestGlobalMinimum([1, 2, 5, 2, 2], [67, 45, 55])); // 45
// console.log(highestGlobalMinimum([6, 2, 4, 10, 8, 2], [6, 5, 13, 23])); // 5
// console.log(highestGlobalMinimum([5, 11, 18, 6], [3, 1, 8, 13])); // 5

// ------------------------- REVERSE THE ODD LENGTH WORDS ------------------------- THE-SECTION

/*

    Reverse the Odd Length Words

    Diberikan sebuah string berupa kalimat, balikan setiap kata dalam kalimat tersebut yang panjang katanya bernilai ganjil.

    input => output
    'Bananas' => 'sananaB'
    'One two three four' => 'enO owt eerht four'
    'Make sure uoy only esrever sdrow of ddo length' => 'Make sure you only reverse words of odd length'

    snippet:
    */
// function reverseOddLength(str) {
//   let result = "";
//   let temp = "";
//   let tempArray = [];
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== " ") {
//       temp += str[i];
//     }

//     if (str[i] === " " || i === str.length - 1) {
//       tempArray.push(temp);
//       temp = "";
//     }
//   }
//   let tempArray2 = [];
//   for (let i = 0; i < tempArray.length; i++) {
//     //One two three four
//     if (tempArray[i].length % 2 === 1) {
//       let temp = "";
//       for (let j = tempArray[i].length - 1; j >= 0; j--) {
//         temp += tempArray[i][j];
//       }
//       tempArray2.push(temp);
//     } else {
//       tempArray2.push(tempArray[i]);
//     }
//   }

//   for (let i = 0; i < tempArray2.length; i++) {
//     result += `${tempArray2[i]}`;
//     if (i !== tempArray2.length - 1) {
//       result += " ";
//     }
//   }

//   return result;
// }
// console.log(reverseOddLength("Bananas"));
// console.log(reverseOddLength("One two three four"));
// console.log(reverseOddLength("Make sure uoy only esrever sdrow of ddo length"));

// ------------------------- NAIK ANGKOT ------------------------- THE-SECTION

/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh:
input: [['Dimitri', 'B', 'F']]
output:
  1. Dimitri naik dari: B, tujuan: F, ongkos: 8000
*/
// function naikAngkot(arrPenumpang) {
//   let rute = ["A", "B", "C", "D", "E", "F"];
//   let ruteAwal = 0;
//   let ruteAkhir = 0;
//   let hargaPerRute = 2000;
//   let result = "";

//   if (arrPenumpang.length === 0) {
//     return [];
//   }

//   for (let i = 0; i < arrPenumpang.length; i++) {
//     let totalRute = 0;
//     let totalOngkos = 0;
//     for (let j = 0; j < rute.length; j++) {
//       if (arrPenumpang[i][1] === rute[j]) {
//         ruteAwal = j;
//       }

//       if (arrPenumpang[i][2] === rute[j]) {
//         ruteAkhir = j;
//       }
//     }
//     for (let k = ruteAwal; k < ruteAkhir; k++) {
//       totalRute++;
//       totalOngkos += hargaPerRute;
//     }

//     result += `${i + 1}. ${arrPenumpang[i][0]} naik dari: ${
//       arrPenumpang[i][1]
//     }, tujuan: ${arrPenumpang[i][2]}, ongkos: ${totalOngkos}`;

//     if (i !== arrPenumpang.length - 1) {
//       result += `\n`;
//     }
//   }

//   return result;
// }

// console.log(naikAngkot([["Dimitri", "B", "F"]]));

//TEST CASE
// console.log(
//   naikAngkot([
//     ["Dimitri", "B", "F"],
//     ["Icha", "A", "B"],
//   ])
// );
/*
    1. Dimitri naik dari: B, tujuan: F, ongkos: 8000
    2. Icha naik dari: A, tujuan B, ongkos: 2000
  */

// console.log(naikAngkot([])); //[]

// ------------------------- PLAYLIST LAGU ------------------------- THE-SECTION

// /**
//  * Terdapat sebuah playlist lagu berupa array multidimensi.
//  * Buatlah sebuah program yang akan menampilkan lagu-lagu apa saja yang akan dimainkan berdasarkan alokasi waktu yang diberikan.
//  * Ketentuan memainkan lagu adalah sebagai berikut:
//  *   - Apabila waktu tidak cukup untuk memainkan 1 lagu secara penuh, maka lagu tersebut batal dimainkan.
//  *   - Apabila lagu paling akhir sudah dicapai, maka proses akan kembali ke lagu pertama.
//  *   - Apabila parameter time tidak diisi, maka semua lagu akan dimainkan berurutan sekali saja.
//  *   - Shuffle playlist untuk memutarnya secara acak
//  */

// // [ penyanyi, judul lagu, durasi ]
// let playlist = [
//   ["Didi Kempot", "Banyu Langit", 4],
//   ["Nike Ardilla", "Sandiwara Cinta", 4],
//   ["Hetty Koes Endang", "Cinta Putih", 3],
//   ["Titiek Puspa", "Kupu-Kupu Malam", 3],
//   ["Ahmad Albar", "Don't Spoil My Day", 5],
//   ["Doel Sumbang", "Awewe Sapi Daging", 2],
//   ["Ebiet G. Ade", "Berita Kepada Kawan", 6],
// ];

// function play(input, time) {
//   let result = [];

//   if (!time) {
//     return input;
//   }

//   let waktuSisa = time;

//   for (let i = 0; i < input.length; i++) {
//     waktuSisa -= input[i][2];
//     if (waktuSisa > 0) {
//       result.push(input[i]);
//     } else {
//       break;
//     }

//     if (waktuSisa > 0 && i === input.length - 1) {
//       i = -1;
//     }
//   }

//   return result;
// }

// // console.log(play(playlist,9));
// /*
//   EXAMPLE 1
//     [
//       ['Didi Kempot', 'Banyu Langit', 4],
//       ['Nike Ardilla', 'Sandiwara Cinta', 4]
//     ]
//   */

// // console.log(play(playlist));
// /*
//   EXAMPLE 2
//    [
//      [ 'Didi Kempot', 'Banyu Langit', 4 ],
//      [ 'Nike Ardilla', 'Sandiwara Cinta', 4 ],
//      [ 'Hetty Koes Endang', 'Cinta Putih', 3 ],
//      [ 'Titiek Puspa', 'Kupu-Kupu Malam', 3 ],
//      [ 'Ahmad Albar', "Don't Spoil My Day", 5 ],
//      [ 'Doel Sumbang', 'Awewe Sapi Daging', 2 ],
//      [ 'Ebiet G. Ade', 'Berita Kepada Kawan', 6 ],
//      [ 'Didi Kempot', 'Banyu Langit', 4 ]
//    ]
//    */

// //listLagu.length = 7

// function shufflePlaylist(listLagu) {
//   for (let i = listLagu.length - 1; i > 0; i--) {
//     // i = 6 5 4 3 2 1
//     let j = Math.floor(Math.random() * (i + 1)); //random num antara 0 - i. misal kepilih j =5.
//     let temp = listLagu[i]; //tukar lagu 6 dan lagu 5.
//     listLagu[i] = listLagu[j];
//     listLagu[j] = temp;
//     //di iterasi selanjutnya, lagu 6 bakal di skip.
//   }

//   return listLagu;
// }

// // console.log(shufflePlaylist(playlist));
// /*
//   playlist => 7 HARUSNYA maksimal result ya 7, tidak mungkin 8
//   [
//     ["Nike Ardilla", "Sandiwara Cinta", 4],
//     ["Didi Kempot", "Banyu Langit", 4],
//     ["Ahmad Albar", "Don't Spoil My Day", 5],
//     ["Hetty Koes Endang", "Cinta Putih", 3],
//     ["Doel Sumbang", "Awewe Sapi Daging", 2],
//     ["Ebiet G. Ade", "Berita Kepada Kawan", 6],
//     ["Titiek Puspa", "Kupu-Kupu Malam", 3],
//   ]
//   */

// // let playlist = [
// //   ["Didi Kempot", "Banyu Langit", 4],
// //   ["Nike Ardilla", "Sandiwara Cinta", 4],
// //   ["Hetty Koes Endang", "Cinta Putih", 3],
// //   ["Titiek Puspa", "Kupu-Kupu Malam", 3],
// //   ["Ahmad Albar", "Don't Spoil My Day", 5],
// //   ["Doel Sumbang", "Awewe Sapi Daging", 2],
// //   ["Ebiet G. Ade", "Berita Kepada Kawan", 6],
// // ];

// function playShuffle(input, time) {
//   let shuffledPlaylist = shufflePlaylist(input);

//   return play(shuffledPlaylist, time);
// }

// console.log(playShuffle(playlist, 70));
