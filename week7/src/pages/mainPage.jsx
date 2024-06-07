import { useState } from "react";
import CheckType from "../component/checkType";
import RandomType from "../component/randomType";
import Header from "../component/header";
import { ContentLayout, ButtonWrapper, ButtonContainer } from "../styles/styledComponent";

const MainPage = () => {
    let renderComponent;
    const [method, setMethod] = useState(0);

    const handleClickCheckType = () => {
        setMethod(1)
    }

    const handleClickRandomType = () => {
        setMethod(2)
    }

    switch (method) {
        case 0:
            renderComponent = 
            <ContentLayout>
                <h2>원하는 SOPTI 유형보는 방식을 골라봐!</h2>
                <ButtonContainer>
                    <ButtonWrapper onClick={handleClickCheckType}>
                        🧪 SOPTI 유형 검사하기
                    </ButtonWrapper>
                    
                    <ButtonWrapper onClick={handleClickRandomType}>
                        ⚡️ SOPTI 유형 랜덤으로 만나보기
                    </ButtonWrapper>
                </ButtonContainer>
            </ContentLayout>
            break
        case 1:
            renderComponent = <CheckType />
            break
        case 2:
            renderComponent = <RandomType />
            break
    }

    return(
        <div>
            <Header method={method}/>
            {renderComponent}
        </div>
    );
};

export default MainPage;


