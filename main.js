document.addEventListener("DOMContentLoaded", function () {
  var openButton = document.getElementById("openNavbar");
  var closeButton = document.getElementById("close");
  var navbar = document.getElementById("navbar");
  var mainContent = document.getElementById("main-content");

  openButton.addEventListener("click", function () {
    navbar.classList.remove("navbar-hidden");
  });

  closeButton.addEventListener("click", function () {
    navbar.classList.toggle("navbar-hidden");
    mainContent.classList.toggle("content-full");
  });
});

function generatePDF() {
  const element = document.querySelector(".img-fluid");
  html2pdf().from(element).save("");
}