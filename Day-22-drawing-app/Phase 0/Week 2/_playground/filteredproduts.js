// -------------- FILTER PRODUCTS -----------------THE-SECTION

let products = [
  ["baju", 50000, 3],
  ["sepatu", 125000, 2],
  ["tas", 99000, 1],
  ["jam tangan", 525000, 1],
  ["permen", 2500, 0],
];

function filterStockAndPrice(data, money) {
  let result = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i][1] <= money && data[i][2] > 0) {
      result.push(data[i]);
    }
  }

  return result;
}

function formatOutput(data) {
  let result = [];

  for (let i = 0; i < data.length; i++) {
    result.push(data[i][0]);
  }

  return result;
}

function findMatching(data, money) {
  if (!data) {
    return "invalid input";
  }

  const filteredData = filterStockAndPrice(data, money);

  const formattedData = formatOutput(filteredData);

  if (formattedData.length === 0) {
    return "tidak ada produk yang cocok";
  }

  return formattedData;
}

console.log(findMatching(products, 100000)); // ['baju', 'tas']
console.log(findMatching(products, 5000)); // 'tidak ada produk yang cocok'
console.log(findMatching()); // 'invalid input'
