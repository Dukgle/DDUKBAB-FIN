import React, { useState } from "react";
import Header from "../header/Header_verify";
import { Link } from "react-router-dom";
import "./Login.css";
<<<<<<< HEAD
import axios from 'axios'
=======

>>>>>>> d7adfa1b0febb31538603b389d62bd3b46c00127
import Logo from "../icon/DDUKBAB.png";
import Apple from "../icon/apple.png";

function Login() {
  const logoText = "로그인";

  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  const validatePassword = () => {
    // 비밀번호 조건을 만족하는지 확인
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

<<<<<<< HEAD
  const Login = async (e) => {
    
    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        uni_num: number,
        password: password,
      });
      console.log('로그인 성공', response.data);
      // 회원가입 성공 후 다른 작업 수행
      // 예: 회원가입 성공 메시지 표시, 로그인 페이지로 리다이렉트 등
    } catch (error) {
      console.error('로그인 오류', error.response.data);
      // 회원가입 실패 처리
      // 예: 실패 메시지 표시
    }
  };

=======
>>>>>>> d7adfa1b0febb31538603b389d62bd3b46c00127
  const isFormValid = number !== "" && password !== "" && validatePassword();

  return (
    <div className="login-page">
      <Header logoText={logoText} />
      <div className="things">
        <img src={Logo} alt="Logo" />
        <form action="" className="form2" method="post">
          <div className="form-box-input-lg">
            <input type="text" name="" id="number" className="input-field-lg" placeholder="학번/사번/가게명" value={number} onChange={(e) => setNumber(e.target.value)} required />
          </div>
          <div className="form-box-input-lg">
            <input type="password" name="" id="password" className="input-field-lg" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <Link to="/menu" style={{ marginTop: "30px" }}>
            <input
              id="signup"
              type="submit"
              className="login-btn"
              value="로그인"
              style={{
                backgroundColor: isFormValid ? "#fccb6f" : "white",
                cursor: isFormValid ? "pointer" : "not-allowed",
              }}
              disabled={!isFormValid}
<<<<<<< HEAD
              onClick={Login}
=======
>>>>>>> d7adfa1b0febb31538603b389d62bd3b46c00127
            />
          </Link>
        </form>
        <div className="apple-login">
          <Link to="/menu">
            <div className="apple-login-circle">
              <img src={Apple} alt="AppleLogin" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
