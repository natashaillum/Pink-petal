const acc = document.getElementsByClassName("accordian");
const toggle = document.querySelector(".toggle");
const menuIcon = document.getElementById("fa-bars");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    const panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      this.style.backgroundColor = "#f3e3e6";
    } else {
      panel.style.display = "block";
      this.style.backgroundColor = "#e0958e";
    }
  });
}

menuIcon.addEventListener("click", function () {
  if (toggle.style.display === "block") {
    toggle.style.display = "none";
  } else {
    toggle.style.display = "block";
  }
});
