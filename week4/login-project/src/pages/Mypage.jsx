import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MyPage = () => {
    const { id } = useParams(); 
    const [userData, setUserData] = useState({});
    const [isToggled, setIsToggled] = useState(false);

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
        <input />
    </div>
    <div>
        <p>새로운 비밀번호</p>
        <input />
    </div>
    <div>
        <p>비밀번호 확인</p>
        <input />
    </div>
    </>
    : <p>비밀번호 변경하려면 클릭하세요</p>
    }

    </>  )  
}

export default MyPage;