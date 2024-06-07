import { useState } from "react";
import { SOPTI_LIST } from "../data";
import CheckTypeQuestion from "./checkTypeQuestion";
import { ContentLayout, SubButtonWrapper, ImageWrapper, SubContentLayout } from "../styles/styledComponent";

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
                <ContentLayout>
                    <h2>당신의 SOPTI는 바로?</h2>
                    {Object.keys(selectSopti).map(key => (
                        <SubContentLayout key={key}>
                            <ImageWrapper src={selectSopti[key].image} alt={key} />
                            <h3> {key} 입니다!</h3>
                        </SubContentLayout>
                    ))}
    
                    <SubButtonWrapper onClick={handleClickReset}>다시하기</SubButtonWrapper>
                </ContentLayout> )
            : <CheckTypeQuestion 
            handleChangeSetFunction = {handleChangeSetFunction}
            selectSopti = {selectSopti} />
            }
        </div>
    )
}

export default CheckType;