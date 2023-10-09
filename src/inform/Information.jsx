import React, { useState, useEffect} from "react";
import Header_mypage from "../header/Header_mypage";
import { Link } from "react-router-dom";
import "./Information.css";
import axiosInstance from '../api';

function Information() {
  const logoText = "내 정보";
  const [nickname, setUsername] = useState("");
  const [username, setName] = useState("");
  const [uni_num, setUninum] = useState("");
  const [role, setRole] = useState("");
  useEffect(() => {
    // 페이지가 처음 렌더링될 때 사용자 정보를 가져오는 함수 호출
    getInfo()
  }, []);

  const infoChange = async () => {
    try {
      const response = await axiosInstance.put('/users/nickname-update', {
        nickname: nickname
      });

      console.log('닉네임 변경 성공', response.data);
      // 닉네임 변경 성공 후 다른 작업 수행
      // 예: 성공 메시지 표시, 리다이렉트 등
    } catch (error) {
      console.error('닉네임 변경 오류', error.response.data);
      // 오류 처리
      // 예: 실패 메시지 표시
    }
  };

  const getInfo = async () => {
    try {
      const response = await axiosInstance.get('/users/users-info'); // API 엔드포인트를 적절하게 수정
  
      const userData = response.data.user_info; // 서버에서 받은 사용자 정보
      console.log(userData)
      const { username, uni_num, role } = userData; // 이름, 학번, 역할 추출
  
      // 추출한 데이터를 React 상태에 저장
      // useState 훅을 사용하여 해당 상태 변수를 선언해야 합니다.
      // 예: const [name, setName] = useState("");
      // setName(name); // 이름 데이터 저장
      setName(username);
      setUninum(uni_num);
      setRole(role)
  
      // 다른 필요한 정보도 위와 같은 방식으로 저장
  
    } catch (error) {
      console.error('사용자 정보 가져오기 오류', error.response.data);
      // 오류 처리
      // 예: 실패 메시지 표시
    }
  };
  
  return (
    <div className="inform-page">
      <Header_mypage logoText={logoText} />

      <div className="my-things">
        <div className="my-name">
          <div className="name-title">
            <p>닉네임 변경</p>
          </div>
          <form className="inform-change-form" method="put">
            <div className="name-box">
              <input type="text" name="" id="username" className="input-field" placeholder="닉네임" value={nickname} onChange={(e) => setUsername(e.target.value)} required />
            </div>
            <div className="inform-change-btns">
              <Link to="/MyPage">
                <button className="change-none-btn">취소</button>
              </Link>
              <Link to="/MyPage">
                <button type="submit" className="change-save-btn" onClick={infoChange}>저장</button>
                </Link>
            </div>
          </form>

          <div className="informs-notchange">
            <hr />
          </div>

          <div className="informs-notchange">
            <div className="name-title">
              <p>이름</p>
            </div>
            <div className="name-box">
              <p>{username}</p>
            </div>
          </div>
        </div>

        <div className="informs-notchange">
          <div className="name-title">
            <p>학번</p>
          </div>
          <div className="name-box">
            <p>{uni_num}</p>
          </div>
        </div>

        <div className="informs-notchange">
          <div className="name-title">
            <p>역할</p>
          </div>
          <div className="name-box">
            <p>{role}</p>
          </div>
        </div>

        <div className="informs-notchange">
          <hr />
        </div>

        <div className="informs-notchange">
          <Link to="/">
            <p className="informs-out">탈퇴하기</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Information;
