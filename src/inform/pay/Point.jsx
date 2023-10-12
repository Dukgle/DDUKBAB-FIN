import React, { useState, useEffect } from "react";
import Header_mypage from "../../header/Header_mypage";
import axios from "axios";
import axiosInstance from '../../api';

import "./Pay.css";

function Point() {
    const logoText = "포인트 충전";
    const [chargeAmount, setChargeAmount] = useState("");
    const [uni_num, setUni_num] = useState("");
    const [point, setPoint] = useState("");
    useEffect(() => {
        // 페이지가 처음 렌더링될 때 사용자 정보를 가져오는 함수 호출
        getInfo()
    }, []);

    const getInfo = async () => {
        try {
        const response = await axiosInstance.get('/users/users-info'); // API 엔드포인트를 적절하게 수정
    
        const userData = response.data.user_info; // 서버에서 받은 사용자 정보
        // console.log(userData)
        const { uni_num, point} = userData; // 학번, 역할 추출
    
        // 추출한 데이터를 React 상태에 저장
        // useState 훅을 사용하여 해당 상태 변수를 선언해야 합니다.
        // 예: const [name, setName] = useState("");
        // setName(name); // 이름 데이터 저장
        //setName(username);
        setUni_num(uni_num);
        setPoint(point);
        } catch (error) {
        console.error('사용자 정보 가져오기 오류', error.response.data);
        // 오류 처리
        // 예: 실패 메시지 표시
        }
    };

    // '충전 금액' 입력 필드 값이 변경될 때 실행되는 함수
    const handleAmountChange = (event) => {
        // 입력 필드의 값으로 chargeAmount 상태를 업데이트합니다.
        setChargeAmount(event.target.value);
    };

    // '카카오페이로 충전하기' 버튼을 클릭할 때 실행되는 함수
    const handleKakaoPayment = () => {
        const IMP = window.IMP;
        IMP.init('imp07321617');
        
        // React에서 DOM 요소를 선택할 때는 useRef를 사용하거나, onClick 이벤트 핸들러 내에서 event.target을 활용할 수 있습니다.
        const money = parseInt(chargeAmount); // 수치로 변환
        const merchant_uid = `${new Date().getTime() + Math.random()}`;
        let msg = ''; // msg를 상수(const)에서 변수(let)로 선언해줍니다.

        console.log(money);
    
        IMP.request_pay({
            pg: 'kakaopay',
            merchant_uid: merchant_uid,
            name: '주문명 : 주문명 설정',
            amount: money,
            m_redirect_url: 'http://localhost:3000/myPage',
        }, function (rsp) {
            console.log(rsp.error_msg)
            console.log(rsp);
            if (rsp.success) {
                msg = '결제가 완료되었습니다.';
                msg += '고유ID : ' + rsp.imp_uid;
                msg += '상점 거래ID : ' + rsp.merchant_uid;
                msg += '결제 금액 : ' + rsp.paid_amount;
                msg += '카드 승인번호 : ' + rsp.apply_num;
    
                // 결제가 성공한 경우, axios를 사용하여 서버로 데이터를 전송합니다.
                axios.post("http://localhost:5000/api/user/mypage/charge/point", {
                    params: {
                        amount: money,
                        uni_num: uni_num,
                        merchant_uid: merchant_uid
                    }
                }).then(response => {
                    // 서버로 요청이 성공했을 때의 처리
                    console.log(response.data);
                    console.log(money)
                }).catch(error => {
                    // 서버로 요청이 실패했을 때의 처리
                    console.error(error);
                });
            } else {
                const msg = '결제에 실패하였습니다.';
                msg += '에러내용 : ' + rsp.error_msg;
                alert(msg);
            }
            // 결제 완료 또는 실패 후 홈페이지로 이동
            document.location.href = "http://localhost:3000/myPage";
        });
    };

    return (
        <div className="point-page">
            <Header_mypage logoText={logoText} />

            <div className="point-wrap">
                <div className="point-balance">
                    <p>Point</p>
                    <p>{point} P</p>
                </div>
                <div className="point-pay">
                    {/*
                    <label htmlFor="chargeId" id="id-pay-text">학번:</label>
                    <input 
                        type="text" 
                        id="chargeId" 
                        value={uni_num}
                        onChange={handleIdChange}
                    />
                     */}
                    <label htmlFor="chargeAmount" id="point-pay-text">충전 금액:</label>
                    <input
                        type="text"
                        id="chargeAmount"
                        value={chargeAmount}
                        onChange={handleAmountChange}
                    />
                </div>
                <button id="charge_kakao" onClick={handleKakaoPayment}>
                    카카오페이로 결제하기
                </button>
            </div>
        </div>
    );
}

export default Point;
