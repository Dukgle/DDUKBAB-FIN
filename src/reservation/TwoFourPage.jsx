import "./TwoFourPage.css";
import Header from "../header/Header";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ResModal24 from "./ResModal24";

function TwoFourPage() {
  const logoText = "좌석 예약";
  const [selectedOption, setSelectedOption] = useState("");
  const dropdownOptions = ["1인석", "2인석, 4인석"];

  // 의자선택모달
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedSeatCount, setSelectedSeatCount] = useState(0);

  const openModal = (seatCount) => {
    setSelectedSeatCount(seatCount);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const navigate = useNavigate();

  // 사용자가 드롭다운을 선택할 때마다 호출되는 함수
  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
  };

  // 선택된 옵션이 변경될 때마다 페이지 이동
  useEffect(() => {
    if (selectedOption === "1인석") {
      navigate("/Reservation");
    } else if (selectedOption === "2인석, 4인석") {
      setSelectedSeatCount(0); // 초기화
      openModal(0); // 모달 열기
    }
  }, [selectedOption, navigate]);

  // 테이블, 의자에 할당할 텍스트 배열
  const ftableLabels = ["A", "B", "C", "D"];
  const fchairLabels = ["a", "b", "c", "d"];

  // 4인 테이블, 의자 배치
  const ftables = [];
  for (let i = 0; i < ftableLabels.length; i++) {
    const ftableLabel = ftableLabels[i];
    const ftopChairLabel = fchairLabels[i];
    const fbottomChairLabel = fchairLabels[i];

    ftables.push(
      <div key={i} className="ftable">
        <div className="f-table-text">{ftableLabel}</div>
        <div className="f-table-top-chairs">
          <div className="fchair" onClick={() => openModal(4)}>
            <div className="chair-seat">
              <span>{ftopChairLabel}</span>
            </div>
          </div>
        </div>
        <div className="f-table-bottom-chairs">
          <div className="fchair" onClick={() => openModal(4)}>
            <div className="chair-seat">
              <span>{fbottomChairLabel}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 테이블, 의자에 할당할 텍스트 배열
  const ttableLabels = ["E", "F", "G", "O"];
  const tchairLabels = ["e", "f", "g", "o"];

  // 2인 테이블, 의자 배치
  const ttables = [];
  for (let i = 0; i < ttableLabels.length; i++) {
    const ttableLabel = ttableLabels[i];
    const ttopChairLabel = tchairLabels[i];
    const tbottomChairLabel = tchairLabels[i];

    ttables.push(
      <div key={i} className="ttable">
        <div className="t-table-text">{ttableLabel}</div>
        <div className="t-table-top-chairs">
          <div className="tchair" onClick={() => openModal(2)}>
            <div className="chair-seat">
              <span>{ttopChairLabel}</span>
            </div>
          </div>
        </div>
        <div className="t-table-bottom-chairs">
          <div className="tchair" onClick={() => openModal(2)}>
            <div className="chair-seat">
              <span>{tbottomChairLabel}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="reservation-page">
      <Header logoText={logoText} />
      <div className="reserv-select-content">
        <div>
          <select id="reserv-select" value={selectedOption} onChange={handleDropdownChange}>
            <option value="">좌석 이용 인원 ▼</option>
            {dropdownOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="reserv-content">
          <div className="reserv-content-box">
            <div className="reserv-content-box-yes"></div>
            <p>예약 가능</p>
          </div>
          <div className="reserv-content-box">
            <div className="reserv-content-box-no"></div>
            <p>예약 불가</p>
          </div>
        </div>
      </div>

      {/* 모달 렌더링 */}
      <ResModal24 isOpen={modalIsOpen} closeModal={closeModal} seatCount={selectedSeatCount} />

      {/* 테이블 렌더링 */}
      <div className="tables-container-box">
        <div className="f-tables-container">{ftables}</div>
        <div className="t-tables-container">{ttables}</div>
      </div>
    </div>
  );
}

export default TwoFourPage;
