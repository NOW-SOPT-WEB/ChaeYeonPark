import React from "react";
import { useState } from "react";


const Card = ({image, onClick}) => {
    const [fliped, setFliped] = useState(false);

    const handleClick = () => {
        setFliped(true);
        onClick();
    };

    return(
        <div className="card" onClick={handleClick}>
            {fliped ? <img src={image} alt="true"></img> : <img src="./assets/animal.jpg" alt="false"></img>}
        </div>
    );
};

export default Card;

