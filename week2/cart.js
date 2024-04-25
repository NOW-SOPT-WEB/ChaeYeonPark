//로컬 스토리지 정보 가져오기 'cartProducts'
let cartProducts = JSON.parse(localStorage.getItem('cartproducts'));
console.log(cartProducts);


//가져온 정보 보여주기 (``으로)
const tableClass = document.querySelector(".table");
let cartProductCard = cartProducts.map(product => {
        return `
        <tr class="tr">
        <td><input type="checkbox" class="checkbox"></td>
        <td><img src="${product.image}" style="width: 3rem" alt="${product.name}"></td>
        <td>${product.name}</td>
        <td>${product.price.toLocaleString()}</td>
        <td>${product.category}</td>
        <td><button class="button btn">삭제</button></td>
        </tr>
        `
    });
tableClass.innerHTML += cartProductCard.join('');


//장바구니가 비어있으면?
const tableStyle = document.querySelector(".table_style");
if (cartProducts.length == 0) {
    const emptyCart = document.createElement('p');
    emptyCart.textContent = '장바구니가 비어있어요!';
    emptyCart.style.color = 'saddlebrown';
    emptyCart.style.fontWeight = 'bold';
    emptyCart.style.textAlign = 'center';
    tableStyle.appendChild(emptyCart);
};


//체크박스를 위한 변수 선언
const checkboxAll = document.querySelector('.all')
const checkboxs = document.querySelectorAll('.checkbox');


//구매하기를 위한 변수 선언, 구매할 상품 'checkedProduct'
const buyBtn = document.querySelector('.btn-buy');
const modal = document.querySelector('.modal');
const productModal = document.querySelector('.modal-product');
let checkedProduct = [];
let totalPrice = 0;


//체크박스 맨 위에거 누르면 -> 전체선택
checkboxAll.addEventListener('click', ()=>{
    checkboxs.forEach(checkbox => {
        checkbox.checked = checkboxAll.checked;
    });
});


//체크박스 맨 위에거 눌렀을 때 -> 구매할 상품 선택 및 토탈 계산
checkboxAll.addEventListener('change', (event) => {
    if (event.target.checked){
        checkedProduct = cartProducts.slice();

        totalPrice = 0; //추가 합산 없도록
        cartProducts.forEach(product => {
            totalPrice += product.price;
        }); 

        console.log(checkedProduct);
        console.log(totalPrice);

    } else {
        checkedProduct = [];
        totalPrice = 0;
        console.log(checkedProduct);
        console.log(totalPrice);
    };
});


//체크박스 개별 선택할 때 -> 구매할 상품 선택 및 토탈 계산
checkboxs.forEach((checkbox, index) => {
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            checkedProduct.push(cartProducts[index]);
            totalPrice += cartProducts[index].price;
        } else {
            const removedIndex = checkedProduct.indexOf(cartProducts[index]);
            if (removedIndex !== -1) {
                totalPrice -= cartProducts[index].price;
                checkedProduct.splice(removedIndex, 1);
            }
        }
        console.log(totalPrice);
        console.log(checkedProduct[index]);
        console.log(checkedProduct);
    });
});


//구매하기 버튼 누르면 모달창 생성
buyBtn.addEventListener('click', () => {
    if (checkedProduct.length > 0) {
        console.log(checkedProduct);
        modal.classList.remove('modalOff');

        //토탈 금액 보여주기
        const showTotalPrice = document.querySelector('.modal-total');
        const totalPriceComma = totalPrice.toLocaleString()
        showTotalPrice.innerHTML = `🪙 총금액 : ${totalPriceComma}`;

        //구매할 상품 보여주기 (세미나 때 배운 DOM 조작 메서드)
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

//홈으로 버튼 클릭하면 홈으로
const homeBtn = document.querySelector('.btn-home');
homeBtn.addEventListener('click', () => {
    location.href = "index.html";
})

//삭제 버튼 클릭하면 삭제
const deleteBtns = document.querySelectorAll('.button');
deleteBtns.forEach((deleteBtn, index) => {
    deleteBtn.addEventListener('click', () => {
        cartProducts.splice(index, 1); //cartProducts[index] 삭제
        localStorage.setItem('cartproducts', JSON.stringify(cartProducts)); //배열에서 삭제된 요소 localStorage에도 반영
        location.reload(); //삭제된 배열을 화면에도 반영
    });
});


//모달창 x 버튼 -> 모달창 닫기
const modalBtnX = document.querySelector('.modal-btn-x');
modalBtnX.addEventListener('click', () => {
    modal.classList.add('modalOff');
    checkedProduct = [];

})


//모달창 buy 버튼 -> 상품 리스트에서 삭제 후 구매완료 alert창
const modalBtnBuy = document.querySelector('.modal-btn-buy');
modalBtnBuy.addEventListener('click', () => {
    cartProducts = cartProducts.filter(product => !checkedProduct.includes(product));
    localStorage.setItem('cartproducts', JSON.stringify(cartProducts));
    alert('구매가 완료되었습니다.');
    location.reload(); 
})