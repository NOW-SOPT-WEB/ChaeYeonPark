import { useState } from "react";
import { suffleType } from "../utils/suffleType";
import { SOPTI_LIST } from "../data";

const RandomType = () => {
    
    const [randomResult, setRandomResult] = useState(false);
    const result = suffleType(SOPTI_LIST);

    const handleClickRandom = () => {
        setRandomResult(true);
    }

    const handleClickReplay = () => {
        setRandomResult(false);
    }

    return(
        <div>
        {randomResult ? 
            <div>
                <h2>랜덤 SOPT 유형은?</h2>
                <img src={SOPTI_LIST[result].image} alt={result}></img>
                <h2>{result}</h2>
                <button onClick={handleClickReplay}>다시하기</button>
            </div>
            : 
            <div>
                <h2>SOPT 유형 랜덤으로 만나보기</h2>
                <button onClick={handleClickRandom}>랜덤 추천</button>
            </div>
            }
        </div>
    )


}

export default RandomType;