import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import axiosInstance from '../api';

import "./MyPage.css";

import linkImg from "../icon/linkImg.svg";

function MyPage() {
  const logoText = "마이페이지";
  const [username, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [point, setPoint] = useState("");
  const [seatData, setSeatNum] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [qrCodeData, setQRCodeData] = useState("");
  const [selectedSeat, setSelectedSeat] = useState("");
  const [reservationDatetime, setReservationDatetime] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [id, setID] = useState("");

  // useEffect(() => {
  //   // 페이지가 처음 렌더링될 때 사용자 정보를 가져오는 함수 호출
    
  // }, []);

  useEffect(() => {
    getInfo();
    getNum();
    // If the modal is open, start fetching seat_time every 1 second
    if (modalIsOpen) {
      const intervalId = setInterval(() => {
        handleSeatTime();
      }, 1000);

      return () => {
        // Clean up the interval when the modal is closed or component unmounts
        clearInterval(intervalId);
      };
    }
  }, [modalIsOpen]);

  const openModal = () => {
    setModalIsOpen(true); // 모달창이 열릴 수 있는 상태
    handleSeatTime(); // Initial fetch of seat_time
  };

  const closeModal = () => {
    setModalIsOpen(false); // 모달창을 닫을 수 있는 상태
  };

  const getInfo = async () => {
    try {
      const response = await axiosInstance.get('/users/users-info'); // API 엔드포인트를 적절하게 수정
  
      const userData = response.data.user_info; // 서버에서 받은 사용자 정보
      const { username, nickname, point } = userData; // 이름, 학번, 역할 추출
      setName(username);
      setNickname(nickname);
      setPoint(point);

      // 좌석 예약 정보 가져오기 (reservationId를 인자로 전달)
      const reservationResponse = await axiosInstance.get(`/users/reservation/get`);
      const seatData = reservationResponse.data.seat_name;
      setSeatNum(seatData);

      // 다른 필요한 정보도 위와 같은 방식으로 저장
    } catch (error) {
      console.error('사용자 정보 가져오기 오류', error.response.data);
      // 오류 처리
      // 예: 실패 메시지 표시
    }
  };

  const getNum = async () => {
    try {
    const response = await axiosInstance.get('/users/order/order-num'); // API 엔드포인트를 적절하게 수정

    const userData = response.data.wait_num; // 서버에서 받은 사용자 정보
    const {id} = userData; // 이름, 학번, 역할 추출
    setID(id)

    } catch (error) {
    console.error('사용자 번호 가져오기 오류', error.response.data);

    }
};

  const seatDelete = async (e) => {
    try {
      const response = await axiosInstance.delete('/users/reservation/cancel');
      setSeatNum("");

      console.log('자리 예약 반납 성공', response.data);
      // 닉네임 변경 성공 후 다른 작업 수행
      // 예: 성공 메시지 표시, 리다이렉트 등
    } catch (error) {
      console.error('자리 예약 반납 오류', error.response.data);
      // 오류 처리
      // 예: 실패 메시지 표시
    }
  };

  const handleSeatClick = async (seatName) => {
    setSelectedSeat(seatName);

    try {
      const reservationResponse = await axiosInstance.get(`/users/reservation/get`);
      const reservationDatetime = reservationResponse.data.seat_time;
      // Make a POST request to your Express route to generate the QR code
      const response = await axiosInstance.post('/users/generatedQRCode',
        { text: seatName, reservation_datetime: reservationDatetime }
      );

      // The response should contain the QR code image data
      const qrCodeImageData = response.data.qrCodeData;
      setQRCodeData(qrCodeImageData);
      setReservationDatetime(reservationDatetime);
      setModalIsOpen(true);
    } catch (error) {
      console.error('Error generating QR code', error);
      // Handle the error as needed
    }
  };

  const handleSeatTime = async () => {

    try {
      const reservationResponse = await axiosInstance.get(`/users/reservation/get`);
      const reservationDatetime = reservationResponse.data.seat_time;

      setReservationDatetime(reservationDatetime);

      // 시간을 분:초로 분리
    const [minutes, seconds] = reservationDatetime.split(':').map(Number);

    // 남은 시간을 초로 계산
    const remainingTimeInSeconds = minutes * 60 + seconds;

    if (remainingTimeInSeconds === 0) {
      // 남은 시간이 0이 되면 모달 메시지를 설정
      setModalMessage("10분이 지나 자리 예약이 취소되었습니다.");
      await seatDelete();
    } else if (remainingTimeInSeconds <= 600) {
      // 10분 이하로 남으면 모달 메시지를 설정
      setModalMessage("10분이 지나 자리 예약이 취소됩니다.");
    } else {
      setModalMessage(""); // 모달 메시지 초기화
    }
  } catch (error) {
    console.error('Error generating seat_time', error);
    // 오류 처리
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
                          {seatData ? (
                  // 2. 예약 내역이 있는 경우
                  <div className="my-seat" onClick={() => handleSeatClick(seatData)}>
                    <div className="my-seat-text">
                      <p>내 자리</p>
                    </div>
                    <div className="my-seat-num">
                      <p>{seatData}</p>
                    </div>
                  </div>
                ) : (
                  // 1. 예약 내역이 없는 경우
                  <p>예약된 내역이 없습니다.</p>
                )}

                {seatData && (
                  <div className="reserv-line"></div>
                )}

                {/* 2-2. 예약 후 좌석 사용 중 */}
                <div className="seat-time">
                  {seatData ? (
                    <div className="using-seat">
                      <p>
                        현재 자리를
                        <br />
                        이용중입니다.
                      </p>
                      <button className="reserv-back-btn" onClick={seatDelete}>
                        반납하기
                      </button>
                    </div>
                  ) : null}
                </div>
                </div>
                </div>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="QR Code Modal" className="qr-modal-container">
                <h4>예약한 좌석</h4>
          <h1>{selectedSeat}</h1>
          <h4>남은 시간 : {reservationDatetime}</h4>
          {reservationDatetime !== "0:00" && qrCodeData && (
            <>
              <img src={qrCodeData} alt="QR Code" />
            </>
          )}
          {reservationDatetime === "0:00" && (
            <p>10분이 지나 자리 예약이 취소되었습니다.</p>
          )}
        </Modal>

        <div className="my-reservation">
          <div className="name-title">음식 주문 번호</div>
          <div className="reservation-box">
                          {seatData ? (
                  // 2. 예약 내역이 있는 경우
                  <div className="my-seat" onClick={() => handleSeatClick(seatData)}>
                    <div className="my-seat-text">
                      <p>주문번호</p>
                    </div>
                    <div className="my-seat-num">
                      <p>             {id}</p>
                    </div>
                  </div>
                ) : (
                  // 1. 예약 내역이 없는 경우
                  <p>음식 주문 내역이 없습니다.</p>
                )}
                </div>
                </div>

        <div className="my-food">
          {/* <div className="name-title">내 주문내역</div> */}
          {/* <Link to="/#">
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
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default MyPage;
