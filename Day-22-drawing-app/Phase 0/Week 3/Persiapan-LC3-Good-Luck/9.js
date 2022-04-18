/**
 *  =======================
 *  RAZIA GANJIL GENAP
 *  =======================
 *
 * [Description]
 * Sebuah fungsi yang akan mengembalikan pemberitahuan kemungkinan tindak pelanggaran
 * jika pengemudi melalui rute-rute tertentu dengan plat ganjil-genap. Pelanggaran akan terjadi apabila
 * ada plat mobil yang melintas pada rute tertentu pada tanggal tertentu dengan nomor plat
 * yang tidak sama dengan aturan ganjil genap
 *
 * [Instructions]
 * 1. Function menerima parameter berupa tanggal, data kendaraan
 * 2. Function hanya akan bisa membaca dari tanggal 1 sampai 31 ( asumsi setiap bulan memiliki range tanggal tersebut)
 * 3. Contoh membaca nomor plat kendaraan adalah misal B 444 XXX, berarti yang dilihat cukup
 * angka paling belakang dari 444 berarti 4, berati nomor plat mobil ini termasuk genap
 * 5. Berlaku hanya untuk MOBIL.
 * 6. Lokasi Ganjil Genap
 *   - Gajah Mada
 *   - Hayam Wuruk
 *   - Sisingamangaraja
 *   - Panglima Polim
 *   - Fatmawati
 *   - Tomang Raya
 *
 * [Rules]
 * 1. tidak boleh menggunakan built in function .filter(), .map(), .reduce(), .includes(), .indexOf()
 */

function kenaRazia(date, data) {
  let lokasiGanjilGenap = [
    "Gajah Mada",
    "Hayam Wuruk",
    "Sisingamangaraja",
    "Panglima Polim",
    "Fatmawati",
    "Tomang Raya",
  ];

  let calonTilang = [];
  for (let i = 0; i < data.length; i++) {
    let platNomor = data[i].plat;
    for (let j = platNomor.length - 1; j >= 0; j--) {
      if (platNomor[j] === " ") {
        indexSpasi = j;
        break;
      }
    }
    if (
      data[i].type === "Mobil" &&
      date % 2 !== +platNomor[indexSpasi - 1] % 2
    ) {
      calonTilang.push(data[i]);
    }
  }

  let daftarPelanggar = [];

  for (let j = 0; j < calonTilang.length; j++) {
    for (let k = 0; k < calonTilang[j].rute.length; k++) {
      let found = false;
      for (let i = 0; i < lokasiGanjilGenap.length; i++) {
        if (lokasiGanjilGenap[i] === calonTilang[j].rute[k]) {
          daftarPelanggar.push(calonTilang[j]);
          found = true;
          break;
        }
      }
      if (found) {
        break;
      }
    }
  }

  return daftarPelanggar;
}
console.log(
  kenaRazia(27, [
    {
      name: "Denver",
      plat: "B 2791 KDS",
      type: "Mobil",
      rute: ["TB Simatupang", "Panglima Polim", "Depok", "Senen Raya"],
    },
    {
      name: "Toni",
      plat: "B 1212 JBB",
      type: "Mobil",
      rute: [
        "Pintu Besar Selatan",
        "Panglima Polim",
        "Depok",
        "Senen Raya",
        "Kemang",
      ],
    },
    {
      name: "Stark",
      plat: "B 444 XSX",
      type: "Motor",
      rute: ["Pondok Indah", "Depok", "Senen Raya", "Kemang"],
    },
    {
      name: "Anna",
      plat: "B 678 DD",
      type: "Mobil",
      rute: [
        "Fatmawati",
        "Panglima Polim",
        "Depok",
        "Senen Raya",
        "Kemang",
        "Gajah Mada",
      ],
    },
  ])
);
