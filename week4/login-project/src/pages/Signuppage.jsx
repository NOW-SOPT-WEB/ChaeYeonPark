import { useState } from "react";
import axios from "axios";

const SignupPage = () => {
    const [userId, setUserId] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userNickname, setUserNickname] = useState("");
    const [userPhoneNumber, setUserPhoneNumber] = useState("");
    const [error, setError] = useState("");

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
            if (response.data.success) {
                alert(response.data.message); // 성공 메시지 표시
            } else {
                alert(response.data.message); // 실패한 경우 서버에서 받은 에러 메시지 표시
            }
        } catch (error) {
            console.error("Error: ", error);
            setError("회원가입에 실패했습니다.")
        }
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