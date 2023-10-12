import "./Reservation.css";
import Header from "../header/Header";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ResModal from "./ResModal";

function Reservation() {
  const logoText = "좌석 예약";
  const [selectedOption, setSelectedOption] = useState("");
  // const dropdownOptions = ["1인석", "2인석, 4인석"];

  // 의자선택모달
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedTable, setSelectedTable] = useState("");
  const [selectedChair, setSelectedChair] = useState("");
  const [reservedChairs, setReservedChairs] = useState([]); // 추가: 예약된 의자 배열

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

  // 의자 클릭 이벤트 핸들러
  const handleChairClick = (tableLabel, chairNumber) => {
    setSelectedTable(tableLabel);
    setSelectedChair(chairNumber);
    openModal();
  };

  // 예약 버튼 클릭 시 호출되는 함수
  const handleReserveClick = () => {
    if (!selectedTable || !selectedChair) {
      alert("테이블과 의자를 선택하세요.");
      return;
    }

    // 의자 예약 처리
    const updatedReservedChairs = [...reservedChairs];
    updatedReservedChairs.push(`${selectedTable}-${selectedChair}`);
    setReservedChairs(updatedReservedChairs);

    // 모달 닫기
    closeModal();
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
    const tableLabel = tableLabels[i];
    const chairs = [];

    for (let j = 1; j <= 4; j++) {
      const chairKey = `${tableLabel}-${j}`;
      const isChairReserved = reservedChairs.includes(chairKey); // 추가: 의자 예약 여부 확인

      chairs.push(
        <div
          key={chairKey}
          className={`chair ${isChairReserved ? 'reserved' : ''}`}
          onClick={() => handleChairClick(tableLabel, j)}
        >
          <div className="chair-seat">
            <span>{j}</span>
          </div>
        </div>
      );
    }

    tables.push(
      <div key={i} className="table">
        <div className="table-text">{tableLabel}</div>
        <div className="table-top-chairs">{chairs.slice(0, 2)}</div>
        <div className="table-bottom-chairs">{chairs.slice(2)}</div>
      </div>
    );
  }

  return (
    <div className="reservation-page">
      <Header logoText={logoText} />
      <div className="reserv-select-content">
        <div>
          {/* <select id="reserv-select" value={selectedOption} onChange={handleDropdownChange}>
            <option value="">좌석 이용 인원 ▼</option>
            {dropdownOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select> */}
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
      <ResModal isOpen={modalIsOpen} closeModal={closeModal} content={`${selectedTable}-${selectedChair}`} onReserve={handleReserveClick} />

      {/* 테이블 렌더링 */}
      <div className="tables-container-box">
        <div className="tables-container">{tables}</div>
      </div>
    </div>
  );
}

export default Reservation;
