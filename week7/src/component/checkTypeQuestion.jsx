import { useState, useEffect } from "react";
import { deleteObject } from "../utils/deleteObject";
import PropTypes from 'prop-types';
import { ButtonContainer, ButtonWrapper, ContentLayout, SubButtonWrapper, ImageWrapper, DisableSubButtonWrapper } from "../styles/styledComponent";
import SOPTI_IMAGE from '../assets/image/SOPTI.jpg'

const CheckTypeQuestion = ({ handleChangeSetFunction, selectSopti }) => {
    const [question, setQuestion] = useState(false);

    const [click, setClick] = useState(0);
    const [question1, setQuestion1] = useState('');
    const [question2, setQuestion2] = useState('');
    const [questionNumber, setQuestionNumber] = useState(0);
    const [questionType, setQuestionType] = useState('meet');
    const [deleteValue, setDeleteValue] = useState([]);
    const [nextButton, setNextButton] = useState('다음으로');


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
        if (click) {
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
            setClick(0);
            setQuestionNumber(prev => prev + 1);
        }
    };

    // 결과보기 버튼 클릭
    useEffect(() => {
        if (nextButton === '결과보기' && deleteValue.length > 0) {
            const newSopti = deleteObject({ ...selectSopti }, deleteValue);
            handleChangeSetFunction(newSopti)
        }
    }, [deleteValue]);

    function handleClickStartType() {
        setQuestion(true)
    }

    return(
        <div>
            { question
                ? (
                    <ContentLayout>
                        <h2>SOPTI 유형 검사하기 ({questionNumber + 1}/4)</h2>
                        <ButtonContainer>
                            <ButtonWrapper onClick={handleClickType1}> {question1}</ButtonWrapper>
                            <ButtonWrapper onClick={handleClickType2}> {question2}</ButtonWrapper>
                        </ButtonContainer>
                        <ButtonContainer>
                            { questionNumber
                            ? <SubButtonWrapper onClick={handleClickPrev}>이전으로</SubButtonWrapper>
                            : <DisableSubButtonWrapper>이전으로</DisableSubButtonWrapper>
                            }
                            { click 
                            ? <SubButtonWrapper onClick={handleClickType}>{nextButton}</SubButtonWrapper>
                            : <DisableSubButtonWrapper>{nextButton}</DisableSubButtonWrapper>
                            }
                            
                        </ButtonContainer>
                    </ContentLayout> )
                : (
                <ContentLayout>
                    <h2>SOPTI 유형 검사하기</h2>
                    <ImageWrapper src={SOPTI_IMAGE} alt='SOPTI 메인 이미지' />
                    <SubButtonWrapper onClick={handleClickStartType}>START</SubButtonWrapper>
                </ContentLayout> )
            }

        </div>
    )

}

// PropTypes를 사용하여 props의 타입을 정의
CheckTypeQuestion.propTypes = {
    handleChangeSetFunction: PropTypes.func.isRequired, // 필수 함수형 props
    selectSopti: PropTypes.object.isRequired, // 필수 객체형 props
};

export default CheckTypeQuestion;