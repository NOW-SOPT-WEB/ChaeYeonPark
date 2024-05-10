import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const MyPage = () => {
    const { id } = useParams(); 
    const [userData, setUserData] = useState({});
    const [isToggled, setIsToggled] = useState(false);
    const [prevPw, setPrevPw] = useState("");
    const [newPw, setNewPw] = useState("");
    const [newPwVerification, setNewPwVerification] = useState("");

    const navigate = useNavigate();

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

    const handleToggle = () => {
        setIsToggled(prevState => !prevState);
    }

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

    const handleMain = () => {
        navigate(`/main/${id}`)
    }


    return (
    <>
    <h1>Mypage</h1>
    <div>
        <p>ID</p>
        <p>{userData.authenticationId}</p>
    </div>
    <div>
        <p>닉네임</p>
        <p>{userData.nickname}</p>
    </div>
    <div>
        <p>전화번호</p>
        <p>{userData.phone}</p>
    </div>
  
        <input
            type="checkbox"
            checked={isToggled}
            onChange={handleToggle}
       />


    {isToggled ? 
    <>
    <div>
        <p>기존 비밀번호</p>
        <input
            type="text"
            value={prevPw}
            onChange={(e) => setPrevPw(e.target.value)} />
    </div>
    <div>
        <p>새로운 비밀번호</p>
        <input
            type="text"
            value={newPw}
            onChange={(e) => setNewPw(e.target.value)} />
    </div>
    <div>
        <p>비밀번호 확인</p>
        <input
            type="text"
            value={newPwVerification}
            onChange={(e) => setNewPwVerification(e.target.value)} />
    </div>

    <button onClick={handleChangePw}>비밀번호 변경</button>
    </>
    : <p>비밀번호 변경하려면 클릭하세요</p>
    }

    <button onClick={handleMain}>홈으로</button>

    </>  )  
}

export default MyPage;