import React, { useState } from "react";
import Header_mypage from "../../header/Header_mypage";
import { Link } from "react-router-dom";



import "./Pay.css";

function Pay() {
    const logoText = "포인트 충전";
    const { next_redirect_pc_url } = this.state;

    return (
        <div className="pay-page">
            <Header_mypage logoText={logoText} />

            <div className="pay-wrap">
                <div className="cacao-pay">
                    <form method="post">
                    <button className="cacao-pay-button">카카오페이로 충전하기</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Pay;