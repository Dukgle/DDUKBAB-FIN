import React, { useState } from "react";
import Header from "../header/Header_verify";
import "./SignUp.css";
import { Link } from "react-router-dom";

import down from "../icon/arrow-down.png";
import none from "../icon/circle-x.png";
import check from "../icon/circle-check.png";
import excl from "../icon/circle-excl.png";
<<<<<<< HEAD

import axios from 'axios'
=======
>>>>>>> d7adfa1b0febb31538603b389d62bd3b46c00127

function SignUp() {
  const logoText = "회원가입";
  const [selectedRole, setSelectedRole] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const validatePassword = () => {
    // 비밀번호 조건을 만족하는지 확인
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

<<<<<<< HEAD
  const signUp = async (e) => {
    // e.preventDefault(); // 폼 제출 기본 동작을 막습니다.
    
    try {
      const response = await axios.post('http://localhost:5000/signup', {
        username: name,
        uni_num: number,
        nickname: username,
        password: password,
        role: selectedRole,
      });
      console.log('회원가입 성공', response.data);
      // 회원가입 성공 후 다른 작업 수행
      // 예: 회원가입 성공 메시지 표시, 로그인 페이지로 리다이렉트 등
    } catch (error) {
      console.error('회원가입 오류', error.response.data);
      // 회원가입 실패 처리
      // 예: 실패 메시지 표시
    }
  };
  

=======
>>>>>>> d7adfa1b0febb31538603b389d62bd3b46c00127
  return (
    <div className="signUp-page">
      <Header logoText={logoText} />
      <div className="contents">
        <form action="" className="form" method="post">
          <div className="form-box">
            <div className="form-box-input">
              <p>역할</p>
              <select name="major" id="input-dropdown" value={selectedRole} onChange={handleRoleChange}>
                <option disabled selected value="">
                  역할을 선택해주세요.
                </option>
                <option value="학생">학생</option>
                <option value="교직원">교직원</option>
                <option value="판매자">판매자</option>
              </select>
            </div>
            <div className="form-box-check">
              <img src={down} alt="down" />
            </div>
          </div>

          {!selectedRole && (
            <>
              <div className="texts">
                <p>역할을 선택한 후</p>
                <p>회원가입에 필요한 정보를 기입할 수 있습니다.</p>
              </div>
            </>
          )}

          {selectedRole && (
            <>
              <div className="form-box">
                <div className="form-box-input">
                  <p>이름</p>
                  <input type="text" name="" id="name" className="input-field" placeholder="이름 입력" value={name} onChange={(e) => handleInputChange(e, setName)} required />
                </div>
                <div className="form-box-check">
                  <img src={name ? check : none} alt="none" />
                </div>
              </div>
              <div className="form-box">
                <div className="form-box-input">
                  <p>닉네임</p>
                  <input type="text" name="" id="username" className="input-field" placeholder="닉네임 입력" value={username} onChange={(e) => handleInputChange(e, setUsername)} required />
                </div>
                <div className="form-box-check">
                  <img src={username ? check : none} alt="none" />
                </div>
              </div>
              {selectedRole === "학생" && (
                <>
                  <div className="form-box">
                    <div className="form-box-input">
                      <p>학번</p>
                      <input type="text" name="" id="number" className="input-field" placeholder="학번 입력" value={number} onChange={(e) => handleInputChange(e, setNumber)} required />
                    </div>
                    <div className="form-box-check">
                      <img src={number ? check : none} alt="none" />
                    </div>
                  </div>
                </>
              )}
              {selectedRole === "교직원" && (
                <>
                  <div className="form-box">
                    <div className="form-box-input">
                      <p>사번</p>
                      <input type="text" name="" id="number" className="input-field" placeholder="사번 입력" value={number} onChange={(e) => handleInputChange(e, setNumber)} required />
                    </div>
                    <div className="form-box-check">
                      <img src={number ? check : none} alt="none" />
                    </div>
                  </div>
                </>
              )}
              {selectedRole === "판매자" && (
                <>
                  <div className="form-box">
                    <div className="form-box-input">
                      <p>가게명</p>
                      <input type="text" name="" id="number" className="input-field" placeholder="가게명 입력" value={number} onChange={(e) => handleInputChange(e, setNumber)} required />
                    </div>
                    <div className="form-box-check">
                      <img src={number ? check : none} alt="none" />
                    </div>
                  </div>
                </>
              )}
              <div className="form-box" style={{ border: password ? (validatePassword() ? "1.5px solid #43000a" : "1.5px solid #DD2355") : "1.5px solid #43000a" }}>
                <div className="form-box-input">
                  <p>비밀번호</p>
                  <input type="password" name="" id="password" className="input-field" placeholder="비밀번호 입력" value={password} onChange={(e) => handleInputChange(e, setPassword)} required />
                </div>
                <div className="form-box-check">
                  <img src={password ? (validatePassword() ? check : excl) : none} alt="none" />
                </div>
              </div>
              <div className="pwd-scripts" style={{ color: password ? (validatePassword() ? "rgba(67, 0, 10, 0)" : "#FD5E5B") : "rgba(67, 0, 10, 0.5)" }}>
                <p>영문, 숫자, 특수 문자를 조합해 8자리 이상을 입력하세요.</p>
              </div>

              <div className="form-box" style={{ border: password2 && password === password2 ? "1.5px solid #43000a" : password2 ? "1.5px solid #DD2355" : "1.5px solid #43000a", marginTop: "5px" }}>
                <div className="form-box-input">
                  <p>비밀번호 확인</p>
                  <input type="password" name="" id="password2" className="input-field" placeholder="비밀번호 입력" value={password2} onChange={(e) => handleInputChange(e, setPassword2)} required />
                </div>
                <div className="form-box-check">
                  <img src={password2 && password === password2 ? check : password2 ? excl : none} alt="none" />
                </div>
              </div>
              <div className="pwd-scripts" style={{ color: password2 && password === password2 ? "rgba(67, 0, 10, 0)" : password2 ? "#FD5E5B" : "rgba(67, 0, 10, 0.5)" }}>
                <p>동일한 비밀번호를 입력하세요.</p>
              </div>

              <Link to="/" style={{ marginTop: "30px" }}>
                <input
                  id="signup"
                  type="submit"
                  className="submit-btn"
                  value="회원가입 완료하기"
                  style={{
                    backgroundColor: selectedRole && name && username && number && password && password2 && password === password2 && validatePassword() ? "#fccb6f" : "white",
                  }}
                  disabled={!(selectedRole && name && username && number && password && password2 && password === password2 && validatePassword())}
<<<<<<< HEAD
                  onClick= {signUp}
=======
>>>>>>> d7adfa1b0febb31538603b389d62bd3b46c00127
                />
              </Link>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default SignUp;
