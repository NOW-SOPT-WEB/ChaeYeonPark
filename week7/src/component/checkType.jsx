import { useEffect, useState } from "react";
import { SOPTI_LIST } from "../data";
import { deleteObject } from "../utils/deleteObject";

const CheckType = () => {
    const [selectSopti, setSelectSopti] = useState(SOPTI_LIST);
    let deleteValue;
    const [questionNumber, setQuestionNumber] = useState(0);
    const [click, setClick] = useState(0);
    const [question1, setQuestion1] = useState('');
    const [question2, setQuestion2] = useState('');
    const [questionType, setQuestionType] = useState('meet');
    const [nextButton, setNextButton] = useState('다음으로');
    const [renderComponent, setRenderComponent] = useState(true);

    //번호에 따라 질문 내용 바꾸기
    useEffect(() => {
        switch (questionNumber) {
            case 0:
                setQuestionType('meet')
                setQuestion1('대면 회의를 선호한다.')
                setQuestion2('비대면 회의를 선호한다.')
                break
            case 1:
                setQuestionType('time')
                setQuestion1('주로 날이 밝을 때 작업한다.')
                setQuestion2('주로 어두울 때 작업한다.')
                break
            case 2:
                setQuestionType('lead')
                setQuestion1('팀장을 선호하는 편이다.')
                setQuestion2('팀원을 선호하는 편이다.')
                break
            case 3:
                setQuestionType('plan')
                setQuestion1('계획적으로 순서를 정해서 작업하는 편이다.')
                setQuestion2('이것 저것 생각나는대로 작업하는 편이다.')
                setNextButton('결과보기')
                break
        }

    }, [questionNumber, renderComponent])


    const handleClickType1 = () => {
        setClick(1)
    };

    const handleClickType2 = () => {
        setClick(2)
    };

    const handleClickType = () => {

        setQuestionNumber(prev => prev + 1);

        if (click === 1) {
            switch (questionType) {
                case 'meet': 
                    deleteValue = 'B';
                    break
                case 'time':
                    deleteValue = 'N';
                    break
                case 'lead':
                    deleteValue = 'F';
                    break
                case 'plan':
                    deleteValue = 'P';
                    break
            }
        }
        if (click === 2) {
            switch (questionType) {
                case 'meet': 
                    deleteValue = 'D';
                    break
                case 'time':
                    deleteValue = 'M';
                    break
                case 'lead':
                    deleteValue = 'L';
                    break
                case 'plan':
                    deleteValue = 'J';
                    break
            }
        }

        if (deleteValue) {
            const newSopti = deleteObject(selectSopti, questionType, deleteValue);
            setSelectSopti(newSopti);
        }

        if (nextButton === '결과보기') {
            setRenderComponent(false);
        }
    };


    return (
        <div>
        { renderComponent ? (
            <div>
                <div>
                    <button onClick={handleClickType1}> {question1}</button>
                    <button onClick={handleClickType2}> {question2}</button>
                </div>
                <button onClick={handleClickType}>{nextButton}</button>
            </div>
        )
        : <div>
            <h2>당신의 SOPTI는?</h2>
            {Object.keys(selectSopti).map(key => (
                <img key={key} src={selectSopti[key].image} alt={key} />
            ))}
            <h3>{JSON.stringify(Object.keys(selectSopti))}</h3>

        </div>
        }
            </div>
    )

}

export default CheckType;