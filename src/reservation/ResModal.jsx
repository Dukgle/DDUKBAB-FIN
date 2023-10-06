import React from 'react';
import Modal from 'react-modal';
//import './ResModal.css';

Modal.setAppElement('#root'); // 모달을 루트 엘리먼트와 연결

function ResModal({ isOpen, closeModal, content }) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
        >
            <div>{content}</div>
            <button onClick={closeModal}>닫기</button>
        </Modal>
    );
}

export default ResModal;
