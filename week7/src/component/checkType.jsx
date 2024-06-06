import { useEffect, useState } from "react";
import { SOPTI_LIST } from "../data";
import { deleteObject } from "../utils/deleteObject";
import { handleClickReset } from "../utils/handleClickReset";

const CheckType = () => {
    const [selectSopti, setSelectSopti] = useState(SOPTI_LIST);
    const [click, setClick] = useState(0);
    const [question1, setQuestion1] = useState('');
    const [question2, setQuestion2] = useState('');
    const [questionNumber, setQuestionNumber] = useState(0);
    const [questionType, setQuestionType] = useState('meet');
    const [deleteValue, setDeleteValue] = useState([]);
    const [nextButton, setNextButton] = useState('다음으로');
    const [renderComponent, setRenderComponent] = useState(true);

    // 질문 번호에 따라 질문 내용 바꾸기
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

    }, [questionNumber])

    // 이전으로 버튼 클릭
    const handleClickPrev = () => {
        setNextButton('다음으로')
        setQuestionNumber(prev => prev - 1);
        setDeleteValue(prev => prev.slice(0, -1)); // 마지막 값 삭제
    };

    // 첫번째 선택지 클릭
    const handleClickType1 = () => {
        setClick(1)
    };

    // 두번째 선택지 클릭
    const handleClickType2 = () => {
        setClick(2)
    };

    // 다음으로 버튼 클릭
    const handleClickType = () => {
        if (click === 1) {
            switch (questionType) {
                case 'meet': 
                    setDeleteValue(prev => [...prev, 'B']);
                    break
                case 'time':
                    setDeleteValue(prev => [...prev, 'N']);
                    break
                case 'lead':
                    setDeleteValue(prev => [...prev, 'F']);
                    break
                case 'plan':
                    setDeleteValue(prev => [...prev, 'P']);
                    break
            }
        }
        if (click === 2) {
            switch (questionType) {
                case 'meet': 
                    setDeleteValue(prev => [...prev, 'D']);
                    break
                case 'time':
                    setDeleteValue(prev => [...prev, 'M']);
                    break
                case 'lead':
                    setDeleteValue(prev => [...prev, 'L']);
                    break
                case 'plan':
                    setDeleteValue(prev => [...prev, 'J']);
                    break
            }
        }
        setQuestionNumber(prev => prev + 1);
        console.log(deleteValue);
    };

    // 결과보기 버튼 클릭
    useEffect(() => {
        if (nextButton === '결과보기' && deleteValue.length > 0) {
            const newSopti = deleteObject({ ...selectSopti }, deleteValue);
            setSelectSopti(newSopti);
            setRenderComponent(false);
        }
    }, [deleteValue]);

    return (
        <div>
            { renderComponent ? (
                <div>
                    <h2>SOPTI 유형 검사하기</h2>
                    <div>
                        <button onClick={handleClickType1}> {question1}</button>
                        <button onClick={handleClickType2}> {question2}</button>
                    </div>
                    <button onClick={handleClickPrev}>이전으로</button>
                    <button onClick={handleClickType}>{nextButton}</button>
                </div> )
            : (
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
            }
        </div>
    )
}

export default CheckType;