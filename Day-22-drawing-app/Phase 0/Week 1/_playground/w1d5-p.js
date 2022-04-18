// firstName = "Fauzan";

// console.log(firstName);

// console.log(`Baris 1
// Baris 2
// Baris 3`);

// const durasi = 29289;
const durasi = 3662; //detik

const jam = Math.floor(durasi / 3600);
const menit = Math.floor((durasi % 3600) / 60);
const detik = (durasi % 3600) % 60;

console.log(`${jam}
${menit}
${detik}`);
