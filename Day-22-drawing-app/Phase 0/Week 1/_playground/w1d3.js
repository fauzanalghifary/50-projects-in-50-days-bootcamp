/* PSEUDOCODE

STORE city WITH ANY STRING
STORE age WITH ANY NUMBER
STORE departement WITH ANY NUMBER

IF city EQUAL 'Thamgo'
    IF age LESS THAN EQUAL 17
        DISPLAY `Anda masih (18-age) tahun dibawah usia minimal agar dapat diterima kerja.`
    ELSE IF age MORE THAN 30 AND department IS 'Departemen Keamanan'
        DISPLAY 'Anda diterima di divisi senior dan berada dibawah pimpinan James Lordon.'
    ELSE IF age MORE THAN 30 AND department IS 'Departemen Intelijen'
        DISPLAY 'Anda diterima di divisi senior dan berada dibawah pimpinan Barbara Lordon.'
    ELSE IF age LESS THAN EQUAL 30 AND department IS 'Departemen Keamanan'
        DISPLAY 'Anda diterima di divisi junior dan berada dibawah pimpinan Jason Toad, dan (31-age) tahun lagi anda masuk divisi senior'
    ELSE IF age LESS THAN EQUAL 30 AND department IS 'Departemen Intelijen'
        DISPLAY 'Anda diterima di divisi junior dan berada dibawah pimpinan Tim Brake, dan (31-age) tahun lagi anda masuk divisi senior'
ELSE
    DISPLAY 'Maaf anda tidak bisa mendaftar karena bukan warga kota Thamgo.'
END IF
*/

// DEFAULT
// var city = "Thamgo";
// var age = 18;
// var departement = "Keamanan";

// if (city === "Thamgo") {
//   if (age <= 17) {
//     console.log(
//       `Anda masih ${
//         18 - age
//       } tahun dibawah usia minimal agar dapat diterima kerja.`
//     );
//   } else if (age > 30 && departement === "Departemen Keamanan") {
//     console.log(
//       "Anda diterima di divisi senior dan berada dibawah pimpinan James Lordon."
//     );
//   } else if (age > 30 && departement === "Departemen Intelijen") {
//     console.log(
//       "Anda diterima di divisi senior dan berada dibawah pimpinan Barbara Lordon."
//     );
//   } else if (age <= 30 && departement === "Departemen Keamanan") {
//     console.log(
//       `Anda diterima di divisi junior dan berada dibawah pimpinan Jason Toad, dan ${
//         31 - age
//       } tahun lagi anda masuk divisi senior.`
//     );
//   } else if (age <= 30 && departement === "Departemen Intelijen") {
//     console.log(
//       `Anda diterima di divisi junior dan berada dibawah pimpinan Tim Brake, dan ${
//         31 - age
//       } tahun lagi anda masuk divisi senior.`
//     );
//   } else {
//     console.log("INPUT TIDAK VALID"); //akan dieksekusi jika nama departemen tidak valid
//   }
// } else {
//   console.log("Maaf anda tidak bisa mendaftar karena bukan warga kota Thamgo.");
// }

// TAMBAH FITUR

// var city = "Thamgo";
// var age = 18;
// var departement = "Keamanan";

// if (city === "Thamgo") {
//   if (age <= 17) {
//     console.log(
//       `Anda masih ${
//         18 - age
//       } tahun dibawah usia minimal agar dapat diterima kerja.`
//     );
//   } else if (age > 30 && departement === "Departemen Keamanan") {
//     console.log(
//       "Anda diterima di divisi senior dan berada dibawah pimpinan James Lordon."
//     );
//   } else if (age > 30 && departement === "Departemen Intelijen") {
//     console.log(
//       "Anda diterima di divisi senior dan berada dibawah pimpinan Barbara Lordon."
//     );
//   } else if (age <= 30 && departement === "Departemen Keamanan") {
//     console.log(
//       `Anda diterima di divisi junior dan berada dibawah pimpinan Jason Toad, dan ${
//         31 - age
//       } tahun lagi anda masuk divisi senior.`
//     );
//   } else if (age <= 30 && departement === "Departemen Intelijen") {
//     console.log(
//       `Anda diterima di divisi junior dan berada dibawah pimpinan Tim Brake, dan ${
//         31 - age
//       } tahun lagi anda masuk divisi senior.`
//     );
//   } else {
//     console.log("INPUT TIDAK VALID"); //akan dieksekusi jika nama departemen tidak valid
//   }
// } else {
//   console.log("Maaf anda tidak bisa mendaftar karena bukan warga kota Thamgo.");
// }

// versi h8

// var city = "Thamgo";
// var age = 51;
// var departement = "Departemen Finansial";

// if (city !== "Thamgo") {
//   console.log("Maaf anda tidak bisa mendaftar karena bukan warga kota Thamgo.");
// } else if (age <= 17) {
//   console.log(
//     "Anda masih " +
//       (18 - age) +
//       " tahun dibawah usia minimal agar dapat diterima kerja."
//   );
// } else if (age > 60) {
//   console.log(
//     `Maaf anda tidak bisa mendaftar karena usia anda ${
//       age - 60
//     } tahun di atas usia maksimal`
//   );
// } else {
//   if (departement === "Departemen Keamanan") {
//     if (age > 30) {
//       console.log(
//         "Anda diterima di divisi senior dan berada dibawah pimpinan James Lordon."
//       );
//     } else {
//       console.log(
//         "Anda diterima di divisi junior dan berada dibawah pimpinan Jason Toad, dan " +
//           (31 - age) +
//           " tahun lagi anda masuk divisi senior."
//       );
//     }
//   } else if (departement === "Departemen Intelijen") {
//     if (age > 30) {
//       console.log(
//         "Anda diterima di divisi senior dan berada dibawah pimpinan Barbara Lordon."
//       );
//     } else {
//       console.log(
//         "Anda diterima di divisi junior dan berada dibawah pimpinan Tim Brake, dan " +
//           (31 - age) +
//           " tahun lagi anda masuk divisi senior."
//       );
//     }
//   } else {
//     console.log(
//       "Maaf, kami hanya menerima lowongan untuk Departemen Keamanan dan Departemen Intelijen"
//     );
//   }
// }

// KAK IAM
var city = "Thamgo";
var age = 34;
var departement = "Departemen Intelijen";

if (city !== "Thamgo") {
  console.log("Maaf anda tidak bisa mendaftar karena bukan warga kota Thamgo.");
} else {
  // Warga Thamgo
  if (age <= 17) {
    var x = 18 - age;
    console.log(
      `Anda masih ${x} tahun dibawah usia minimal agar dapat diterima kerja.`
    );
  } else {
    //   Lebih dari usia minimal
    if (departement === "Departemen Keamanan" && age > 30) {
      console.log(
        "Anda diterima di divisi senior dan berada dibawah pimpinan James Lordon."
      );
    } else if (departement === "Departemen Keamanan" && age < 30) {
      var y = 31 - age;
      console.log(
        `Anda diterima di divisi junior dan berada dibawah pimpinan Jason Toad, dan ${y} tahun lagi anda masuk divisi senior.`
      );
    } else if (departement === "Departemen Intelijen" && age > 30) {
      console.log(
        "Anda diterima di divisi senior dan berada dibawah pimpinan Barbara Lordon."
      );
    } else if (departement === "Departemen Intelijen" && age < 30) {
      var y = 31 - age;
      console.log(
        `Anda diterima di divisi junior dan berada dibawah pimpinan Tim Brake, dan ${y} tahun lagi anda masuk divisi senior.`
      );
    }
  }
}
