import React, { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
import styled from "@emotion/styled";

//배열 섞는 함수
function shuffleArray(array) {
    for (let i = array.length-1; i>0; i--) {
        const j = Math.floor(Math.random()*(i+1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

//이미지 두개씩 랜덤으로 나오게 하는 함수
function initializeCards() {
    const imageFiles = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    const selectedImages = [];
    while (selectedImages.length < 5) {
        const randomIndex = Math.floor(Math.random() * imageFiles.length);
        const randomImage = imageFiles[randomIndex];
        if (!selectedImages.includes(randomImage)) {
            selectedImages.push(randomImage);
        }
    }

    const resultArray = [...selectedImages, ...selectedImages];
    return shuffleArray(resultArray);
}

//이미지 두 개 판별하기
const CardGame = () => {
    const [cards, setCards] = useState(initializeCards());
    const [flippedCards, setFlippedCards] = useState([]);
    const [flippedIndex, setFlippedIndex] = useState([]);
    const [isFalse, setIsFalse] = useState(false);
    
    const handleCardClick = (card, index) => {
        if (flippedCards.length < 2) {
            //펼쳐진 카드를 담는 배열 flippedCards에 추가하기 -> 인덱스 추가
            const newFlippedCards = [...flippedCards, card];
            //인덱스를 담는 배열
            const newFlippedIndex = [...flippedIndex, index];
            setFlippedCards(newFlippedCards);
            setFlippedIndex(newFlippedIndex);
            setIsFalse(false);
        };
    };

        useEffect(() => {

            if (flippedCards.length === 2) {
                //배열 속 아이들을 비교하기.
                if (flippedCards[0] === flippedCards[1]) {
                    //배열 속 아이들이 같다면,
                    console.log('matched!');
                    setFlippedIndex([]);


                } else {
                    //배열 속 아이들이 다르다면,
                    console.log('not matched!')
                    setIsFalse(true);
                }
                setFlippedCards([]);
            }

        }, [flippedCards]);

    return (
        <>
        <CardWrapper className="cardgame">
            {cards.map((card, index) => (
                <Card 
                key={index} 
                image={`/img${card}.jpg`} 
                onClick={() => handleCardClick(card, index)}
                isFalse={isFalse}
                flippedIndex={flippedIndex.includes(index)}
               />
            ))}
        </CardWrapper>
        </>

    );
};

export default CardGame;

const CardWrapper = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
`