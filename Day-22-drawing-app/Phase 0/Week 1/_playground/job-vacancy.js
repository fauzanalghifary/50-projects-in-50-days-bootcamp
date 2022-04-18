var city = "Thamgo";
var age = 49;
var departement = "Departemen Intelijen";

/* 
  TEST 1
  var city = "Thamgo";
  var age = 34;
  var departement = "Departemen Keamanan";

  TEST 2
  var city = "Gotham";
  var age = 24;
  var departement = "Departemen Intelijen";
  
  TEST 3
  var city = "Thamgo";
  var age = 23;
  var departement = "Departemen Keamanan";
  
  TEST 4
  var city = "Thamgo";
  var age = 34;
  var departement = "Departemen Intelijen";
*/

if (city !== "Thamgo") {
  console.log("Maaf anda tidak bisa mendaftar karena bukan warga kota Thamgo.");
} else {
  // warga kota thamgo
  if (age <= 17) {
    var x = 18 - age;
    console.log(
      `Anda masih ${x} tahun dibawah usia minimal agar dapat diterima kerja.`
    );
  } else if (age >= 50) {
    console.log("Anda seharusnya sudah pensiun");
  } else {
    var y = 31 - age;
    if (departement === "Departemen Keamanan" && age > 30) {
      console.log(
        "Anda diterima di divisi senior dan berada dibawah pimpinan James Lordon."
      );
    } else if (departement === "Departemen Keamanan" && age <= 30) {
      console.log(
        `Anda diterima di divisi junior dan berada dibawah pimpinan Jason Toad, dan ${y} tahun lagi anda masuk divisi senior.`
      );
    } else if (departement === "Departemen Intelijen" && age > 30) {
      console.log(
        "Anda diterima di divisi senior dan berada dibawah pimpinan Barbara Lordon."
      );
    } else if (departement === "Departemen Intelijen" && age <= 30) {
      console.log(
        `Anda diterima di divisi junior dan berada dibawah pimpinan Tim Brake, dan ${y} tahun lagi anda masuk divisi senior.`
      );
    }
  }
}
