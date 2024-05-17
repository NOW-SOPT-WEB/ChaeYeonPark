import mainCat from '../assets/img/maincat.jpeg';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import Navigate from '../utils/navigate';
import Layout from '../styles/Layout';
import ButtonWrapper from '../styles/ButtonWrapper';
import ImageWrapper from '../styles/ImageWrapper';

const MainPage = () => {
    const { id } = useParams(); // id값을 전달받는 useParams

    const navigate = useNavigate();

    /* handleMypage : 마이 페이지로 이동하는 함수 */
    const handleMypage = () => {
        navigate(Navigate.goToMypage + `/${id}`);
    };

    /* handleSignup : 회원가입 페이지로 이동하는 함수 */
    const handleSignup = () => {
        navigate(Navigate.goToSignup);
    };

    return (
        <Layout>
            <h1>메인 페이지</h1>
            <ImageWrapper src={mainCat} alt="메인 고양이" />
            <p>고양이 귀엽지요 🐈</p>
            <ButtonContainer>
                <ButtonWrapper onClick={handleMypage}>내 정보</ButtonWrapper>
                <ButtonWrapper onClick={handleSignup}>회원가입</ButtonWrapper>
            </ButtonContainer>
        </Layout>
    );
};

export default MainPage;

const ButtonContainer = styled.div`
    margin: 1rem;
`;
