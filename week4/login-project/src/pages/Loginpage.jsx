import { useState } from "react";
//import styled form "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

const LoginPage = () => {

    const [userId, setUserId] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleLogin = async() => {
        try {
            const response = await axios.post("http://34.64.233.12:8080/member/login", {
                authenticationId : userId,
                password : userPassword
            });

            // 서버 확인
            console.log(response.data);

            // 서버 통신 성공
            if (response.data.success) {
                alert(response.data.message); // 로그인 성공 메시지 표시
                navigate("/main");
            } else {
                alert(response.data.message); // 로그인 실패한 경우 서버에서 받은 에러 메시지 표시
            } 
        } catch (error) { // 서버 통신 실패
            console.error("Error: ",error);
            if (error.response && error.response.data) {
                alert(error.response.data.message);
            }
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <img src="../assets/pink.jpg" alt="pink" />
            <div>
                <p>ID</p>
                <input 
                    type="text"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)} />
            </div>
            <div>
                <p>PW</p>
                <input 
                    type="text"
                    value={userPassword}
                    onChange={(e) => setUserPassword(e.target.value)} />
            </div>

            <div>
                <button onClick={handleLogin}>로그인</button>
                <Link to="Signup">회원가입</Link>
            </div>
            
        </div>
    )

};



export default LoginPage;