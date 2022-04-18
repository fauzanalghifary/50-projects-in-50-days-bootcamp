/**
 * =======================
 * SUMMON QUINTET MAGICIAN
 * =======================
 *
 * Quintet magician akan muncul ketika 3 dari 4 buah-buahan ini bersatu
 * adapun buah2 nya yaitu : "Apel", "Chocolate", "Kiwi", "Lemon"
 *
 * Tetapi 3 buah itu harus berbeda satu sama lain,
 * jika buah itu kurang atau lebih dari tiga, maka Quintet Magician tidak muncul
 * jika kombinasi 3 buah itu tidak saling berbeda, maka Quintet Magician tidak muncul
 * selain itu, maka Quintet Magician akan muncul
 *
 * Contoh: [
 *    ["Apel", "Chocolate", "Kiwi"], => "Summon Quintet Magician"
 *    ["Apel", "Kiwi", "Lemon", "Chocolate"], => "Can not summon Quintet Magician"
 *    ["Apel", "Lemon", "Lemon"], => "Can not summon Quintet Magician"
 *    ["Lemon", "Kiwi", "Apel"], => "Summon Quintet Magician",
 *    ["Apel", "Lemon"] => "Can not summon Quintet Magician"
 * ]
 *
 * Maka output yang di harapkan adalah:
 * [
 *  "Summon Quintet Magician",
 *  "Can not summon Quintet Magician",
 *  "Can not summon Quintet Magician",
 *  "Summon Quintet Magician",
 *  "Can not summon Quintet Magician",
 * ]
 *  Output sesuai urutan dari deretan kombinasi
 *
 *  Rules:
 *  1. Dilarang menggunakan .map .reduce .filter
 *  2. Dilarang menggunakan regex
 *
 */

function summonMagician(combination) {
  let result = [];
  for (let i = 0; i < combination.length; i++) {
    let count = 0;
    let obj = {};
    let duplicate = false;
    for (let j = 0; j < combination[i].length; j++) {
      let key = combination[i][j];
      if (
        key === "Apel" ||
        key === "Chocolate" ||
        key === "Kiwi" ||
        key === "Lemon"
      ) {
        if (!obj[key]) {
          obj[key] = 0;
          count++;
        }
        obj[key]++;
        if (obj[key] === 2) {
          duplicate = true;
        }
      }
    }
    if (count === 3 && !duplicate) {
      result.push("Summon Quintet Magician");
    } else {
      result.push("Can not summon Quintet Magician");
    }
  }
  return result;
}

var combination1 = [
  ["Apel", "Chocolate", "Kiwi"],
  ["Chocolate", "Apel", "Kiwi", "Kiwi"],
  ["Apel", "Kiwi", "Lemon"],
  ["Apel", "Lemon", "Lemon"],
];

console.log(summonMagician(combination1));
// [ 'Summon Quintet Magician',
//   'Can not summon Quintet Magician',
//   'Summon Quintet Magician',
//   'Can not summon Quintet Magician' ]

var combination2 = [
  ["Lemon", "Chocolate", "Kiwi"],
  ["Chocolate", "Apel"],
  ["Apel", "Kiwi", "Lemon", "Chocolate"],
];

console.log(summonMagician(combination2));

var combination3 = [
  ["Apel", "Chocolate", "Kiwi"],
  ["Apel", "Kiwi", "Lemon", "Chocolate"],
  ["Apel", "Lemon", "Lemon"],
  ["Lemon", "Kiwi", "Apel"],
  ["Apel", "Lemon"],
];

console.log(summonMagician(combination3));

/* [
 *  "Summon Quintet Magician",
 *  "Can not summon Quintet Magician",
 *  "Can not summon Quintet Magician",
 *  "Summon Quintet Magician",
 *  "Can not summon Quintet Magician",
 ] */
