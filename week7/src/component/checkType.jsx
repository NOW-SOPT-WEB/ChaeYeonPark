import { useState } from "react";
import { SOPTI_LIST } from "../data";
import CheckTypeQuestion from "./checkTypeQuestion";

const CheckType = () => {
    const [renderResult, setRenderResult] = useState(false);
    const [selectSopti, setSelectSopti] = useState(SOPTI_LIST);

    function handleChangeSetFunction(newSopti) {
        setSelectSopti(newSopti);
        setRenderResult(true);
    }

    function handleClickReset() {
        setSelectSopti(SOPTI_LIST);
        setRenderResult(false);
    }


    return (
        <div>
            { renderResult 
            ? (
                <div>
                    <h2>당신의 SOPTI는?</h2>
                    {Object.keys(selectSopti).map(key => (
                        <div key={key}>
                            <img src={selectSopti[key].image} alt={key} />
                            <h3>{key}</h3>
                        </div>
                    ))}
    
                    <button onClick={handleClickReset}>다시하기</button>
                </div> )
            : <CheckTypeQuestion 
            handleChangeSetFunction = {handleChangeSetFunction}
            selectSopti = {selectSopti} />
            }
        </div>
    )
}

export default CheckType;