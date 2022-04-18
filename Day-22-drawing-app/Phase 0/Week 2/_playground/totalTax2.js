//ESTIMATE : 45 Min

// THE-SECTION =================================================================

//mendapatkan nama asset
//input => 'rumah2'
//output => 'rumah'
function findAssetName(str) {
  let output = "";
  for (let i = 0; i < str.length; i++) {
    if (!Number(str[i]) && Number(str[i]) !== 0) {
      output += str[i];
    }
  }
  return output;
}

// console.log(findAssetName("rumah1"));

// THE-SECTION =================================================================

// menghitung jumlah pajak dari 1 aset
// input => harga aset => 2000000
//       => pajak => 2
// output => 40000 (didapat dari (harga aset * pajak / 100) )
function calculateTax(price, tax) {
  return Number(((price * tax) / 100).toFixed(2));
}

// console.log(calculateTax(2000000, 2));

// THE-SECTION =================================================================

// koversi number menjadi rupiah
// input => 2357000000
// output => Rp 2.357.000.000,00
function numberToRupiah(num) {
  let output = "Rp ";
  let temp = "";
  let str = String(num);
  let count = 0;
  let decimal = "";

  for (let i = str.length - 1; i >= 0; i--) {
    temp += str[i];
    count++;

    if (str[i] === ".") {
      decimal += temp;
      temp = "";
      count = 0;
    }
    if (count === 3 && i !== 0 && str[i] !== ".") {
      temp += ".";
      count = 0;
    }
  }

  for (let i = temp.length - 1; i >= 0; i--) {
    output += temp[i];
  }

  let decimalOk = "";
  for (let i = decimal.length - 1; i >= 0; i--) {
    if (i < decimal.length - 1) {
      decimalOk += decimal[i];
    }
  }

  output += `,${decimalOk}`;
  return output;
}

// console.log(numberToRupiah(2357000000));

// THE-SECTION =================================================================

//total pajak
function totalTax(data) {
  let totalTax = 0;
  let taxList = [
    ["rumah", 2],
    ["mobil", 5],
    ["motor", 10],
    ["tanah", 2],
  ];

  for (let i = 0; i < data.length; i++) {
    let assetType = findAssetName(data[i][0]);
    for (let j = 0; j < taxList.length; j++) {
      if (assetType === taxList[j][0]) {
        let price = data[i][1];
        let tax = taxList[j][1];
        let itemTax = calculateTax(price, tax);
        totalTax += itemTax;
        break;
      }
    }
  }
  return numberToRupiah(totalTax);
}

// THE-SECTION =================================================================

let data = [
  ["rumah1", 6000000000],
  ["rumah2", 1000000000],
  ["rumah3", 800000000],
  ["rumah4", 400000000],
  ["mobil1", 1200000000],
  ["mobil2", 125000000],
  ["mobil3", 500000000],
  ["laptop1", 19000000],
  ["laptop2", 30000000],
  ["sepeda1", 12000000],
];
// console.log(data.assets[1]);

console.log(totalTax(data)); //Rp 255.250.000,00
//hitung total pajak yang harus dibayar dan dijadikan format rupiah
//panggil fungsi totalTax disini dan disesuaikan parameternya
