import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Navigate from '../utils/navigate';
import Layout from '../styles/Layout';
import ButtonWrapper from '../styles/ButtonWrapper';
import InputContainer from '../styles/InputContainer';
import InputWrapper from '../styles/InputWrapper';
import TextWapper from '../styles/TextWrapper';
import message from '../utils/message';

const SignupPage = () => {
    const [userId, setUserId] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userNickname, setUserNickname] = useState('');
    const [userPhoneNumber, setUserPhoneNumber] = useState('');

    const navigate = useNavigate();

    /* handleSignup: 회원가입 버튼을 누르면 서버에 post 하는 함수 */
    const handleSignup = async () => {
        try {
            const response = await axios.post('http://34.64.233.12:8080/member/join', {
                authenticationId: userId,
                password: userPassword,
                nickname: userNickname,
                phone: userPhoneNumber,
            });
            console.log(response.data);
            if (response.status === 201) {
                alert(response.data.message);
                navigate(Navigate.goToLogin);
            }
        } catch (error) {
            console.error('Error: ', error);
            if (error.response && error.response.data) {
                alert(error.response.data.message);
            }
        }
    };

    return (
        <Layout>
            <h1>회원가입 페이지</h1>
            <InputContainer>
                <TextWapper>ID</TextWapper>
                <InputWrapper type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
            </InputContainer>
            <InputContainer>
                <TextWapper>비밀번호</TextWapper>
                <InputWrapper type="text" value={userPassword} onChange={(e) => setUserPassword(e.target.value)} />
            </InputContainer>

            <CautionWapper>{message.CAUTION.PWD_WARN}</CautionWapper>

            <InputContainer>
                <TextWapper>닉네임</TextWapper>
                <InputWrapper type="text" value={userNickname} onChange={(e) => setUserNickname(e.target.value)} />
            </InputContainer>
            <InputContainer>
                <TextWapper>전화번호</TextWapper>
                <InputWrapper
                    type="text"
                    value={userPhoneNumber}
                    onChange={(e) => setUserPhoneNumber(e.target.value)}
                />
            </InputContainer>

            <CautionWapper>{message.CAUTION.PHONE_WARN}</CautionWapper>

            <ButtonWrapper onClick={handleSignup}>회원가입 하기</ButtonWrapper>
        </Layout>
    );
};

export default SignupPage;

const CautionWapper = styled.p`
    margin-right: 1rem;
    font-weight: bold;
    font-size: 0.8rem;
    color: red;
`;
