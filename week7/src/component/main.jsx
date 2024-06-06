import { useState } from "react";
import CheckType from "./checkType";
import RandomType from "./randomType";

const Main = () => {
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
            <div>
                <h2>원하는 SOPTI 유형보는 방식을 골라봐!</h2>

                <button onClick={handleClickCheckType}>
                    SOPTI 유형 검사하기
                </button>
                
                <button onClick={handleClickRandomType}>
                    SOPTI 유형 랜덤으로 만나보기
                </button>
            </div>
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
            {renderComponent}
        </div>
    );

};

export default Main;