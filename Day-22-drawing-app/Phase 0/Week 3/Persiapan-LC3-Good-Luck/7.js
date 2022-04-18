/*
========
SUMOFMIN
========
Diberikan sebuah function sumOfMin yang menerima parameter bertipe array of number.
Function ini akan mengembalikan total jumlah dari angka terkecil setelah dibandingkan dengan angka yang lainnya.

Contoh 1:
----------
input: [ 3, 1, 5 ]
output: 5

penjelasan:
= (3 & 1) + (3 & 5) + (1 & 5)
= 1 + 3 + 1
= 5


contoh 2:
----------
input: [ 10, 13, 3, 4, 15 ]
output: 57

penjelasan: 
= (10 & 13) + (10 & 3) + (10 & 4) + (10 & 15) + (13 & 3) + (13 & 4) + (13 & 15) + (3 & 4) + (3 & 15) + (4 & 15)
= 10 + 3 + 4 + 10 + 3 + 4 + 13 + 3 + 3 + 4
= 57

RULES
------
1. WAJIB MENGGUNAKAN PSEUDOCODE/ALGORITMA
2. TIDAK BOLEH MENGGUNAKAN BUILT IN FUNCTION .reduce(), .filter() dan eval()

*/

function sumOfMin(numbers) {
  if (numbers.length === 0) return "No numbers to execute";
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] < numbers[j]) {
        sum += numbers[i];
      } else {
        sum += numbers[j];
      }
    }
  }

  return sum;
}

console.log(sumOfMin([3, 1, 5])); //5
console.log(sumOfMin([10, 13, 3, 4, 15])); //57
console.log(sumOfMin([3, 3, 3])); //9
console.log(sumOfMin([3, 1, 0, 2])); //4
console.log(sumOfMin([])); //No numbers to execute
