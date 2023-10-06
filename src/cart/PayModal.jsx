// PayModal.jsx

import React from 'react';
import CustomModal from '../CustomModal';

function PayModal({ isOpen, onRequestClose }) {
    return (
        <CustomModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="결제 모달"
            className="custom-modal"
        >
            <h3>주문이 완료되었습니다.</h3>
            <h2>대기번호</h2>
            <h1>516</h1>
            <p>대기번호 순서가 되면 주문하신 메뉴를 찾아가주세요.</p>
        </CustomModal>
    );
}

export default PayModal;
