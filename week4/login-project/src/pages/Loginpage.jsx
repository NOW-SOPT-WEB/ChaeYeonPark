import { useState } from "react";
import { useParams } from "react-router-dom";
import loginCat from "../assets/img/cat.jpg"
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
            if (response.status === 200) {
                const memberId = response.headers.location;
                navigate(`/main/${memberId}`);
              }      

        } catch (error) { // 서버 통신 실패
            console.error("Error: ",error);
            if (error.response && error.response.data) {
                alert(error.response.data.message);
            }
        }
    }

    const handleSignup = () => {
        navigate('/signup')
    }

    return (
        <div>
            <h1>Login</h1>
            <img src={loginCat} alt="pink" />
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
                <button onClick={handleSignup}>회원가입</button>
            </div>
            
        </div>
    )

};



export default LoginPage;