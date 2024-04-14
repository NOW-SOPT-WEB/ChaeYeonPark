const mainBtn = document.querySelector(".btn-main");
const barBtn = document.querySelector(".btn-bar");
const cartBtn = document.querySelector(".btn-cart");
const menuBar = document.querySelector(".menu");
const xBtn = document.querySelector(".btn-x");

mainBtn.addEventListener("click", () => {
    location.href = "index.html";
});

cartBtn.addEventListener("click", () => {
    location.href = "cart.html";
});

barBtn.addEventListener("click", () => {
    //menuOn 클래스명 바꿔주기
    menuBar.classList.remove("menuOff");
    menuBar.classList.add("menuOn");
});

xBtn.addEventListener("click", () => {
    menuBar.classList.remove("menuOn");
    menuBar.classList.add("menuOff");
});