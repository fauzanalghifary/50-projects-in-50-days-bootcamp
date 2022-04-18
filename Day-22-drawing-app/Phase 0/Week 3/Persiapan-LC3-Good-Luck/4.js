/**
 * ==================
 * Find your pokemon!
 * ==================
 *
 * Instruction
 * -----------
 * Buatlah function yang menampilkan pokemon apa saja yang muncul dari
 * array of pokemon yang diberikan sebagai input
 *
 * Rules
 * -----
 * 1. Dilarang menggunakan built-in function: map, filter, reduce, slice, splice, split, join
 */

function areaDex(param) {
  if (param.length === 0) {
    return `No pokemon nearby...`;
  }

  if (param.length === 1) {
    return `Detected Pokemon: Only ${param[0]}`;
  }

  if (param.length === 2) {
    return `Detected Pokemon: ${param[0]} and ${param[1]}`;
  }

  let str = "Detected Pokemon: ";
  for (let i = 0; i < param.length; i++) {
    if (i !== param.length - 1) {
      str += `${param[i]}, `;
    } else {
      str += `and ${param[i]}`;
    }
  }
  return str;
}

console.log(areaDex([]));
// No pokemon nearby...

console.log(areaDex(["Pikachu"]));
// Detected Pokemon: Only Pikachu

console.log(areaDex(["Bulbasaur", "Charmander"]));
// Detected Pokemon: Bulbasaur and Charmander

console.log(areaDex(["Pikachu", "Squirtle", "Pikachu", "Charmander"]));
// Detected Pokemon: Pikachu, Squirtle, and Charmander
