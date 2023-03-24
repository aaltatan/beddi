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
// ----------------------- Landing Image Switcher ------------------------
let myLanding = document.getElementById("landing");
setInterval(() => {
  let styles = window.getComputedStyle(myLanding);
  let myUrl = styles.backgroundImage;
  myUrl = myUrl.slice(5, -2);
  let ind = +myUrl[myUrl.length - 5];
  if (ind === 4) ind = 0;
  myLanding.style.backgroundImage = `url(imgs/landing-bg-0${ind + 1}.jpg)`;
}, 10000);
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
// ----------------------- HomePage Shopping Cart ------------------------
// Showing the Menu Button & Close
let cartIcon = document.getElementById("cart-btn");
let cartMenu = document.getElementById("curtain-cart-menu");
let menuCloseBtn = document.getElementById("menu-close-button");
cartIcon.addEventListener("click", () => (cartMenu.style.bottom = "0"));
menuCloseBtn.addEventListener("click", () => (cartMenu.style.bottom = "-120%"));
// Simulating add to cart with 'Special Section ONLY'
let productsSection = document.getElementById("products");
let cartArr = [];
let testArr = [];
productsSection.addEventListener("click", (e) => {
  if (e.target.id.startsWith("add-to-cart-0")) {
    let prodId = e.target.id;
    let prodNumber = prodId[prodId.length - 1];
    let prodTitle = document.querySelector(
      `#product-0${prodNumber} .brand-title`
    ).textContent;
    let prodPrice = document
      .querySelector(`#product-0${prodNumber} .price-0${prodNumber}`)
      .textContent.replace(",", "");
    prodPrice = Number(prodPrice);
    // --------
    let cartHandler = document.getElementById("cart-handler");
    let cartBody = document.getElementById("cart-body");
    let cartLeftWheel = document.getElementById("cart-wheel-left");
    let cartRightWheel = document.getElementById("cart-wheel-right");
    let cartLineOne = document.getElementById("cart-line-one");
    let cartLineTwo = document.getElementById("cart-line-two");
    let cartLineThree = document.getElementById("cart-line-three");
    // --------
    cartHandler.classList.add("shake-anmi");
    cartBody.classList.add("shake-anmi");
    cartLeftWheel.classList.add("wheel-anmi");
    cartRightWheel.classList.add("wheel-anmi");
    cartLineOne.classList.add("lines-anmi");
    cartLineTwo.classList.add("lines-anmi");
    cartLineThree.classList.add("lines-anmi");
    setTimeout(() => {
      cartHandler.classList.remove("shake-anmi");
      cartBody.classList.remove("shake-anmi");
      cartLeftWheel.classList.remove("wheel-anmi");
      cartRightWheel.classList.remove("wheel-anmi");
      cartLineOne.classList.remove("lines-anmi");
      cartLineTwo.classList.remove("lines-anmi");
      cartLineThree.classList.remove("lines-anmi");
    }, 1300);
    // --------
    let cartMenuContainer = document.getElementById("cart-menu-container");
    if (!testArr.includes(prodId)) {
      testArr.push(prodId);
      cartArr.push(prodPrice);
      let cartTotal = cartArr.reduce((acc, a) => (a = a + acc), 0);
      document
        .getElementById("heading-total")
        .setAttribute("data-value", cartTotal.toLocaleString());
      cartIcon.setAttribute("data-value", testArr.length);
      // -------
      let cartMenuProduct = document.createElement("div");
      cartMenuProduct.className = "cart-menu-product";
      cartMenuProduct.id = `cart-menu-product-0${prodNumber}`;
      // -------
      let xBtn = document.createElement("a");
      xBtn.href = "javascript:void(0)";
      xBtn.classList.add("product-close-button");
      xBtn.classList.add(`inside-x-button-0${prodNumber}`);
      xBtn.textContent = "×";
      cartMenuProduct.appendChild(xBtn);
      // -------
      let xImg = document.createElement("img");
      xImg.src = `./imgs/product-0${prodNumber}-01.jpg`;
      xImg.alt = `product-0${prodId}-01`;
      cartMenuProduct.appendChild(xImg);
      // -------
      let xText = document.createElement("div");
      xText.classList.add("text");
      // ---------
      let xTextbrandTitle = document.createElement("h3");
      xTextbrandTitle.className = "brand-title";
      xTextbrandTitle.textContent = `${prodTitle}`;
      xText.appendChild(xTextbrandTitle);
      // ---------
      let xTextbrandDesc = document.createElement("p");
      xTextbrandDesc.className = "product-description";
      xTextbrandDesc.textContent =
        "Lorem ipsum dolor sit, amet consectetur adipisicing.";
      xText.appendChild(xTextbrandDesc);
      // ---------
      let xTextQty = document.createElement("div");
      xTextQty.className = "quanity";
      // -------------
      let xTextQtyPriceSpan = document.createElement("span");
      xTextQtyPriceSpan.className = "price-span";
      xTextQtyPriceSpan.id = `price-span-0${prodNumber}`;
      xTextQtyPriceSpan.textContent = `${Number(prodPrice).toLocaleString()}`;
      xTextQty.appendChild(xTextQtyPriceSpan);
      // ---------
      xText.appendChild(xTextQty);
      // -------
      cartMenuProduct.appendChild(xText);
      // ---
      cartMenuContainer.appendChild(cartMenuProduct);
    }
  }
});
// --------------------
cartMenu.addEventListener("click", (e) => {
  let targetClassName = e.target.className.split(" ");
  if (targetClassName[0] === "product-close-button") {
    let targetID = targetClassName[targetClassName.length - 1];
    targetID = targetID[targetID.length - 1];
    let targetPrice = document.getElementById(
      `price-span-0${targetID}`
    ).innerHTML;
    targetPrice = Number(targetPrice.replace(/,/g, ""));
    cartArr.splice(cartArr.indexOf(targetPrice), 1);
    document.getElementById(`cart-menu-product-0${targetID}`).remove();
    testArr.splice(testArr.indexOf(`add-to-cart-0${targetID}`), 1);
    cartIcon.setAttribute("data-value", testArr.length);
    let cartTotal = cartArr.reduce((acc, a) => (a = a + acc), 0);
    document
      .getElementById("heading-total")
      .setAttribute("data-value", cartTotal.toLocaleString());
  }
});
