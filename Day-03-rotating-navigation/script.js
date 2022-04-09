const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");

open.addEventListener("click", function (e) {
  container.classList.add("show-nav");
});

close.addEventListener("click", function (e) {
  container.classList.remove("show-nav");
});

console.log(1);
