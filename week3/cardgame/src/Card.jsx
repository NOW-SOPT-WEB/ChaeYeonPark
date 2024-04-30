import React from "react";
import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import CardGame from "./CardGame";


const Card = ({image, onClick, isFalse, falseIndex}) => {
    const [flipped, setFlipped] = useState(false);

    const handleClick = () => {
            setFlipped(true);
            onClick();
    };

    useEffect(() => {
        if (isFalse) {
            setFlipped(false)
             // isFalse가 true일 때 카드를 다시 뒤집음
        }
    }, [isFalse]);

    return(
        <CardWrapper className="card" onClick={handleClick}>
            {flipped 
            ? <ImgWrapper src={image} alt="true" />
            : <ImgWrapper src="/animal.jpg" alt="false" />}
        </CardWrapper>
    );
};

export default Card;

const CardWrapper = styled.div`
display: flex;
flex-direction: row;
`

const ImgWrapper = styled.img`
border: 2px solid black;
border-radius: 1rem;
width: 17rem;
height: 20rem;
`
