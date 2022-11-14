const codes = document.querySelectorAll(".code");

codes[0].focus();

codes.forEach((code, idx) => {
  code.addEventListener("keydown", (e) => {
    if (idx < 5 && e.key >= 0 && e.key <= 9) {
      codes[idx].value = "";
      setTimeout(() => codes[idx + 1].focus(), 10);
    } else if (idx > 0 && e.key === "Backspace") {
      setTimeout(() => codes[idx - 1].focus(), 10);
    } else if (idx === 5 && e.key >= 0 && e.key <= 9) {
      codes[idx].value = "";
      setTimeout(() => codes[idx].focus(), 10);
    }
  });
});
