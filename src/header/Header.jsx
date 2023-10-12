import "./Header.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../api";

import CartIcon from "../icon/icon-shopping-cart.png";
import ListIcon from "../icon/icon-ui.png";
import QrIcon from "../icon/icon-qr-code.png";

import Cart from "../cart/Cart";
import Qr from "./Qr";
import Dropdown from "./Dropdown";

function Header({ logoText }) {
  const [isDropdownView, setDropdownView] = useState(false); // 드롭다운을 위한 함수 정의
  const [nickname, setNickname] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [qrCodeData, setQRCodeData] = useState("");
  const [selectedSeat, setSelectedSeat] = useState("");
  const [reservationDatetime, setReservationDatetime] = useState("");
  const [modalMessage, setModalMessage] = useState("");

  useEffect(() => {
    // 페이지가 처음 렌더링될 때 사용자 정보를 가져오는 함수 호출
    getNickname();
  }, []);

  const handleClickContainer = () => {
    setDropdownView(!isDropdownView);
  };

  const handleBlurContainer = () => {
    setTimeout(() => {
      setDropdownView(false);
    }, 200);
  };

  const getNickname = async () => {
    try {
      const response = await axiosInstance.get("/users/users-info"); // API 엔드포인트를 적절하게 수정

      const userData = response.data.user_info; // 서버에서 받은 사용자 정보
      console.log(userData);
      const { nickname } = userData; // 이름, 학번, 역할 추출

      setNickname(nickname);
      console.log("닉네임 변경 성공", response.data);
      // 닉네임 변경 성공 후 다른 작업 수행
      // 예: 성공 메시지 표시, 리다이렉트 등
    } catch (error) {
      console.error("닉네임 변경 오류", error.response.data);
      // 오류 처리
      // 예: 실패 메시지 표시
    }
  };

  useEffect(() => {
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

  const handleSeatClick = async (seatName) => {
    setSelectedSeat(seatName);

    try {
      const reservationResponse = await axiosInstance.get(`/users/reservation/get`);
      const reservationDatetime = reservationResponse.data.seat_time;
      // Make a POST request to your Express route to generate the QR code
      const response = await axiosInstance.post("/users/generatedQRCode", { text: seatName, reservation_datetime: reservationDatetime });

      // The response should contain the QR code image data
      const qrCodeImageData = response.data.qrCodeData;
      setQRCodeData(qrCodeImageData);
      setReservationDatetime(reservationDatetime);
      setModalIsOpen(true);
    } catch (error) {
      console.error("Error generating QR code", error);
      // Handle the error as needed
    }
  };

  const handleSeatTime = async () => {
    try {
      const reservationResponse = await axiosInstance.get(`/users/reservation/get`);
      const reservationDatetime = reservationResponse.data.seat_time;

      setReservationDatetime(reservationDatetime);

      // 시간을 분:초로 분리
      const [minutes, seconds] = reservationDatetime.split(":").map(Number);

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
      console.error("Error generating seat_time", error);
      // 오류 처리
    }
  };

  return (
    <header>
      <div className="header-menu">
        <div className="back">
          <button className="back-button" style={{ color: "rgba(0,0,0,0)" }}>
            　&gt;
          </button>
        </div>
        <div className="nickname" id="menu_nickname">
          {nickname}
        </div>
        {/* 나중에 연결 */}
        <div className="logo-page">
          <div className="logo">{logoText}</div> {/* 페이지 이름 */}
          <div className="icon-wrap">
            <div className="icon">
              {/* 아이콘 모음 */}
              <div className="cart">
                {/* 장바구니 */}
                <div className="cart-button">
                  <Link to="/cart">
                    {Cart}
                    <img src={CartIcon} className="header-cart-button-icon" alt="Cart" />
                  </Link>
                </div>
              </div>
              <div className="qr-button">
                {/* {seatData ? <img src={QrIcon} alt="QR Code" onClick={() => handleSeatClick(seatData)} /> : <img src={QrIcon} alt="QR Code" />}
                <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="QR Code Modal" className="qr-modal-container">
                  <h4>예약한 좌석</h4>
                  <h1>{selectedSeat}</h1>
                  <h4>남은 시간 : {reservationDatetime}</h4>
                  {reservationDatetime !== "0:00" && qrCodeData && (
                    <>
                      <img src={qrCodeData} alt="QR Code" />
                    </>
                  )}
                  {reservationDatetime === "0:00" && <p>10분이 지나 자리 예약이 취소되었습니다.</p>}
                </Modal> */}
              </div>
              {/* QR코드 */}
              {/* <Qr /> 모달창 띄우는 컴포넌트 */}
              <div className="list" onBlur={handleBlurContainer}>
                {/* 메뉴 드롭다운_onBlur 사용 */}
                <button className="list-button" onClick={handleClickContainer}>
                  <img src={ListIcon} alt="List" />
                  {isDropdownView && <Dropdown />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;