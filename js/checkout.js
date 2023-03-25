// --------------------------- Dark/Light Mode ---------------------------
let switchBtn = document.getElementById("light-dark-switch");
let rootCSS = document.querySelector(":root");
switchBtn.addEventListener("click", () => {
  if (switchBtn.className === "sunshine") {
    switchBtn.className = "sunleft";
    rootCSS.style.setProperty("--bg-color", "#252525");
    rootCSS.style.setProperty("--text-color", "#eee");
    rootCSS.style.setProperty("--border", "#181818");
  } else {
    switchBtn.className = "sunshine";
    rootCSS.style.setProperty("--bg-color", "#eee");
    rootCSS.style.setProperty("--text-color", "#252525");
    rootCSS.style.setProperty("--border", "#ddd");
  }
});
// ------------------------- X Button for Header -------------------------
let myLinks = document.getElementById("links");
let burger = document.getElementById("burger");
burger.addEventListener("click", () => {
  myLinks.classList.toggle("display-flex");
  burger.classList.toggle("x-burger");
});
document.addEventListener("click", (event) => {
  if (!myLinks.contains(event.target) && !burger.contains(event.target)) {
    myLinks.classList.remove("display-flex");
    burger.classList.remove("x-burger");
  }
});
// ---- Hiding Header on Scroll Down and Functioning Scroll To top -------
let prevScrollpos = window.pageYOffset;
let scrollBtn = document.getElementById("scroll-to-top");
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("main-navbar").style.top = "0";
  } else {
    document.getElementById("main-navbar").style.top = "-100%";
  }
  prevScrollpos = currentScrollPos;
  // ---------------
  if (window.scrollY >= 400) {
    scrollBtn.style.left = "1rem";
  } else {
    scrollBtn.style.left = "-4rem";
  }
};
scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
