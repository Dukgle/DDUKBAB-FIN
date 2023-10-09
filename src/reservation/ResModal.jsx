import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

function OneSeatModal({ isOpen, closeModal, content, handleReservation }) {
  const [studentId, setStudentId] = useState("");

  const handleStudentIdChange = (e) => {
    setStudentId(e.target.value);
  };

  const handleReserveClick = () => {
    // 학번을 사용하여 예약 로직을 처리할 수 있습니다.
    // 이 부분은 실제 예약 로직을 구현해야 합니다.
    alert(`좌석 예약을 진행합니다.`);
    handleReservation();
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal}>
      <h2>좌석을 예약하시겠습니까?</h2>
      <button onClick={handleReserveClick} onChange={handleStudentIdChange}>예약</button>
      <button onClick={closeModal}>닫기</button>
    </Modal>
  );
}

export default OneSeatModal;
