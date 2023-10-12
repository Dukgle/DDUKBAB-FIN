// PayModal.jsx

import React,{useState, useEffect}  from 'react';
import CustomModal from '../CustomModal';
import axiosInstance from '../api';



function PayModal({ isOpen, onRequestClose }) {
    const [id, setID] = useState("");

    useEffect(() => {
        // 페이지가 처음 렌더링될 때 사용자 정보를 가져오는 함수 호출
        getNum();
      }, []);
    
    const getNum = async () => {
        try {
        const response = await axiosInstance.get('/users/order/order-num'); // API 엔드포인트를 적절하게 수정
    
        const userData = response.data.wait_num; // 서버에서 받은 사용자 정보
        const {id} = userData; // 이름, 학번, 역할 추출
        setID(id)

        } catch (error) {
        console.error('사용자 번호 가져오기 오류', error.response.data);

        }
    };

    return (
        <CustomModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="결제 모달"
            className="custom-modal"
        >
            <h3>주문이 완료되었습니다.</h3>
            <h2>대기번호</h2>
            <h1>{id}</h1>
            <p>대기번호 순서가 되면 주문하신 메뉴를 찾아가주세요.</p>
        </CustomModal>
    );
}

export default PayModal;
