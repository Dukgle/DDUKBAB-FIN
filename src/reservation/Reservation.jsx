import "./Reservation.css";
import Header from "../header/Header";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ResModal from "./ResModal";

function Reservation() {
  const logoText = "좌석 예약";
  const [selectedOption, setSelectedOption] = useState("");
  const dropdownOptions = ["1인석", "2인석, 4인석"];

  // 의자선택모달
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
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
      navigate("/twofourpage");
    }
  }, [selectedOption, navigate]);

  // 테이블에 할당할 텍스트 배열
  const tableLabels = ["A", "B", "C", "D", "E", "F"];

  // 테이블, 의자 배치
  const tables = [];
  for (let i = 0; i < 6; i++) {
    tables.push(
      <div key={i} className="table">
        <div className="table-text">{tableLabels[i]}</div>
        <div className="table-top-chairs">
          <div className="chair" onClick={openModal}>
            <div className="chair-seat">
              <span>1</span>
            </div>
          </div>
          <div className="chair" onClick={openModal}>
            <div className="chair-seat">
              <span>2</span>
            </div>
          </div>
        </div>
        <div className="table-bottom-chairs">
          <div className="chair" onClick={openModal}>
            <div className="chair-seat">
              <span>3</span>
            </div>
          </div>
          <div className="chair" onClick={openModal}>
            <div className="chair-seat">
              <span>4</span>
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
      <ResModal isOpen={modalIsOpen} closeModal={closeModal} content="1인석 모달" />

      {/* 테이블 렌더링 */}
      <div className="tables-container-box">
        <div className="tables-container">{tables}</div>
      </div>
    </div>
  );
}

export default Reservation;
