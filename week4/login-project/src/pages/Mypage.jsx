import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Toggle from '../component/Toggle';
import axios from 'axios';
import styled from 'styled-components';
import Navigate from '../utils/navigate';
import Layout from '../styles/Layout';
import ButtonWrapper from '../styles/ButtonWrapper';
import TextWapper from '../styles/TextWrapper';

const MyPage = () => {
    const { id } = useParams();
    const [userData, setUserData] = useState({});
    const [isToggled, setIsToggled] = useState(false);

    const navigate = useNavigate();

    /* 페이지가 로드되면, id값을 이용해 마이 페이지 정보를 get! */
    useEffect(() => {
        const getUserData = async () => {
            try {
                console.log(id);
                const response = await axios.get(`http://34.64.233.12:8080/member/info`, {
                    headers: {
                        memberId: id,
                    },
                });

                if (response.status === 200) {
                    setUserData(response.data.data);
                }
            } catch (error) {
                console.log('Error getUserData: ', error);
                if (error.response && error.response.data) {
                    alert(error.response.data.message);
                }
            }
        };

        getUserData();
    }, [id]);

    /* handleToggle : 버튼을 클릭하면 토글을 보여주거나, 숨겨주는 함수 */
    const handleToggle = () => {
        setIsToggled((prevState) => !prevState);
    };

    /* handleMain : 메인 페이지로 이동하는 함수 */
    const handleMain = () => {
        navigate(Navigate.goToMain + `/${id}`);
    };

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

            {isToggled ? <Toggle /> : null}

            <ButtonWrapper onClick={handleMain}>홈으로</ButtonWrapper>
        </Layout>
    );
};

export default MyPage;

const InfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 15rem;
`;

const ToggleButton = styled.button`
    margin: 1rem;
    border: none;
    background-color: transparent;
    color: #5a5a5a;
    text-decoration: underline;
    cursor: pointer;

    &:hover {
        color: black;
        font-weight: bold;
    }
`;
