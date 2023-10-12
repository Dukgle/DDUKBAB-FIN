import "./Reservation.css";
import Header from "../header/Header";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ResModal from "./ResModal";
import axiosInstance from "../api";

function Reservation() {
  const logoText = "좌석 예약";
  const [selectedOption, setSelectedOption] = useState("");
  // const dropdownOptions = ["1인석", "2인석, 4인석"];

  // 의자선택모달
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedTable, setSelectedTable] = useState(null); // 선택한 테이블 정보
  const [selectedChair, setSelectedChair] = useState(null); // 선택한 의자 정보

  const handleChairClick = (tableLabel, chairNumber) => {
    setSelectedTable(tableLabel);
    setSelectedChair(chairNumber);
    openModal();
  };
  


  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const navigate = useNavigate();

  // // 사용자가 드롭다운을 선택할 때마다 호출되는 함수
  // const handleDropdownChange = (e) => {
  //   setSelectedOption(e.target.value);
  // };

  // 선택된 옵션이 변경될 때마다 페이지 이동
  useEffect(() => {
    if (selectedOption === "1인석") {
      navigate("/Reservation");
    } else if (selectedOption === "2인석, 4인석") {
      navigate("/twofourpage");
    }
  }, [selectedOption, navigate]);

  // API로 POST 요청 보내기
  const handleReservation = async () => {
    if (selectedTable && selectedChair) {
      const seat_name = `${selectedTable}-${selectedChair}`;
      try {
        // axios를 사용하여 API를 호출합니다.
        // API 호출이 성공하면 모달을 닫을 수 있습니다.
        const response = await axiosInstance.post(`/users/reservation/reserve`, { seat_name });
        closeModal(); // 모달 닫기
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  };
  


  // 테이블에 할당할 텍스트 배열
  const tableLabels = ["A", "B", "C", "D", "E", "F"];

 // 테이블 및 의자 렌더링
const tables = [];
for (let i = 0; i < 6; i++) {
  const tableLabel = tableLabels[i];

  const topChairs = [];
  const bottomChairs = [];

  for (let j = 1; j <= 2; j++) {
    topChairs.push(
      <div key={j} className="chair" onClick={() => handleChairClick(tableLabel, j)}>
        <div className="chair-seat">
          <span>{j}</span>
        </div>
      </div>
    );
    bottomChairs.push(
      <div key={j} className="chair" onClick={() => handleChairClick(tableLabel, j + 4)}>
        <div className="chair-seat">
          <span>{j + 2}</span>
        </div>
      </div>
    );
  }

  tables.push(
    <div key={i} className="table">
      <div className="table-text">{tableLabel}</div>
      <div className="table-top-chairs">{topChairs}</div>
      <div className="table-bottom-chairs">{bottomChairs}</div>
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
        {/* <div className="reserv-content">
          <div className="reserv-content-box">
            <div className="reserv-content-box-yes"></div>
            <p>예약 가능</p>
          </div>
          <div className="reserv-content-box">
            <div className="reserv-content-box-no"></div>
            <p>예약 불가</p>
          </div>
        </div> */}
      </div>

      {/* 모달 렌더링 */}
      <ResModal isOpen={modalIsOpen} closeModal={closeModal} content="1인석 모달" handleReservation={handleReservation} />

      {/* 테이블 렌더링 */}
      <div className="tables-container-box">
        <div className="tables-container">{tables}</div>
      </div>
    </div>
  );
}

export default Reservation;