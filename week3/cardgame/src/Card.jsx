import React from "react";
import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import CardGame from "./CardGame";


const Card = ({index, image, onClick, isFalse, flippedIndex}) => {
    const [flipped, setFlipped] = useState(false);

    const handleClick = () => {
            setFlipped(true);
            onClick();
    };

    useEffect(() => {
        // 만약 flippedIndex에 해당하는 카드면 뒤집음
        if (isFalse && flippedIndex) {
            setTimeout(()=> {
                setFlipped(false)
            }, 1000)  
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
