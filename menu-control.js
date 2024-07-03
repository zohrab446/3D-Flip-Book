document.addEventListener("DOMContentLoaded", function () {
    var preloader = document.getElementById("preloader");
    preloader.style.display = "none"; // Preloader'ı gizle

  const pageFlip = new St.PageFlip(document.getElementById("demoBookExample"), {
    width: 550, // base page width
    height: 750, // base page height

    size: "stretch",
    // set threshold values:
    minWidth: 315,
    maxWidth: 350,
    minHeight: 420,
    maxHeight: 750,

    maxShadowOpacity: 0.5, // Half shadow intensity
    showCover: true,
    mobileScrollSupport: false, // disable content scrolling on mobile devices
  });

  // load pages
  pageFlip.loadFromHTML(document.querySelectorAll(".page"));

  // document.querySelector(".page-total").innerText = pageFlip.getPageCount();
  // document.querySelector(".page-orientation").innerText =
  //   pageFlip.getOrientation();

  document.querySelector(".btn-prev").addEventListener("click", () => {
    pageFlip.flipPrev(); // Turn to the previous page (with animation)
  });

  document.querySelector(".btn-next").addEventListener("click", () => {
    pageFlip.flipNext(); // Turn to the next page (with animation)
  });

  // triggered by page turning
  pageFlip.on("flip", (e) => {
    // document.querySelector(".page-current").innerText = e.data + 1;
  });

  // triggered when the state of the book changes
  pageFlip.on("changeState", (e) => {
    // document.querySelector(".page-state").innerText = e.data;
  });

  // triggered when page orientation changes
  pageFlip.on("changeOrientation", (e) => {
    document.querySelector(".page-orientation").innerText = e.data;
  });

  const menuItems = document.querySelectorAll('.menu-item')
  menuItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      const page = event.target.getAttribute("href").split('#p')[1];
      console.log("page: " , page);
      pageFlip.flip(Number(page), "bottom");
    });
  })
});