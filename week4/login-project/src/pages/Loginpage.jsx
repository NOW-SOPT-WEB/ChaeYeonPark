import { useState } from "react";
//import styled form "styled-components";


const LoginPage = () => {

    return (
        <div>
            <h1>Login</h1>
            <img src="./assets/cat.jpg" alt="cat" />
            <div>
                <p>ID</p>
                <input type="text" />
            </div>
            <div>
                <p>PW</p>
                <input type="text" />
            </div>

            <div>
                <button>로그인</button>
                <button>회원가입</button>
            </div>
            
        </div>
    )

};



export default LoginPage;