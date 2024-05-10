import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const SignupPage = () => {
    const [userId, setUserId] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userNickname, setUserNickname] = useState("");
    const [userPhoneNumber, setUserPhoneNumber] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSignup = async() => {
        try {
            const response = await axios.post("http://34.64.233.12:8080/member/join", {
                authenticationId : userId,
                password : userPassword,
                nickname : userNickname,
                phone : userPhoneNumber
            });
            console.log(response.data);
            // 회원가입 성공 처리
            if (response.status === 201) {
                alert(response.data.message);
                navigate('/');
            }

        } catch (error) {
            console.error("Error: ",error);
            if (error.response && error.response.data) {
                alert(error.response.data.message);
            }}
    }


    return (
        <Layout>
        <h1>회원가입 페이지</h1>
        <InputContainer>
            <TextWapper>ID</TextWapper>
            <InputWapper
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)} />
        </InputContainer>
        <InputContainer>
            <TextWapper>비밀번호</TextWapper>
            <InputWapper
                type="text"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}  />
        </InputContainer>
        
        <CautionWapper>비밀번호 형식은 8자 이상, 숫자, 특수문자, 영어 알파벳이 포함되어야 합니다.</CautionWapper>

        <InputContainer>
            <TextWapper>닉네임</TextWapper>
            <InputWapper
                type="text"
                value={userNickname}
                onChange={(e) => setUserNickname(e.target.value)}  />
        </InputContainer>
        <InputContainer>
            <TextWapper>전화번호</TextWapper>
            <InputWapper
                type="text"
                value={userPhoneNumber}
                onChange={(e) => setUserPhoneNumber(e.target.value)}  />
        </InputContainer>

        <CautionWapper>전화번호 형식은 010-****-**** 입니다.</CautionWapper>

        <ButtonWapper onClick={handleSignup}>회원가입 하기</ButtonWapper>
        {error && <p>{error}</p>}
        </Layout>
    )

}

export default SignupPage;

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

const CautionWapper = styled.p`
    margin-right: 1rem;
    font-weight: bold;
    font-size: 0.8rem;
    color: red;
`

const InputContainer = styled.div`
    display: flex;
    align-items: center;
    width: 23rem;
    justify-content: space-between;
    margin-top: 1rem;
`

const InputWapper = styled.input`
    width: 15rem;
    height: 2rem;
    border-radius: 5rem;
    font-size: 1.3rem
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