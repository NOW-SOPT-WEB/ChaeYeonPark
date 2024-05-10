import mainCat from "../assets/img/maincat.jpeg"
import { useParams, useNavigate } from "react-router-dom"

const MainPage = () => {
    const { id } = useParams(); 

    const navigate = useNavigate();

    const handleMypage = () => {
        navigate(`/mypage/${id}`)
    }

    const handleSignup = () => {
        navigate('/signup')
    }

   return (
    <div>
        <h1>MainPage</h1>
        <img src={mainCat} alt="메인 고양이" />
        <div>
            <button onClick={handleMypage}>내 정보</button>
            <button onClick={handleSignup}>회원가입</button>
        </div>
    </div>
   )

}

export default MainPage