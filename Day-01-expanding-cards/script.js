const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    // removeActiveClasses();
    document.querySelector(".active").classList.remove("active");
    panel.classList.add("active");
  });
});

// function removeActiveClasses() {
//   panels.forEach((panel) => {
//     panel.classList.remove("active");
//   });
// }
