import { useState } from "react";
import { SOPTI_LIST } from "../data";
import { deleteObject } from "../utils/deleteObject";

const CheckType = () => {
    let selectSopti = SOPTI_LIST;

    let selectBox;
    const [type, setType] = useState(0);
    //const [time, setTime] = useState(0);
    //const [lead, setLead] = useState(0);
    //const [plan, setPlan] = useState(0);

    const handleClickTypeD = () => {
        setType(1)
    }

    const handleClickTypeB = () => {
        setType(2)
    }

    switch (type) {
        case 0:
        selectBox = 
            <div>
                <button onClick={handleClickTypeD}>대면 회의를 선호한다.</button>
                <button onClick={handleClickTypeB}>비대면 회의를 선호한다.</button>
            </div>
        break

        case 1:
        //배열에서 type='B'인 애들을 제거하고, 다음 물음으로 넘어간다.
        deleteObject(selectSopti, 'type', 'B')
        console.log(selectSopti)
        break

        case 2:
        //배열에서 type='D'인 애들을 제거하고, 다음 물음으로 넘어간다.
        deleteObject(selectSopti, type, 'B')
        console.log(selectSopti)
        break
    }

    return (
        <div>
            {selectBox}
        </div>
    )

}

export default CheckType;