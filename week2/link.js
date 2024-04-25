//이동 기능을 하는 친구들
const mainBtn = document.querySelector(".btn-main");
const barBtn = document.querySelector(".btn-bar");
const cartBtn = document.querySelector(".btn-cart");
const menuBar = document.querySelector(".menu");
const xBtn = document.querySelector(".btn-x");

//main 아이콘
mainBtn.addEventListener("click", () => {
    location.href = "index.html";
});

//menu 중 장바구니로 이동하기
cartBtn.addEventListener("click", () => {
    location.href = "cart.html";
});

//menu 아이콘
barBtn.addEventListener("click", () => {
    //menuOn 클래스명 바꿔주는 방식으로 menu 움직임 만들기
    menuBar.classList.remove("menuOff");
    menuBar.classList.add("menuOn");
});

//menu 닫는 x 버튼
xBtn.addEventListener("click", () => {
    menuBar.classList.remove("menuOn");
    menuBar.classList.add("menuOff");
});



