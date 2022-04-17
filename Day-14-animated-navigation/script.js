const toggle = document.getElementById("toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", function (e) {
  nav.classList.toggle("active");
});
