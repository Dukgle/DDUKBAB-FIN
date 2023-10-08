import React, { useState } from "react";
import Header_mypage from "../../header/Header_mypage";
import { Link } from "react-router-dom";
import axios from "axios";

import "./Pay.css";

function Point() {
    const logoText = "포인트 충전";
    const [chargeAmount, setChargeAmount] = useState("");
    const [username, setUsername] = useState(""); // 사용자 이름 상태 추가

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

        console.log(money);
    
        IMP.request_pay({
            pg: 'kakaopay',
            merchant_uid: 'merchant_' + new Date().getTime(),
            name: '주문명 : 주문명 설정',
            amount: money,
            buyer_name: username,
            buyer_tel: '010-1234-5678',
            m_redirect_url: 'localhost:3000/mypage',
        }, function (rsp) {
            console.log(rsp.error_msg)
            console.log(rsp);
            if (rsp.success) {
                const msg = '결제가 완료되었습니다.';
                msg += '고유ID : ' + rsp.imp_uid;
                msg += '상점 거래ID : ' + rsp.merchant_uid;
                msg += '결제 금액 : ' + rsp.paid_amount;
                msg += '카드 승인번호 : ' + rsp.apply_num;
    
                // 결제가 성공한 경우, axios를 사용하여 서버로 데이터를 전송합니다.
                axios.get("/user/mypage/charge/point", {
                    params: {
                        amount: money
                    }
                }).then(response => {
                    // 서버로 요청이 성공했을 때의 처리
                    console.log(response.data);
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
            document.location.href = "/mypage";
        });
    };

    return (
        <div className="point-page">
            <Header_mypage logoText={logoText} />

            <div className="point-wrap">
                <div className="point-balance">
                    <p>Point</p>
                    <p>30000 P</p>
                </div>
                <div className="point-pay">
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
