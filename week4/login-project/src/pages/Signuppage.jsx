import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
        <>
        <h1>회원가입 페이지</h1>
        <div>
            <p>ID</p>
            <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)} />
        </div>
        <div>
            <p>비밀번호</p>
            <input
                type="text"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}  />
        </div>
        <div>
            <p>닉네임</p>
            <input
                type="text"
                value={userNickname}
                onChange={(e) => setUserNickname(e.target.value)}  />
        </div>
        <div>
            <p>전화번호</p>
            <input
                type="text"
                value={userPhoneNumber}
                onChange={(e) => setUserPhoneNumber(e.target.value)}  />
        </div>

        <button onClick={handleSignup}>회원가입 하기</button>
        {error && <p>{error}</p>}
        </>
    )

}

export default SignupPage;