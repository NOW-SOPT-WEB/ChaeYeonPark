import React from "react";
import { useState } from "react";
import styled from "@emotion/styled";
import CardGame from "./CardGame";


const Card = ({image, onClick}) => {
    const [fliped, setFliped] = useState(false);

    const handleClick = () => {
        setFliped(true);
        onClick();
    };

    return(
        <CardWrapper className="card" onClick={handleClick}>
            {fliped ? <ImgWrapper src={image} alt="true"></ImgWrapper> : <ImgWrapper src="/animal.jpg" alt="false"></ImgWrapper>}
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
