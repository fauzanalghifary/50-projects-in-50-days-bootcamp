// var input = "abc1DacAkgC";
// var output = "";

// for (var i = 0; i < input.length; i++) {
//   var char = input[i];
//   var isDuplicate = false;
//   for (var j = 0; j < output.length; j++) {
//     if (char.toLowerCase() === output[j].toLowerCase()) {
//       isDuplicate = true;
//     }
//   }

//   if (!isDuplicate) {
//     output += char;
//   }
// }

// console.log(output);

// UNGRADED CHALLENGE
// var detik = 60;
// var nilaiMenit = Math.floor(detik / 60);
// var nilaiDetik = detik % 60;

// if (nilaiDetik < 10) {
//   nilaiDetik = "0" + nilaiDetik;
// }

// console.log(`${nilaiMenit}:${nilaiDetik}`);

// --------------------

// var output = "";

// for (var i = 0; i < rows2; i++) {
//   for (var j = 0; j < rows2; j++) {
//     output += "*";
//   }
//   console.log(output);
//   output = "";
// }

// ---------------------

// var rows4 = 10;
// var output = "";

// for (var i = 0; i < rows3; i++) {
//   for (var j = 0; j < i + 1; j++) {
//     output += "*";
//   }
//   console.log(output);
//   output = "";
// }

// --------------------------------------

// var rows4 = 5;
// var output = "";

// for (var i = rows4; i > 0; i--) {
//   for (var j = 0; j < i; j++) {
//     output += "*";
//   }
//   console.log(output);
//   output = "";
// }

// ------------------------------------------

// var kata = "Javascript";
// var output = "";

// for (var i = kata.length - 1; i >= 0; i--) {
//   output += kata[i];
// }

// console.log(output);

// ----------------------------------------

var kata = "xoxoxo";
var xCount = 0;
var oCount = 0;

for (var i = 0; i < kata.length; i++) {
  if (kata[i] === "x") {
    xCount++;
  } else if (kata[i] === "o") {
    oCount++;
  }
}

if (xCount === oCount) {
  console.log(true);
} else {
  console.log(false);
}
