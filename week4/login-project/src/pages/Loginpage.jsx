import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginCat from '../assets/img/logincat.jpg';
import styled from 'styled-components';
import axios from 'axios';
import Navigate from '../utils/navigate';
import Layout from '../styles/Layout';
import ButtonWrapper from '../styles/ButtonWrapper';
import ImageWrapper from '../styles/ImageWrapper';
import InputWrapper from '../styles/InputWrapper';
import InputContainer from '../styles/InputContainer';
import TextWapper from '../styles/TextWrapper';

const LoginPage = () => {
    const [userId, setUserId] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const navigate = useNavigate();

    /* handleLogin : 로그인 버튼을 누르면 서버와 통신하는 함수 */
    const handleLogin = async () => {
        try {
            const response = await axios.post('http://34.64.233.12:8080/member/login', {
                authenticationId: userId,
                password: userPassword,
            });

            if (response.status === 200) {
                const memberId = response.headers.location;
                navigate(`/main/${memberId}`);
            }
        } catch (error) {
            console.error('Error: ', error);
            if (error.response && error.response.data) {
                alert(error.response.data.message);
            }
        }
    };

    /* handleSignup : 회원가입 페이지로 이동하는 함수 */
    const handleSignup = () => {
        navigate(Navigate.goToSignup);
    };

    return (
        <Layout>
            <h1>로그인</h1>
            <ImageWrapper src={loginCat} alt="pink" />
            <InputContainer>
                <TextWapper>ID</TextWapper>
                <InputWrapper type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
            </InputContainer>
            <InputContainer>
                <TextWapper>PW</TextWapper>
                <InputWrapper type="text" value={userPassword} onChange={(e) => setUserPassword(e.target.value)} />
            </InputContainer>

            <ButtonContainer>
                <ButtonWrapper onClick={handleLogin}>로그인</ButtonWrapper>
                <ButtonWrapper onClick={handleSignup}>회원가입</ButtonWrapper>
            </ButtonContainer>
        </Layout>
    );
};

export default LoginPage;

const ButtonContainer = styled.div`
    margin: 1rem;
`;
