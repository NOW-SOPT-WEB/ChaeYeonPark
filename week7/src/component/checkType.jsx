import { useEffect, useState } from "react";
import { SOPTI_LIST } from "../data";
import { deleteObject } from "../utils/deleteObject";

const CheckType = () => {
    const [selectSopti, setSelectSopti] = useState(SOPTI_LIST);
    //const [deleteValue, setDeleteValue] = useState('');
    let deleteValue;
    const [questionNumber, setQuestionNumber] = useState(0);
    const [click, setClick] = useState(0);
    const [question1, setQuestion1] = useState('');
    const [question2, setQuestion2] = useState('');
    const [questionType, setQuestionType] = useState('meet');
    const [nextButton, setNextButton] = useState('다음으로');

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
    }, [questionNumber])


    const handleClickType1 = () => {
        setClick(1)
    };

    const handleClickType2 = () => {
        setClick(2)
    };

    const handleClickType = () => {

        if (click === 1) {
            switch (questionType) {
                case 'meet': 
                    //setDeleteValue('B');
                    deleteValue = 'B';
                    break
                case 'time':
                    //setDeleteValue('N');
                    deleteValue = 'N';
                    break
                case 'lead':
                    //setDeleteValue('F');
                    deleteValue = 'F';
                    break
                case 'plan':
                    //setDeleteValue('P');
                    deleteValue = 'P';
                    break
            }
        }
        if (click === 2) {
            switch (questionType) {
                case 'meet': 
                    //setDeleteValue('D');
                    deleteValue = 'D';
                    break
                case 'time':
                    //setDeleteValue('M');
                    deleteValue = 'M';
                    break
                case 'lead':
                    //setDeleteValue('L');
                    deleteValue = 'L';
                    break
                case 'plan':
                    //setDeleteValue('J');
                    deleteValue = 'J';
                    break
            }
        }

        if (deleteValue) {
            const newSopti = deleteObject(selectSopti, questionType, deleteValue);
            setSelectSopti(newSopti);
            setQuestionNumber(prev => prev + 1);
        }

        console.log(selectSopti);
    };


    return (
        <div>
            <div>
                <button onClick={handleClickType1}> {question1}</button>
                <button onClick={handleClickType2}> {question2}</button>
            </div>
            <button onClick={handleClickType}>{nextButton}</button>
        </div>
    )

}

export default CheckType;