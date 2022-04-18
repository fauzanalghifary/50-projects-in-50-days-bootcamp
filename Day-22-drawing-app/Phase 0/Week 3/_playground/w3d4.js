// ------------------------- GROUPING ADVANCED ------------------------- THE-SECTION

// let items = [
//   {
//     name: "SanSilk",
//     category: "sampo",
//     price: 12000,
//   },
//   {
//     name: "LiveBoy",
//     category: "sabun",
//     price: 3000,
//   },
//   {
//     name: "Getol",
//     category: "sabun",
//     price: 7000,
//   },
//   {
//     name: "Novu",
//     category: "sabun",
//     price: 2000,
//   },
//   {
//     name: "Pantin",
//     category: "sampo",
//     price: 30000,
//   },
// ];

// /*
// Buatlah grouping item advanced sesuai dengan categorynya !
// output: {
//   sampo: {
//     avg: 'nilaiRata2Sampo',
//     totalHarga: 'totalHargaSampo',
//     daftar: ['SanSilk', 'Pantin']
//   },
//   sabun: {
//     avg: 'nilaiRata2Sabun',
//     totalHarga: 'totalhargaSabun',
//     daftar: ['LiveBoy', 'Getol', 'Novu']
//   }
// }
// */

// function groupingAdvance(list) {
//   let obj = {};

//   for (let i = 0; i < list.length; i++) {
//     let key = list[i].category;
//     if (!obj[key]) {
//       obj[key] = {
//         avg: 0,
//         totalHarga: 0,
//         daftar: [],
//       };
//     }
//     obj[key].daftar.push(list[i].name);
//     obj[key].totalHarga += list[i].price;
//     obj[key].avg = obj[key].totalHarga / obj[key].daftar.length;
//   }
//   return obj;
// }

// console.log(groupingAdvance(items));

// ------------------------- LOJEK ------------------------- THE-SECTION

// function splitData(drivers) {
//   let result = [];

//   for (let i = 0; i < drivers.length; i++) {
//     let tempArray = [];
//     for (let j = 0; j < drivers[i].groceries.length; j++) {
//       //["Susu", 2],
//       tempArray.push(drivers[i].groceries[j][0]);
//       tempArray.push(drivers[i].groceries[j][1]);
//     }
//     result.push(tempArray);
//   }

//   return result;
// }

// function calculateMoney(groceriesDrivers) {
//   let listGroceries = [
//     { name: "Susu", price: 10000 },
//     { name: "Roti", price: 20000 },
//     { name: "Mie", price: 5000 },
//     { name: "Telur", price: 7000 },
//     { name: "Sabun", price: 3000 },
//     { name: "Bakso", price: 25000 },
//   ];
//   //code here
//   let result = [];

//   for (let i = 0; i < groceriesDrivers.length; i++) {
//     let sum = 0;
//     for (let j = 0; j < groceriesDrivers[i].length; j += 2) {
//       for (let k = 0; k < listGroceries.length; k++) {
//         if (listGroceries[k].name === groceriesDrivers[i][j]) {
//           let hargaBarang = listGroceries[k].price;
//           let jumlahBarang = groceriesDrivers[i][j + 1];
//           let totalHarga = hargaBarang * jumlahBarang;
//           sum += totalHarga;
//         }
//       }
//     }
//     result.push(sum);
//   }
//   return result;
// }

// function calculateDistance(drivers) {
//   let result = [];

//   for (let i = 0; i < drivers.length; i++) {
//     let time = drivers[i].driveTime;
//     let jarak = (time * 500) / 1000;
//     result.push(jarak);
//   }
//   return result;
// }

// function reward(data) {
//   let obj = {};

//   let splited = splitData(data);
//   let money = calculateMoney(splited);
//   let distance = calculateDistance(data);

//   for (let i = 0; i < money.length; i++) {
//     if (money[i] >= 100000 && distance[i] >= 50) {
//       if (!obj["Rumah"]) {
//         obj["Rumah"] = [];
//       }
//       obj["Rumah"].push(data[i].name);
//     } else if (
//       money[i] >= 50000 &&
//       money[i] <= 99999 &&
//       distance[i] >= 20 &&
//       distance[i] <= 49
//     ) {
//       if (!obj["Mobil"]) {
//         obj["Mobil"] = [];
//       }
//       obj["Mobil"].push(data[i].name);
//     } else {
//       if (!obj["NoReward"]) {
//         obj["NoReward"] = [];
//       }
//       obj["NoReward"].push(data[i].name);
//     }
//   }
//   return obj;
// }

// console.log(
//   reward([
//     {
//       name: "Samir",
//       groceries: [
//         ["Susu", 2],
//         ["Roti", 4],
//         ["Mie", 5],
//         ["Telur", 2],
//         ["Bakso", 1],
//       ],
//       driveTime: 134, //minutes,
//     },
//     {
//       name: "Eko",
//       groceries: [
//         ["Susu", 1],
//         ["Roti", 2],
//         ["Mie", 3],
//         ["Telur", 3],
//         ["Bakso", 2],
//       ],
//       driveTime: 134, //minutes,
//     },
//     {
//       name: "Fajrin",
//       groceries: [
//         ["Susu", 1],
//         ["Roti", 2],
//         ["Bakso", 2],
//         ["Telur", 3],
//       ],
//       driveTime: 90, //minutes
//     },
//     {
//       name: "Abdullah",
//       groceries: [
//         ["Susu", 1],
//         ["Roti", 2],
//         ["Bakso", 5],
//       ],
//       driveTime: 120, //minutes,
//     },
//     {
//       name: "Basil",
//       groceries: [
//         ["Susu", 1],
//         ["Roti", 2],
//         ["Bakso", 2],
//         ["Telur", 5],
//       ],
//       driveTime: 40, //minutes
//     },
//     {
//       name: "Idaz",
//       groceries: [
//         ["Susu", 1],
//         ["Roti", 2],
//       ],
//       driveTime: 10, //minutes
//     },
//   ])
// );

// /*
//   expected output :

//   {
//   Rumah: [ 'Samir', 'Eko', 'Abdullah' ],
//   NoReward: [ 'Fajrin', 'Basil', 'Idaz' ]
//   }
// */

// ------------------------- GRADUATES ------------------------- THE-SECTION

// function graduates(students) {
//   let result = {};

//   for (let i = 0; i < students.length; i++) {
//     let theClass = students[i].class;
//     if (students[i].score > 75) {
//       if (!result[theClass]) {
//         result[theClass] = [];
//       }
//       result[theClass].push({
//         name: students[i].name,
//         score: students[i].score,
//       });
//     }
//   }
//   return result;
// }

// console.log(
//   graduates([
//     { name: "Dimitri", score: 90, class: "foxes" },
//     { name: "Alexei", score: 85, class: "wolves" },
//     { name: "Sergei", score: 74, class: "foxes" },
//     { name: "Anastasia", score: 78, class: "wolves" },
//   ])
// );

// /*

// {
//   foxes: [ { name: 'Dimitri', score: 90 } ],
//   wolves: [ { name: 'Alexei', score: 85 }, { name: 'Anastasia', score: 78 } ]
// }
// */

// ------------------------- CARI MEDIAN ------------------------- THE-SECTION

// function cariMedian(arr) {
//   let median = 0;

//   if (arr.length % 2 === 1) {
//     let indexMedian = Math.floor(arr.length / 2);
//     median = arr[indexMedian];
//   }

//   if (arr.length % 2 === 0) {
//     let indexAwal = arr.length / 2 - 1;
//     let indexAkhir = indexAwal + 1;
//     median = (arr[indexAwal] + arr[indexAkhir]) / 2;
//   }

//   return median;
// }

// console.log(cariMedian([1, 2, 3, 4, 5]));
// console.log(cariMedian([1, 2, 4, 5]));

// ------------------------- CHEAPEST BOBA ------------------------- THE-SECTION

/**
 *  Seseorang  ingin membeli minuman-minuman karena kebetulan sedang ada promosi dengan diskon maksimal 40%.
 *  Semua sellers direpresentasikan dengan array bernama "sellers", yang memiliki properti berupa object juga.
 *  satu sellers, misal "Kokumi" menjual barang-barang yang terdapat di items dan dia sedang memberikan promo diskon sebesar
 *  "discount" (40%).
 *
 *  Implementasikan function beliTermurah yang akan menerima input berupa array berisi minuman yang ingin dibeli oleh user.
 *  Function akan mengoutput hasil berupa harga dan rekomendasi tempat membeli minuman-minuman tersebut dengan total harga
 *  yang paling murah.
 */
function beliTermurah(toBuy) {
  let sellers = [
    {
      seller: "BobaFett",
      items: [
        { name: "Fett Drink", price: 30000 },
        { name: "Dragon Boba Juice", price: 40000 },
        { name: "Star Big Boba", price: 25000 },
      ],
      discount: 0.15,
    },
    {
      seller: "BobaFest",
      items: [
        { name: "Fett Drink", price: 30000 },
        { name: "Dragon Boba Juice", price: 40000 },
        { name: "Star Big Boba", price: 25000 },
      ],
      discount: 0.35,
    },
    {
      seller: "ChaTime",
      items: [
        { name: "Fett Drink", price: 18000 },
        { name: "Dragon Boba Juice", price: 24000 },
        { name: "Star Big Boba", price: 21000 },
      ],
      discount: 0.1,
    },
    {
      seller: "Kokumi",
      items: [
        { name: "Fett Drink", price: 32000 },
        { name: "Dragon Boba Juice", price: 42000 },
        { name: "Star Big Boba", price: 27000 },
      ],
      discount: 0.4,
    },
  ];
  let str = "";

  if (toBuy.length === 0) {
    return "Pembeli tidak membeli apa-apa\n";
  }

  for (let i = 0; i < toBuy.length; i++) {
    let cheapest = Infinity;
    let tokoMurah;
    for (let j = 0; j < sellers.length; j++) {
      let theItem = sellers[j].items;
      for (let k = 0; k < theItem.length; k++) {
        let hargaDiskon = theItem[k].price * (1 - sellers[j].discount);
        if (toBuy[i] === theItem[k].name && hargaDiskon < cheapest) {
          cheapest = hargaDiskon;
          tokoMurah = sellers[j].seller;
        }
      }
    }
    str += `${toBuy[i]} bisa dibeli dengan harga paling murah ${cheapest} di ${tokoMurah}\n`;
  }
  return str;
}

let tc1 = ["Star Big Boba", "Dragon Boba Juice"];
let tc2 = ["Fett Drink"];
let tc3 = [];
let tc4 = ["Star Big Boba", "Dragon Boba Juice", "Fett Drink"];

console.log(beliTermurah(tc1));
/*
Star Big Boba bisa dibeli dengan harga paling murah 16200 di Kokumi
Dragon Boba Juice bisa dibeli dengan harga paling murah 21600 di ChatTime
// */
console.log(beliTermurah(tc2)); //Fett Drink bisa dibeli dengan harga paling murah 16200 di ChatTime
console.log(beliTermurah(tc3)); //Pembeli Tidak Membeli Apa-Apa
console.log(beliTermurah(tc4));
/**Star Big Boba bisa dibeli dengan harga paling murah 16200 di Kokumi
Dragon Boba Juice bisa dibeli dengan harga paling murah 21600 di ChatTime
Fett Drink bisa dibeli dengan harga paling murah 16200 di ChatTime */
