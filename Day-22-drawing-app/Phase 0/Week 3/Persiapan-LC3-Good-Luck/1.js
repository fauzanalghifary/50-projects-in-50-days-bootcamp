/**
 * =============
 * Cari waktu terdekat ke jam 08:00
 * =============
 *
 * Petunjuk
 * -----------
 * Buatlah sebuah function yang mencari selisih waktu terdekat ke jam 08:00
 *
 * Input berupa array of objects yang berisi name dan array of time
 * Output berupa array of objects yang berisi name dan time
 *
 * Contoh:
 * Input: {name: "kira howard", time: ["07:59", "11:45", "12:30", "17:02"] }
 * Output: {name: "Kira Howard", time: 07:59
 *
 * Batasan dan Larangan
 * -------------
 *
 */
function clockToDetik(str) {
  let temp = "";
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ":") {
      temp += str[i];
    }

    if (str[i] === ":" || i === str.length - 1) {
      result.push(+temp);
      temp = "";
    }
  }

  let detikCount = result[0] * 3600 + result[1] * 60;
  return detikCount;
}

// console.log(clockToDetik("07:59"));

function waktuTerdekat(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    //{ name: "kira howard", time: ["07:59", "11:45", "12:30", "17:02"] },
    let obj = {
      name: arr[i].name,
      time: "",
    };
    let minimum = Infinity;
    for (let j = 0; j < arr[i].time.length; j++) {
      let detik = clockToDetik(arr[i].time[j]);
      let detikJam8 = clockToDetik("08:00");
      let jarak = Math.abs(detik - detikJam8);
      if (jarak < minimum) {
        minimum = jarak;
        obj.time = arr[i].time[j];
      }
    }
    result.push(obj);
  }

  return result;
}

data = [
  { name: "kira howard", time: ["07:59", "11:45", "12:30", "17:02"] },
  {
    name: "harley pacheco",
    time: ["08:05", "10:15", "13:08", "15:59", "16:31"],
  },
  { name: "cora crane", time: ["07:30", "17:30"] },
  { name: "cain cansen", time: ["07:31", "08:02", "12:00", "16:15"] },
  {
    name: "alec stanley",
    time: [
      "06:00",
      "06:15",
      "06:30",
      "06:45",
      "07:00",
      "14:00",
      "17:00",
      "20:00",
    ],
  },
];

console.log(waktuTerdekat(data));

//[
//  {name: "Kira Howard", time: "07:59" },
//  {name: "Harley Pacheco", time: "08:05" },
//  {name: "Cora Crane", time: "07:30" },
//  {name: "Cain Cansen", time: "08:02" },
//  {name: "Alec Stanley", time: "07:00" }
//];
