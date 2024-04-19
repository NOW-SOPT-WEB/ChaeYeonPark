import { PRODUCTS_LIST } from './list.js';

//상품 넣기
const productSection = document.querySelector(".section");


//전체 상품 넣기
const allProduct = function() {
    const productCards = PRODUCTS_LIST.map(product => {
        return `
        <article class="product product-skin">
            <img src="${product.image}" alt="${product.name}">
            <h4>${product.name}</h4>
            <p>${product.price.toLocaleString()}원</p>
            <button class="fa-solid fa-heart" type="button"></button>
        </article>
        `;
    });
    productSection.innerHTML = productCards.join('');
};


//카테고리 필터링 후 상품 넣기
const filterProduct = function(category) {
    let newProduct = PRODUCTS_LIST.filter(function(item) {
        return (item.category === category);
    });

    const newProductCard = newProduct.map(product => {
        return `
        <article class="product product-skin">
            <img src="${product.image}" alt="${product.name}">
            <h4>${product.name}</h4>
            <p>${product.price.toLocaleString()}원</p>
            <button class="fa-solid fa-heart" type="button"></button>
        </article>
        `;
    });
    productSection.innerHTML = newProductCard.join('');
}

//버튼 가져와서 버튼 값을 설정
const navBtnAll = document.querySelector(".nav_all");
const navBtnBaguette = document.querySelector(".nav_baguette");
const navBtnPastry = document.querySelector(".nav_pastry");
const navBtnBread = document.querySelector(".nav_bread");


//버튼 값이 nav_baguette면 -> 카테고리는 "baguette"로 설정
const baguette = "baguette";
const pastry = "pastry";
const bread = "bread";


//각 버튼에 따라 카테고리 내부 설정
navBtnAll.addEventListener("click", () => {allProduct()});
navBtnBaguette.addEventListener("click", () => {filterProduct(baguette)});
navBtnPastry.addEventListener("click", () => {filterProduct(pastry)});
navBtnBread.addEventListener("click", () => {filterProduct(bread)});


//장바구니에 담는 과정, 장바구니에 들어갈 product 배열 'productCart'
const productCart = JSON.parse(localStorage.getItem('cartproducts')) || []; //기존 정보 로드 + 새 정보를 위해.

productSection.addEventListener("click", event => { //동적으로 생성된 article에 이벤트 위임 진행
    const evTarget = event.target;
    if (evTarget.classList.contains("product")){

        const productName = evTarget.querySelector("h4").textContent;
        const productInfo = PRODUCTS_LIST.find(product => product.name === productName); //배열.find()로 이름이 일치하는 객체 배정
        
        const confirmed = confirm(`
        ${productName} 상품을 장바구니에 담으시겠습니까?
        `);

        if (confirmed) {
            console.log("장바구니 이동");
            productCart.push(productInfo);
            localStorage.setItem('cartproducts', JSON.stringify(productCart)); //localStorage에 보내기
        } else {
            console.log("취소 클릭");
        }
    }
});


//초기 화면은 전체 상품
allProduct();

