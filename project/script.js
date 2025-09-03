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

let row1 = document.querySelector("#first-row");
let img0 = document.getElementById("change-image");

row1.addEventListener("click", function (dets) {
  dets.preventDefault();
  img0.setAttribute("src", "images/org.avif");
});

let row2 = document.querySelector("#sec-row");
let img = document.getElementById("change-image");

row2.addEventListener("click", function (dets) {
  dets.preventDefault();
  img.setAttribute("src", "images/change1.jpg");
});

let row3 = document.querySelector("#third-row");
let img1 = document.getElementById("change-image");

row3.addEventListener("click", function (dets) {
  dets.preventDefault();
  img1.setAttribute("src", "images/change2.avif");
});








