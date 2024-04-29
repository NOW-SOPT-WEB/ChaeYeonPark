import React from "react";
import { useState } from "react";
import { shuffleArray } from "./utils"
import Card from "./Card";
import styled from "@emotion/styled";

const CardGame = () => {
    const [cards1, setCards1] = useState(shuffleArray([...Array(5).keys()]));
    const [cards2, setCards2] = useState(shuffleArray([...Array(5).keys()]));

    const handleCardClick = (index) => {
        
    };

    return (
        <>
        <CardWrapper className="cardgame">
            {cards1.map((card, index) => (
                <Card key={index} image={`/img${card}.jpeg`} onClick={() => handleCardClick(index)} />
            ))}
        </CardWrapper>
        
        <CardWrapper className="cardgame">
            {cards2.map((card, index) => (
                <Card key={index} image={`/img${card}.jpeg`} onClick={() => handleCardClick(index)} />
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