import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const MyPage = () => {
    const { id } = useParams(); 
    const [userData, setUserData] = useState({});
    const [isToggled, setIsToggled] = useState(false);
    const [prevPw, setPrevPw] = useState("");
    const [newPw, setNewPw] = useState("");
    const [newPwVerification, setNewPwVerification] = useState("");

    const navigate = useNavigate();

    /* 페이지가 로드되면, id값을 이용해 마이 페이지 정보를 get! */
    useEffect(() => {
        const getUserData = async () => {
            try {
                console.log(id)
                const response = await axios.get(`http://34.64.233.12:8080/member/info`, {
                    headers: {
                        memberId: id,
                    }
                });
                
                if (response.status === 200) {
                    setUserData(response.data.data);
                }

            } catch (error) {
                console.log("Error getUserData: ", error);
                if (error.response && error.response.data) {
                    alert(error.response.data.message);
                }
            }
        };

        getUserData();

    }, [id]);


    /* handleToggle : 버튼을 클릭하면 토글을 보여주거나, 숨겨주는 함수 */
    const handleToggle = () => {
        setIsToggled(prevState => !prevState);
    }

    /* handleChanegePw : 비밀번호 변경을 관리하는 함수, patch로 서버와 통신 */
    const handleChangePw = async() => {

        if (!prevPw || !newPw || !newPwVerification) {
            alert('비밀번호를 모두 입력해주세요.');
            return;
        }

        try {
            const response = await axios.patch("http://34.64.233.12:8080/member/password", {
                previousPassword: prevPw,
                newPassword: newPw,
                newPasswordVerification: newPwVerification,
            }, {
                headers: {
                    memberId: id
                }
            });

            if (response.status === 200) {
                alert('비밀번호 변경이 완료되었습니다.')
            }
        } catch (error) {
            console.error("Error: ", error);
            alert(error.response.data.message)
        }
    }

    /* handleMain : 메인 페이지로 이동하는 함수 */
    const handleMain = () => {
        navigate(`/main/${id}`)
    }


    return (
    <Layout>
    <h1>Mypage</h1>
    <InfoContainer>
        <TextWapper>ID</TextWapper>
        <TextWapper>{userData.authenticationId}</TextWapper>
    </InfoContainer>
    <InfoContainer>
        <TextWapper>닉네임</TextWapper>
        <TextWapper>{userData.nickname}</TextWapper>
    </InfoContainer>
    <InfoContainer>
        <TextWapper>전화번호</TextWapper>
        <TextWapper>{userData.phone}</TextWapper>
    </InfoContainer>
  
    <ToggleButton onClick={handleToggle}> 비밀번호를 변경하시겠습니까?</ToggleButton>

    {isToggled ? 
    <ToggleLayout>
        <InputContainer>
            <TextWapper>기존 비밀번호</TextWapper>
            <InputWapper
                type="text"
                value={prevPw}
                onChange={(e) => setPrevPw(e.target.value)} />
        </InputContainer>
        <InputContainer>
            <TextWapper>새로운 비밀번호</TextWapper>
            <InputWapper
                type="text"
                value={newPw}
                onChange={(e) => setNewPw(e.target.value)} />
        </InputContainer>
        <InputContainer>
            <TextWapper>비밀번호 확인</TextWapper>
            <InputWapper
                type="text"
                value={newPwVerification}
                onChange={(e) => setNewPwVerification(e.target.value)} />
        </InputContainer>
        <ChangeButtonWapper onClick={handleChangePw}>비밀번호 변경</ChangeButtonWapper>
    </ToggleLayout>
    : <TextWapper></TextWapper>
    }

    <ButtonWapper onClick={handleMain}>홈으로</ButtonWapper>

    </Layout>  
)}

export default MyPage;

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

const InfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 15rem;
`

const TextWapper = styled.p`
    margin-right: 1rem;
    font-weight: bold;
`

const ToggleButton = styled.button`
    margin: 1rem;
    border: none;
    background-color: transparent;
    color: #5A5A5A;
    text-decoration: underline;
    cursor: pointer;

    &:hover {
        color: black;
        font-weight: bold;
    }
`

const ToggleLayout = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    border-radius: 1rem;
    background-color: #E5E3DF;
`

const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
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

const ChangeButtonWapper = styled.button`
    padding: 0.5rem 1rem 0.5rem 1rem;
    margin: 1rem;
    border: none;
    border-radius: 1rem;
    color: white;
    background-color: #B6B6B6;
    font-size: 1.2rem;
    font-weight: bold;

    &:hover {
        background-color: black;
    }
`