const rows = document.querySelectorAll(".row1");
  rows.forEach((box) => {
    box.addEventListener("click", () => {
      // Reset sabka color
      rows.forEach((el) => {
        el.style.backgroundColor = "";
        el.style.color = "";
      });

      // Sirf clicked element ka color change karo
      box.style.backgroundColor = "rgb(247,245,255)";
      box.style.color = "black";
    });
  });