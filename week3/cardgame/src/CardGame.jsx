import React from "react";
import { useState } from "react";
import { shuffleArray } from "./utils"
import Card from "./Card";

const CardGame = () => {
    const [cards, setCards] = useState(shuffleArray([...Array(6).keys()]));

    const handleCardClick = (index) => {

    };

    return (
        <div className="cardgame">
            {cards.map((card, index) => (
                <Card key={index} image={`./assets/img${card}.jpeg`} onClick={() => handleCardClick(index)} />
            ))}

        </div>

    );
};

export default CardGame