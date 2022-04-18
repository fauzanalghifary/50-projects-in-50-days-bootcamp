// data => sesuatu yang punya value, type, built in boolean

// string, number, boolean => primitive data type
// 10 => value 10, type number, truthy
// let n = 10; // => value 10, idem
// 'hello' => value 'hello', type string, truthy
// '' => value '', type string, falsy
// true => value true, type boolean, truthy
// dst

// [1, 2, 3]
// array => penampung satu atau lebih data, zero-based indexed
// let arr = [1, 2, 3];
// console.log(typeof arr);

// let ani = {
//     name: 'ani', // key-value atau property 
//     age: 20,
//     nationality: 'indonesia',
//     gender: 'female',
//     'date of birth': '1-jan-2000',
//     hobbies: ['read', 'write'],
//     bukuFavorit: {
//         title: '7 Habits',
//         author: 'Steven Covey'
//     }
// };


// Create (empty object)
// Create (object with initial key-values / Properties)
// let obj = {
//     'key1': 1,
//     key2: 2,
//     'key yang panjang': 'value yang panjang',
//     key1: 'ini string',
//     1: 1,
//     100: 1,
//     30: 1
// };
// obj.key1 = 'menimpa';
// console.log(obj, typeof obj, Boolean(obj));

// Read Value dari Property (. dan [])
// kita mau baca name dari student
// let student = {
//     name: 'josep',
//     age: 20,
//     score: 90
// };
// console.log(student.name); // josep
// console.log(student['name']);
// let myKey = 'score';
// console.log(student[myKey]); 

// Write Value ke Property (non-existing key)
// let student = {
//     name: 'josep',
//     age: 20,
//     score: 90
// };
// student.address = 'jakarta';
// console.log(student);
/*
{ name: 'josep', age: 20, score: 90, address: 'jakarta' } */

// Write Value ke Property (existing key)
// let student = {
//     name: 'josep',
//     age: 20,
//     score: 90
// };
// student['age'] = 15;
// console.log(student);

// Iterate setiap Key dari Object (for...in)
// let student = {
//     name: 'josep',
//     age: 20,
//     score: 90
// };
// student.name
// student['age'] = 15
// gimana kalau pengen dapet name, age, score
// for(const key in student) {
//     const val = student[key];
//     console.log(key, val);
// }

// Delete Property (delete)
// let student = {
//     name: 'josep',
//     age: 20,
//     score: 90
// };
// delete student.age;
// delete student['name'];
// console.log(student);

// hasOwnProperty, keys, values
// let student = {
//     name: 'josep',
//     age: 20,
//     score: 90
// };

// apakah property tertentu ada atau belum
// console.log(student.hasOwnProperty('haha')); // false
// console.log(student.hasOwnProperty('name')); // true
// kalau value dari prop itu belum ada, maka hasilnya undefined
// console.log(student['name']); // josep
// console.log(student['haha']); // undefined

// keys
// console.log(Object.keys(student)); // [ 'name', 'age', 'score' ]

// values
// console.log(Object.values(student)); // [ 'josep', 20, 90 ]

// Grouping / Menghitung Frekuensi
let arr = ['A', 'A', 'B', 'C', 'B', 'A', 'D'];
// output: { A: 3, B: 2, C: 1 }
function group(arr) {
    let result = {};

    for(let i = 0; i < arr.length; i++) {
        let perItem = arr[i]; // A, A, B, dst

        // 1- cek apakah keynya ada atau engga
        // result.A atau result['A']
        if(result[perItem] === undefined) {
            // 2- kalau tidak ada, maka kita akan initiate grupnya
            // frequency, initial valuenya number 0
            result[perItem] = 0;
        }

        // 3- aksi terhadap grupnya
        // aksi, increment terhadap si number
        // result[perItem] = result[perItem] + 1;
        result[perItem]++;
    }

    return result;
}
console.log(group(arr));

/*
            result
A           { 'A': 1 }
A           { 'A': 2 }
B           { 'A': 2, 'B': 1 }
C           { 'A': 2, 'B': 1, 'C': 1 }
B           { 'A': 2, 'B': 2, 'C': 1 }
A           { 'A': 3, 'B': 2, 'C': 1 }
D           { 'A': 3, 'B': 2, 'C': 1, 'D': 1 }

*/