import { useState } from "react";
import loginCat from "../assets/img/logincat.jpg"
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

const LoginPage = () => {

    const [userId, setUserId] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleLogin = async() => {
        try {
            const response = await axios.post("http://34.64.233.12:8080/member/login", {
                authenticationId : userId,
                password : userPassword
            });

            // 서버 확인
            console.log(response.data);
            if (response.status === 200) {
                const memberId = response.headers.location;
                navigate(`/main/${memberId}`);
              }      

        } catch (error) { // 서버 통신 실패
            console.error("Error: ",error);
            if (error.response && error.response.data) {
                alert(error.response.data.message);
            }
        }
    }

    const handleSignup = () => {
        navigate('/signup')
    }

    return (
        <Layout>
            <h1>로그인</h1>
            <ImageWapper src={loginCat} alt="pink" />
            <InputContainer>
                <TextWapper>ID</TextWapper>
                <InputWapper 
                    type="text"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)} />
            </InputContainer>
            <InputContainer>
                <TextWapper>PW</TextWapper>
                <InputWapper 
                    type="text"
                    value={userPassword}
                    onChange={(e) => setUserPassword(e.target.value)} />
            </InputContainer>

            <ButtonContainer>
                <ButtonWapper onClick={handleLogin}>로그인</ButtonWapper>
                <ButtonWapper onClick={handleSignup}>회원가입</ButtonWapper>
            </ButtonContainer>
            
        </Layout>
    )

};


export default LoginPage;

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10rem;
    height: 45rem;
    background-color: #C5DCFF;
    border-radius: 5rem;
`

const TextWapper = styled.p`
    margin-right: 1rem;
    font-weight: bold;
`

const ImageWapper = styled.img`
    width: 20rem;
    border-radius: 1rem;
`

const InputContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1rem;
`

const InputWapper = styled.input`
    width: 15rem;
    height: 2rem;
    border-radius: 5rem;
    font-size: 1.3rem
`

const ButtonContainer = styled.div`
    margin: 1rem;
`

const ButtonWapper = styled.button`
    padding: 0.5rem 1rem 0.5rem 1rem;
    margin: 1rem;
    border: none;
    border-radius: 1rem;
    color: white;
    background-color: #66A3FF;
    font-size: 1.3rem;
    font-weight: bold;

    &:hover {
        background-color: #2A7FFF;
    }
`
