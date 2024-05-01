import React, { useState, useEffect } from 'react';
import { cards } from './shuffleArray';
import styled from "@emotion/styled";

const CardTable = ({setScore}) => {
    const [isClickable, setIsClickable] = useState(true);                                  // 체크 가능한 상태를 확인하는 역할
    const [flippedCards, setFlippedCards] = useState(Array(cards.length).fill(false));     // 각 카드의 뒤집힌 상태를 관리할 배열
    const [flippedCardsIndex, setFlippedCardsIndex] = useState([]);                        // 카드의 이름을 비교할 배열

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
                // matched
                console.log('matched')
                setScore((prev) => prev + 1);
            } else {
                // not matched
                console.log('not matched')
                setIsClickable(false);
                setTimeout(() => {
                    // 두 카드를 다시 뒤집음
                    setFlippedCards(prevState => prevState.map((flipped, index) => {
                        if (flipped && flippedCardsIndex.includes(cards[index])) {
                                return false;
                            }
                            return flipped;
                        }));
                        setIsClickable(true);
                    }, 1000);
            }
            // 배열 초기화
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
    flex-wrap: wrap;
    width: 90rem;

`

const ImgWrapper = styled.img`
    border: 3px solid ${({theme}) => theme.colors.green};
    border-radius: 1rem;
    margin: 0rem 0rem 0.5rem 0.5rem;
    width: 17rem;
    height: 20rem;
`