import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function TwoFourSeatModal({ isOpen, closeModal, seatCount }) {
    const [studentIds, setStudentIds] = useState(Array(seatCount).fill(''));

    const handleStudentIdChange = (e, index) => {
        const newStudentIds = [...studentIds];
        newStudentIds[index] = e.target.value;
        setStudentIds(newStudentIds);
    };

    const handleReserveClick = () => {
        const reservedSeats = studentIds.filter((studentId) => studentId !== '');
        alert(`학번 ${reservedSeats.join(', ')}으로 좌석 예약을 진행합니다.`);
        closeModal();
    };

    const renderInputFields = () => {
        const inputFields = [];
        for (let i = 0; i < seatCount; i++) {
            inputFields.push(
                <div key={i}>
                    <p>학번 {i + 1}을 입력하세요:</p>
                    <input
                        type="text"
                        value={studentIds[i]}
                        onChange={(e) => handleStudentIdChange(e, i)}
                    />
                </div>
            );
        }
        return inputFields;
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={closeModal}>
            <h2>좌석을 예약하시겠습니까?</h2>
            {renderInputFields()}
            <button onClick={handleReserveClick}>예약</button>
            <button onClick={closeModal}>닫기</button>
        </Modal>
    );
}

export default TwoFourSeatModal;