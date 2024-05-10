import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from "./pages/Loginpage";
import SignupPage from "./pages/Signuppage";
import MainPage from "./pages/Mainpage";
import MyPage from "./pages/Mypage";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />}></Route>
                <Route path="/signup"element={<SignupPage />}> </Route>
                <Route path="/main/:id" element={<MainPage />}></Route>
                <Route path="/mypage/:id" element={<MyPage />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;