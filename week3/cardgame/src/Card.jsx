import React from "react";
import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import CardGame from "./CardGame";


const Card = ({image, onClick, isFlipped}) => {
    const [flipped, setFlipped] = useState(false);

    // useEffect(() => {
    //     // 상위 컴포넌트로부터 isFlipped props가 변경될 때마다 flipped 상태 업데이트
    //     setFlipped(isFlipped);
    // }, [isFlipped]);

    const handleClick = () => {
        if (!flipped) {
            // 이미 뒤집힌 카드가 아닌 경우에만 클릭 이벤트 처리
            setFlipped(true);
            onClick();
        }
    };

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
