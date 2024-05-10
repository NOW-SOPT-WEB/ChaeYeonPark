import mainCat from "../assets/img/maincat.jpeg"
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom"

const MainPage = () => {
    const { id } = useParams(); // id값을 전달받는 useParams

    const navigate = useNavigate();


    /* handleMypage : 마이 페이지로 이동하는 함수 */
    const handleMypage = () => {
        navigate(`/mypage/${id}`)
    }

    /* handleSignup : 회원가입 페이지로 이동하는 함수 */
    const handleSignup = () => {
        navigate('/signup')
    }

   return (
    <Layout>
        <h1>메인 페이지</h1>
        <ImageWapper src={mainCat} alt="메인 고양이" />
        <p>고양이 귀엽지요 🐈</p>
        <ButtonContainer>
            <ButtonWapper onClick={handleMypage}>내 정보</ButtonWapper>
            <ButtonWapper onClick={handleSignup}>회원가입</ButtonWapper>
        </ButtonContainer>
    </Layout>
   )

}

export default MainPage;

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

const ImageWapper = styled.img`
    width: 20rem;
    border-radius: 1rem;
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