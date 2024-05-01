import React, { useState, useEffect } from 'react';
import { cards } from './shuffleArray'; // 상수 및 배열 가져오기
import styled from "@emotion/styled";

const CardTable = ({setScore}) => {
    const [isClickable, setIsClickable] = useState(true);
    const [flippedCards, setFlippedCards] = useState(Array(cards.length).fill(false));     // 각 카드의 뒤집힌 상태를 관리할 배열
    const [flippedCardsIndex, setFlippedCardsIndex] = useState([]);                          // 카드의 이름을 비교할 배열

    // 카드 클릭 시
    const handleClick = (index) => {
        if (isClickable && !flippedCards[index]) {
            // 해당 카드 뒤집기
            const newFlippedCards = [...flippedCards];          // 현재 뒤집힌 상태 배열을 복사해서 수정
            newFlippedCards[index] = !newFlippedCards[index];   // 클릭한 카드의 뒤집힌 상태를 반전시킴
            setFlippedCards(newFlippedCards);                   // 변경된 상태를 적용

            // 선택하는 카드 배열에 넣기
            const newFlippedCardsIndex = [...flippedCardsIndex, cards[index]]
            setFlippedCardsIndex(newFlippedCardsIndex);
            console.log(flippedCardsIndex)
        } else {
            console.log("클릭 불가능");
        }
    };

    // 배열 속 카드가 2개가 되었을 때, 비교 시작
    useEffect( () => {
        if(flippedCardsIndex.length === 2) {
            console.log('matchCheck');
            if (flippedCardsIndex[0].name === flippedCardsIndex[1].name) {
                console.log('match')
                setScore((prev) => prev + 1);
            } else {
                console.log('not match')
                //다시 뒤집기
                setIsClickable(false);
                setTimeout(() => {
                    // 두 카드를 다시 뒤집음
                    setFlippedCards(prevState => prevState.map((flipped, index) => {
                        // 두 카드를 다시 뒤집음
                        if (flipped && flippedCardsIndex.includes(cards[index])) {
                                return false;
                            }
                            return flipped;
                        }));
                        setIsClickable(true);
                    }, 1000);
            }
            setFlippedCardsIndex([]);
        }
     },[flippedCardsIndex])

    return (
        <CardWrapper className="card">
            {cards.map((card, index) => (
                <ImgWrapper
                    key={index}
                    src={flippedCards[index] ? card.src : "/animal.jpg"}
                    alt={card.name}
                    onClick={() => handleClick(index)}
                />
            ))}
        </CardWrapper>
    );
}

export default CardTable;

const CardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

const ImgWrapper = styled.img`
    border: 2px solid black;
    border-radius: 1rem;
    width: 17rem;
    height: 20rem;
`