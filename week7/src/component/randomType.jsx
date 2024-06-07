import { useState } from "react";
import { suffleType } from "../utils/suffleType";
import { SOPTI_LIST } from "../data";
import SOPTI_IMAGE from '../assets/image/SOPTI.jpg'
import { ContentLayout, ImageWrapper, SubButtonWrapper, SubContentLayout } from "../styles/styledComponent";

const RandomType = () => {
    
    const [randomResult, setRandomResult] = useState(false);
    const result = suffleType(SOPTI_LIST);

    const handleClickStartRandom = () => {
        setRandomResult(true);
    }

    const handleClickReplay = () => {
        setRandomResult(false);
    }

    return(
        <div>
        {randomResult ? 
            <ContentLayout>
                <h2>랜덤 SOPT 유형은?</h2>
                <SubContentLayout>
                    <ImageWrapper src={SOPTI_LIST[result].image} alt={result}></ImageWrapper>
                    <h3>우리가 랜덤으로 만나본 유형은 {result} 입니다!</h3>
                    <SubButtonWrapper onClick={handleClickReplay}>다시하기</SubButtonWrapper>
                </SubContentLayout>
            </ContentLayout>
            : 
            <ContentLayout>
                <h2>SOPT 유형 랜덤으로 만나보기</h2>
                <ImageWrapper src={SOPTI_IMAGE} alt='SOPTI 메인 이미지' />
                <SubButtonWrapper onClick={handleClickStartRandom}>START</SubButtonWrapper>
            </ContentLayout>
            }
        </div>
    )


}

export default RandomType;