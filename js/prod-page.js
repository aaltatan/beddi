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
// Start Product Page
// Total Calculation and add functionality to plus and minus btns
let prodPrice = document.getElementById("prod-price").innerHTML;
prodPrice = Number(prodPrice.replace(/,/g, ""));
let minusBtn = document.getElementById("qty-minus");
let plusBtn = document.getElementById("qty-plus");
let qtyField = document.getElementById("quanity-field").innerHTML;
qtyField = Number(qtyField);
let totalField = document.getElementById("product-page-total").innerHTML;
totalField = Number(totalField.replace(/,/g, ""));
minusBtn.addEventListener("click", () => {
  if (qtyField >= 2) {
    qtyField--;
    document.getElementById("quanity-field").innerHTML = qtyField;
    document.getElementById("product-page-total").innerHTML = (
      qtyField * prodPrice
    ).toLocaleString();
  }
});
plusBtn.addEventListener("click", () => {
  qtyField++;
  document.getElementById("quanity-field").innerHTML = qtyField;
  document.getElementById("product-page-total").innerHTML = (
    qtyField * prodPrice
  ).toLocaleString();
});
window.onload = () => {
  plusBtn.click();
  minusBtn.click();
};
// images manuplation
let primaryImage = document.getElementById("primary-image");
let seconderyImages = document.querySelector(".secondry-images");
seconderyImages.addEventListener("click", (e) => {
  let targetClassName = e.target.className;
  targetClassName = targetClassName.split(" ");
  if (targetClassName[0] === "secondry-image") {
    let targetID = targetClassName[1][targetClassName[1].length - 1];
    let prodID = targetClassName[1].split("-")[1][1];
    primaryImage.src = `../imgs/product-0${prodID}-0${targetID}.jpg`;
  }
});
