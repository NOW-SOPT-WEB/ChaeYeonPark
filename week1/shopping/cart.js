//로컬 스토리지 정보 가져오기
let cartProducts = JSON.parse(localStorage.getItem('cartproducts'));
console.log(cartProducts);

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
//구매하기 버튼 (체크 구현)
const buyBtn = document.querySelector('.btn-buy');
const modal = document.querySelector('.modal');
const productModal = document.querySelector('.modal-product');
//체크된 애들만
const checkedBox = document.querySelectorAll('input.checkbox:checked');
let checkedProduct = [];
let totalPrice = 0;

checkboxAll.addEventListener('click', ()=>{
    checkboxs.forEach(checkbox => {
        checkbox.checked = checkboxAll.checked;
    });
});

checkboxAll.addEventListener('change', (event) => {
    if (event.target.checked){
        checkedProduct = cartProducts.slice();
        console.log(checkedProduct);
    } else {
        checkedProduct = [];
        console.log(checkedProduct);
    };
});

checkboxs.forEach((checkbox, index) => {
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            checkedProduct.push(cartProducts[index]);
            totalPrice += checkedProduct[index].price;
        } else {
            const removedIndex = checkedProduct.indexOf(cartProducts[index]);
            if (removedIndex !== -1) {
                totalPrice -= checkedProduct[index].price;
                checkedProduct.splice(removedIndex, 1);
            }
        }
        console.log(totalPrice);
        console.log(checkedProduct[index]);
        console.log(checkedProduct);
    });
});

buyBtn.addEventListener('click', () => {
    if (checkedProduct.length > 0) {
        console.log(checkedProduct);
        modal.classList.remove('modalOff');

        //금액 보여주기
        const showTotalPrice = document.querySelector('.modal-total');
        const totalPriceComma = totalPrice.toLocaleString()
        showTotalPrice.innerHTML = `🪙 총금액 : ${totalPriceComma}`;

        // 구매할 상품 보여주기
        checkedProduct.forEach(product => {
            const modalDiv = document.createElement('div');
            modalDiv.classList.add("product");
            
            const modalDivImg = document.createElement('img');
            modalDivImg.style.width = '4rem';
            modalDivImg.src = product.image;

            const modalDivName = document.createElement('p');
            modalDivName.style.fontSize = '0.8rem';
            modalDivName.textContent = product.name;

            const modalDivPrice = document.createElement('p');
            modalDivPrice.style.fontSize = '0.8rem';
            modalDivPrice.textContent = product.price.toLocaleString();

            modalDiv.appendChild(modalDivImg);
            modalDiv.appendChild(modalDivName);
            modalDiv.appendChild(modalDivPrice);
            productModal.appendChild(modalDiv);
        });

    } else {
        alert('구매할 상품을 선택하세요.')
    }
})


//버튼 클릭하면 삭제
const deleteBtns = document.querySelectorAll('.button');
deleteBtns.forEach((deleteBtn, index) => {
    deleteBtn.addEventListener('click', () => {
        cartProducts.splice(index, 1); //cartProducts[index] 삭제
        localStorage.setItem('cartproducts', JSON.stringify(cartProducts)); //배열에서 삭제된 요소 localStorage에도 반영
        location.reload(); //삭제된 배열을 화면에도 반영
    });
});


//모달창 x 버튼
const modalBtnX = document.querySelector('.modal-btn-x');
modalBtnX.addEventListener('click', () => {
    modal.classList.add('modalOff');
})


//모달창 buy 버튼
const modalBtnBuy = document.querySelector('.modal-btn-buy');
modalBtnBuy.addEventListener('click', () => {
    cartProducts = cartProducts.filter(product => !checkedProduct.includes(product));
    localStorage.setItem('cartproducts', JSON.stringify(cartProducts));
    alert('구매가 완료되었습니다.');
    location.reload(); 
})