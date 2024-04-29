import React from "react";
import { useState } from "react";
import { shuffleArray } from "./utils"
import Card from "./Card";
import styled from "@emotion/styled";

const CardGame = () => {
    const [cards1, setCards1] = useState(shuffleArray([...Array(5).keys()]));
    const [cards2, setCards2] = useState(shuffleArray([...Array(5).keys()]));
    let CardClickCount = 0;
    let CardMatchCount = 0;
    let CardNum1 = -1;
    let CardNum2 = -1;

    const handleCardClick = (card) => {
        if (CardNum1 === -1) {
            CardNum1 = card;
        } else {
            CardNum2 = card;
        }
        CardClickCount++;

        console.log(CardNum1);
        console.log(CardNum2);

        if (CardClickCount === 2) {
            if (CardNum1 === CardNum2) {
                console.log("true");
                CardMatchCount++; //카운터 header 컴포넌트에 전달하기
            } else {
                console.log("false");
                //카드 다시 false -> card 컴포넌트에 전달하기
            };

            CardNum1 = -1;
            CardNum2 = -1;
            CardClickCount = 0;
        };



    };

    return (
        <>
        <CardWrapper className="cardgame">
            {cards1.map((card, index) => (
                <Card key={index} image={`/img${card}.jpeg`} onClick={() => handleCardClick(card)}/>
            ))}
        </CardWrapper>
        
        <CardWrapper className="cardgame">
            {cards2.map((card, index) => (
                <Card key={index} image={`/img${card}.jpeg`} onClick={() => handleCardClick(card)} />
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