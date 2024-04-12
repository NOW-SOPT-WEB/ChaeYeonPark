const mainBtn = document.querySelector(".btn-main");
const barBtn = document.querySelector(".btn-bar");

mainBtn.addEventListener("click", () => {
    location.href = "index.html";
});
barBtn.addEventListener("click", () => {
    location.href = "cart.html";
});