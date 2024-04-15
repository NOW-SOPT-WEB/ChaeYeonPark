//로컬 스토리지 정보 가져오기
const cartProducts = JSON.parse(localStorage.getItem('cartproducts'));
console.log(cartProducts);

//가져온 정보 보여주기
const tableClass = document.querySelector(".table");
let cartProductCard = cartProducts.map(product => {

    return `
    <tr>
    <td><input type="checkbox"></td>
    <td><img src="${product.image}" style="width: 3rem;"></td>
    <td>${product.name}</td>
    <td>${product.price}</td>
    <td>${product.category}</td>
    <td><button>삭제</button></td>
    </tr>
    `
});

tableClass.innerHTML += cartProductCard.join('');


