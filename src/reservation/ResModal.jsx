import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./ResModal.css";

Modal.setAppElement("#root");

function ResModal({ isOpen, closeModal, content, onReserve }) {
  const [studentId, setStudentId] = useState("");
  const [isChairReserved, setIsChairReserved] = useState(false); // 추가: 의자 예약 상태

  // 이펙트를 사용하여 예약 여부에 따라 의자 색상을 업데이트
  useEffect(() => {
    setIsChairReserved(true);
  }, [content]);

  const handleStudentIdChange = (e) => {
    setStudentId(e.target.value);
  };

  const handleReserveClick = () => {
    if (!studentId) {
      alert("학번을 입력하세요.");
    } else {
      alert(`학번 ${studentId}으로 ${content} 좌석 예약을 진행합니다.`);
      closeModal();
      onReserve(); // 추가: 예약 버튼 클릭 시 호출하여 의자 예약 상태 업데이트
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} className="ResModal">
      <div className={`ModalContent ${isChairReserved ? 'reserved' : ''}`}> {/* 수정: 예약 상태에 따라 클래스 추가 */}
        <h1>{content}</h1>
        <h2>좌석을 예약하시겠습니까?</h2>
        <p>학번을 입력하세요</p>
        <input className="stdnum" type="text" value={studentId} onChange={handleStudentIdChange} />
        <button className="res" onClick={handleReserveClick}>예약</button>
        <button className="notres" onClick={closeModal}>닫기</button>
      </div>
    </Modal>
  );
}

export default ResModal;
