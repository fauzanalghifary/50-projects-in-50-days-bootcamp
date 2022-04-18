function splice(data, add, start, del) {
  // Insert your code here
  let result = [];
  if (!Array.isArray(data)) {
    return result;
  }
  if (!start) {
    start = 0;
  }
  if (!del) {
    del = 0;
  }

  if (data.length % 2 === 1) {
    let i = 0; // 1
    while (i < data.length) {
      if (i === start) {
        result.push(add);
      }
      if (i < start || i >= start + del) {
        result.push(data[i]);
      }
      i++;
    }
  }

  return result;
}

var arr = ["idaz", "fajrin", "samir"];
var newElement = "anggara";
var start = 1;
var del = 2;

console.log(splice(arr, newElement, start, del));
// ekspektasi output ["idaz", "anggara"]
console.log(
  splice(["idaz", "fajrin", "samir", "basil"], newElement, start, del)
);
// eksepektasi outputnya []
