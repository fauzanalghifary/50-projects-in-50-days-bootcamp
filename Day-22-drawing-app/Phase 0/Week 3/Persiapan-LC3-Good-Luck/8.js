/**
 * =========================
 * Group Stage Mobile Legend
 * =========================
 *
 * Mobile legend adalah sebuah game moba yang sangat menarik banyak perhatian orang. Banyak team team yang bertanding dalam
 * turnamen untuk merebutkan peringkat team terbaik di Indonesia.
 *
 * Buatlah sebuah fungsi yang akan menentukan klasemen dari group stage turnamen Mobile legend.
 *
 * Rule perhitungan score:
 * - Setiap team akan mendapatkan 3 point  ketika menang daam sebuah pertandingan.
 * - Setiap team akan kehilangan 1 point ketika kalah dalam sebuah pertandingan.
 *
 * Output:
 * Fungsi ini akan mengeluarkan sebuah output berupa objek urutan klasemen setelah melakukan pertandingan. ( Perhatikan driver code )
 *
 * Asumsi:
 *  - Ketika ada lebih dari satu team yang memiliki score yang sama maka urutan pemenang ditentukan oleh posisi team dalam input fungsi yang kita buat.
 *
 *
 * Rules:
 *  - Tidak boleh menggunakan built-in function array. .map, .filter, .reduce, .sort
 */

/**
 * {
 *  '1': {
 *  team: 'EVOS',
 *  score: 9
 * },
 * '2': {
 *  team: 'Alter Ego',
 *  score: 5
 * },
 * '3': {
 *  team: 'Onic',
 *  score: 5
 * },
 * '4': {
 *  team: 'RRQ',
 *  score: -3
 * }
 * }
 */

function groupStage(teams) {
  let obj = {};
  let tempArray = [];
  for (let i = 0; i < teams.length; i++) {
    obj = {
      team: teams[i].name,
      score: 0,
    };
    for (let j = 0; j < teams[i].matches.length; j++) {
      if (teams[i].matches[j].status === "win") {
        obj.score += 3;
      } else if (teams[i].matches[j].status === "lose") {
        obj.score -= 1;
      }
    }
    tempArray.push(obj);
  }

  for (let i = 0; i < tempArray.length; i++) {
    for (let j = 0; j < tempArray.length; j++) {
      if (tempArray[i].score > tempArray[j].score) {
        let temp = tempArray[i];
        tempArray[i] = tempArray[j];
        tempArray[j] = temp;
      }
    }
  }

  let result = {};
  for (let i = 0; i < tempArray.length; i++) {
    result[i + 1] = tempArray[i];
  }

  return result;
}

var group1 = [
  {
    name: "Evos",
    matches: [
      {
        against: "RRQ",
        status: "win",
      },
      {
        against: "Alter Ego",
        status: "win",
      },
      {
        against: "ONIC",
        status: "win",
      },
    ],
  },
  {
    name: "RRQ",
    matches: [
      {
        against: "Evos",
        status: "lose",
      },
      {
        against: "Alter Ego",
        status: "lose",
      },
      {
        against: "ONIC",
        status: "lose",
      },
    ],
  },
  {
    name: "Alter Ego",
    matches: [
      {
        against: "RRQ",
        status: "win",
      },
      {
        against: "Evos",
        status: "win",
      },
      {
        against: "ONIC",
        status: "lose",
      },
    ],
  },
  {
    name: "ONIC",
    matches: [
      {
        against: "RRQ",
        status: "win",
      },
      {
        against: "Alter Ego",
        status: "win",
      },
      {
        against: "EVOS",
        status: "lose",
      },
    ],
  },
];

console.log(groupStage(group1));

/**
 * {
 *  '1': {
 *  team: 'EVOS',
 *  score: 9
 * },
 * '2': {
 *  team: 'Alter Ego',
 *  score: 5
 * },
 * '3': {
 *  team: 'Onic',
 *  score: 5
 * },
 * '4': {
 *  team: 'RRQ',
 *  score: -3
 * }
 * }
 */

var group2 = [
  {
    name: "Evos",
    matches: [
      {
        against: "RRQ",
        status: "lose",
      },
      {
        against: "Alter Ego",
        status: "lose",
      },
      {
        against: "ONIC",
        status: "lose",
      },
    ],
  },
  {
    name: "RRQ",
    matches: [
      {
        against: "Evos",
        status: "win",
      },
      {
        against: "Alter Ego",
        status: "win",
      },
      {
        against: "ONIC",
        status: "win",
      },
    ],
  },
  {
    name: "Alter Ego",
    matches: [
      {
        against: "RRQ",
        status: "lose",
      },
      {
        against: "Evos",
        status: "win",
      },
      {
        against: "ONIC",
        status: "lose",
      },
    ],
  },
  {
    name: "ONIC",
    matches: [
      {
        against: "RRQ",
        status: "lose",
      },
      {
        against: "Alter Ego",
        status: "win",
      },
      {
        against: "EVOS",
        status: "win",
      },
    ],
  },
];

console.log(groupStage(group2));

/**
 * { '1': { team: 'RRQ', score: 9 },
  '2': { team: 'ONIC', score: 5 },
  '3': { team: 'Alter Ego', score: 1 },
  '4': { team: 'Evos', score: -3 } }
 */
