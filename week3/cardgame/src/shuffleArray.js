import { CARD_IMAGE } from './image'; // 이미지 배열 가져오기

// Fisher-Yates 알고리즘을 사용하여 배열을 섞는 함수
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

//이미지 두개씩 랜덤으로 나오게 하는 함수
function initializeCards(array) {
    const selectedImages = [];
    while (selectedImages.length < 5) {
        const randomIndex = Math.floor(Math.random() * array.length);
        const randomImage = array[randomIndex];
        if (!selectedImages.includes(randomImage)) {
            selectedImages.push(randomImage);
        }
    }

    const resultArray = [...selectedImages, ...selectedImages];
    return shuffleArray(resultArray);
}

export const cards = initializeCards(CARD_IMAGE);

