/**
 * ======================
 * find first not repeat
 * ======================
 *
 * Function ini akan mencari huruf pertama yang tidak terulang pada kata tersebut,
 * walaupun huruf pada kata tersebut ada yang kecil dan ada yang besar
 *
 * contoh :
 *  "lawless" => maka function akan membalikkan output a, walaupun huruf e juga hanya sekali,
 *    tetapi yang pertama kali muncul pada kata tersebut ada huruf a, maka huruf a lah yang di return
 *  "aDa" => maka function akan membalikkan output D (kapital)
 *  "torAbika" => maka function akan membalikkan output t
 *
 *  Jika seluruh huruf pada kata tersebut terulang maka function akan mencetak output "None"
 *  contoh :
 *  "taaT" => maka function akan mencetak output "None"
 *
 *  Kita asumsikan input hanya alphabet tidak ada spasi ataupun symbol
 *
 *  RULES
 *  1.  tidak boleh menggunakan built in function seperti .map .filter .find .indexOf .includes .lastIndexOf dll..
 *  2.  tidak boleh menggunakan regex
 *
 */
function notRepeat(string) {
  function notRepeat(string) {
    let obj = {};
    for (let i = 0; i < string.length; i++) {
      let key = string[i].toLowerCase();
      if (!obj[key]) {
        obj[key] = 0;
      }
      obj[key]++;
    }

    for (let i = 0; i < string.length; i++) {
      let key = string[i].toLowerCase();
      if (obj[key] === 1) {
        return string[i];
      }
    }
    return "None";
  }
}

console.log(notRepeat("nescafe")); // n
console.log(notRepeat("torAbika")); // t
console.log(notRepeat("kUroky")); // U
console.log(notRepeat("Pesawat")); // P
console.log(notRepeat("taaT")); // None
