//초기 리스트 담기, 카테고리 설정
const PRODUCTS_LIST = [
    {id: 1, name: "코타바게트", price: 4800, image: "img/Baguette.jpg", category: "baguette"},
    {id: 2, name: "카카오바게트", price: 5500, image: "img/kakaoBaguette.jpg", category: "baguette"},
    {id: 3, name: "산딸기바게트", price: 6900, image: "img/strawberryBaguette.jpg", category: "baguette"},
    {id: 4, name: "바질크런치바게트", price: 7500, image: "img/basilBaguette.jpg", category: "baguette"},
    {id: 5, name: "크루아상", price: 4800, image: "img/Croissant.jpg", category: "pastry"},
    {id: 6, name: "얼그레이크루아상", price: 6100, image: "img/earlgreyCroissant.jpg", category: "pastry"},
    {id: 7, name: "먹물크루아상", price: 5800, image:"img/blackCroissant.jpg", category: "pastry"},
    {id: 8, name: "뺑스위스", price: 6700, image: "img/Pastry.jpg", category: "pastry"},
    //사진로드 안됨{id: 9, name: "뺑오쇼콜라", price: 6600, iamge: "img/chocolatePastry.jpg", category: "pastry"},
    {id: 10, name: "소세지페스츄리", price: 5500, image: "img/hamBaguette.jpg", category: "pastry"},
    {id: 11, name: "바질치즈깜빠뉴", price: 6300, image: "img/basilBread.jpg", category: "bread"},
    {id: 12, name: "블루베리마롱깜빠뉴", price: 6300, image: "img/blueberryBread.jpg", category: "bread"},
    {id: 13, name: "무화과크랜베리깜빠뉴", price: 6300, image: "img/figBread.jpg", category: "bread"},
    {id: 14, name: "먹물치즈치아바타", price: 5800, image: "img/blackCiabatta.jpg", category: "bread"},
    {id: 15, name: "올리브치아바타", price: 5200, image: "img/Ciabatta.jpg", category: "bread"}
]

//백틱으로 html 카드 내부 설정 후 
//${}에 리스트 값 넣기
const productSection = document.querySelector(".section");

// const createProduct = function() {
//     //상품 정보 가져와서 매핑
//     const productCards =
//     PRODUCTS_LIST.map(product => {
        //  return `
        //  <article class="product product-skin">
        //      <img src="${product.image}" alt="${product.name}">
        //      <h4>${product.name}</h4>
        //      <p>${product.price}원</p>
        //      <button class="fa-solid fa-heart" type="button"></button>
        //  </article>
        //  `;
//     });
//     productSection.innerHTML = productCards.join('');
// }

//all일 경우.......
const allProduct = function() {
    const productCards = PRODUCTS_LIST.map(product => {
        return `
        <article class="product product-skin">
            <img src="${product.image}" alt="${product.name}">
            <h4>${product.name}</h4>
            <p>${product.price}원</p>
            <button class="fa-solid fa-heart" type="button"></button>
        </article>
        `;
    });
    productSection.innerHTML = productCards.join('');
};

allProduct();

//카테고리 필터링
const filterProduct = function(category) {
    //버튼 누르면 버튼에 해당하는 값과 category 값 비교
    //filter 함수로 new 배열을 만들어서 그걸 매핑!!!!
    let newProduct = PRODUCTS_LIST.filter(function(item) {
        return (item.category === category);
    });

    const newProductCard = newProduct.map(product => {
        return `
        <article class="product product-skin">
            <img src="${product.image}" alt="${product.name}">
            <h4>${product.name}</h4>
            <p>${product.price}원</p>
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

navBtnAll.addEventListener("click", () => {allProduct()});
navBtnBaguette.addEventListener("click", () => {filterProduct(baguette)});
navBtnPastry.addEventListener("click", () => {filterProduct(pastry)});
navBtnBread.addEventListener("click", () => {filterProduct(bread)});


