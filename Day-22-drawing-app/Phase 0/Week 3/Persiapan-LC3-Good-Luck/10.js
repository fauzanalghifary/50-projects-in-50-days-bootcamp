/**
 * Objective: Array of Object
 *
 * Buatlah sebuah array of object setidaknya 5 orang yang ada di dalam batch ini
 *
 * Setiap object yang dibuat harus memiliki properti sebagai berikut:
 * - id -> ( 3 Character dan 3 Angka)
 * - name
 * - grade
 *  - gender
 *de
 * - Melanjutkan array of object yang sudah dibuat, buatkan lah sebuah fungsi untuk mencari student dengan grade diatas 80
 * - Buatlah sebuah fungsi untuk menampilkan hanya murid-murid yang memiliki nama dengan huruf depan S
 *  - Buatlah sebuah fungsi untuk mencari murid yang memiliki id yang dikirimkan sebagai parameter
 */

// Masukkan array of object kalian disini
const arr = [
  {
    id: "abc123",
    name: "alfa",
    grade: 85,
    gender: "Laki-laki",
  },
  {
    id: "abc456",
    name: "beta",
    grade: 82,
    gender: "Perempuan",
  },
  {
    id: "abc789",
    name: "gamma",
    grade: 95,
    gender: "Laki-laki",
  },
  {
    id: "pqr123",
    name: "sigma",
    grade: 65,
    gender: "Laki-laki",
  },
  {
    id: "pqr456",
    name: "teta",
    grade: 75,
    gender: "Laki-laki",
  },
];

function greaterThan80Student(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].grade > 80) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(greaterThan80Student(arr));

//

function studentStartWithS(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name[0].toLowerCase() === "s") {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(studentStartWithS(arr));

//

function findStudent(arr, id) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === id) {
      result.push(arr[i]);
    }
  }
  return result;
}

// Masukan id kalian disini
const id = "abc456";
console.log(findStudent(arr, id));
