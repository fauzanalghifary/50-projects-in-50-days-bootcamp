const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((t) => {
  t.addEventListener("click", function () {
    t.parentNode.classList.toggle("active");
  });
});
