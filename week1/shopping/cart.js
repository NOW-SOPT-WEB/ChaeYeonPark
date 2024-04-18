//로컬 스토리지 정보 가져오기
const cartProducts = JSON.parse(localStorage.getItem('cartproducts'));
console.log(cartProducts);
console.log(cartProducts[0]);
//const cartProducts = Object.values(cartProductsData);
//console.log(cartProducts);

//가져온 정보 보여주기

    const tableClass = document.querySelector(".table");
    let cartProductCard = cartProducts.map(product => {
    
        return `
        <tr class="tr">
        <td><input type="checkbox" class="checkbox"></td>
        <td><img src="${product.image}" style="width: 3rem" alt="${product.name}"></td>
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td>${product.category}</td>
        <td><button class="button">삭제</button></td>
        </tr>
        `
    });
    
    tableClass.innerHTML += cartProductCard.join('');
    //+= 하니까 th 덮어 써지지 않음.


//체크 전체
const checkboxAll = document.querySelector('.all')
const checkboxs = document.querySelectorAll('.checkbox');

checkboxAll.addEventListener('click', ()=>{
    checkboxs.forEach(checkbox => {
        checkbox.checked = checkboxAll.checked;
    });
});

//구매하기 버튼 (체크 구현)



//버튼 클릭하면 삭제
const deleteBtns = document.querySelectorAll('.button');
deleteBtns.forEach((deleteBtn, index) => {
    deleteBtn.addEventListener('click', () => {
        cartProducts.splice(index, 1); //cartProducts[index] 삭제
        localStorage.setItem('cartproducts', JSON.stringify(cartProducts)); //배열에서 삭제된 요소 localStorage에도 반영
        location.reload(); //삭제된 배열을 화면에도 반영
    });
});


