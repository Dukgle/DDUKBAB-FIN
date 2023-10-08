import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import axiosInstance from '../api';

import "./MyPage.css";

import linkImg from "../icon/linkImg.svg";
import QrImg from "../img/QR_example.png";

function MyPage() {
  const logoText = "마이페이지";
  const [username, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [point, setPoint] = useState("");
  useEffect(() => {
    // 페이지가 처음 렌더링될 때 사용자 정보를 가져오는 함수 호출
    getInfo()
  }, []);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true); // 모달창이 열릴 수 있는 상태
  };

  const closeModal = () => {
    setModalIsOpen(false); // 모달창을 닫을 수 있는 상태
  };

  const getInfo = async () => {
    try {
      const response = await axiosInstance.get('/users/users-info'); // API 엔드포인트를 적절하게 수정
  
      const userData = response.data.user_info; // 서버에서 받은 사용자 정보
      // console.log(userData)
      const { username, nickname, point} = userData; // 이름, 학번, 역할 추출
  
      // 추출한 데이터를 React 상태에 저장
      // useState 훅을 사용하여 해당 상태 변수를 선언해야 합니다.
      // 예: const [name, setName] = useState("");
      // setName(name); // 이름 데이터 저장
      setName(username);
      setNickname(nickname);
      setPoint(point);
        
      // 다른 필요한 정보도 위와 같은 방식으로 저장
  
    } catch (error) {
      console.error('사용자 정보 가져오기 오류', error.response.data);
      // 오류 처리
      // 예: 실패 메시지 표시
    }
  };

  const logout = async (e) => {
    try {
      const response = await axiosInstance.post('/logout', {
        nickname: nickname
      });

      console.log('로그아웃 성공', response.data);
      // 닉네임 변경 성공 후 다른 작업 수행
      // 예: 성공 메시지 표시, 리다이렉트 등
    } catch (error) {
      console.error('로그아웃 오류', error.response.data);
      // 오류 처리
      // 예: 실패 메시지 표시
    }
  };

  return (
    <div className="my-page">
      <Header logoText={logoText} />

      <div className="my-things">
        <div className="my-name">
          <div className="name-title">
            <p>이름 / 닉네임</p>
            <p>{point} P</p>
          </div>
          <div className="name-box">
            <p>{username} / {nickname}</p>
            <Link to="/information">
              <button className="inform-modi-btn">수정</button>
            </Link>
          </div>
        </div>

        <div className="pay-logout">
          <Link to="/mypage/point">
            <button className="pay-btn">포인트 충천하기</button>
          </Link>
          <Link to="/">
            <button className="logout-btn" onClick={logout}>로그아웃</button>
          </Link>
        </div>

        <div className="my-reservation">
          <div className="name-title">자리 예약 내역</div>
          <div className="reservation-box">
            {/* 1. 예약 내역이 없는 경우 */}
            {/* <p>예약된 내역이 없습니다.</p> */}

            {/* 2. 예약 내역이 있는 경우 */}
            <div className="my-seat" onClick={openModal}>
              <div className="my-seat-text">
                <p>내 자리</p>
              </div>
              <div className="my-seat-num">
                <p>A-1</p>
              </div>
            </div>
            <div className="reserv-line"></div>

            {/* 2-1. 예약 후 아직 좌석 사용을 안 했을 경우 */}
            {/* <div className="seat-time">
              <div className="seat-time-text">남은 시간</div>
              <div className="seat-time-num">4:58</div>
              <button className="reserv-non-btn">취소</button>
            </div> */}

            {/* 2-2. 예약 후 좌석 사용 중 */}
            <div className="seat-time">
              <div className="using-seat">
                <p>
                  현재 자리를
                  <br />
                  이용중입니다.
                </p>
                <button className="reserv-back-btn">반납하기</button>
              </div>
            </div>
          </div>
        </div>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="QR Code Modal" className="qr-modal-container">
          <h4>예약한 좌석</h4>
          <h1>A-1</h1>
          <h4>남은 시간</h4>
          <img src={QrImg} alt="QR 코드 예시입니다." className="qr-img"></img>
        </Modal>

        <div className="my-food">
          <div className="name-title">내 주문내역</div>
          <Link to="/#">
            <button className="name-box-2">
              <p>주문내역 확인하러 가기</p>
              <img src={linkImg} alt="link" />
            </button>
          </Link>
        </div>
        <div className="my-review">
          <div className="name-title">내 후기</div>
          <Link to="/#">
            <button className="name-box-2">
              <p>내 후기 확인하러 가기</p>
              <img src={linkImg} alt="link" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MyPage;
