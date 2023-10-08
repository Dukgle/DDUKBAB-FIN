import "./Header.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../api";

import CartIcon from "../icon/icon-shopping-cart.png";
import ListIcon from "../icon/icon-ui.png";

import Cart from "../cart/Cart";
import Qr from "./Qr";
import Dropdown from "./Dropdown";

function Header({ logoText }) {
  const [isDropdownView, setDropdownView] = useState(false); // 드롭다운을 위한 함수 정의
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    // 페이지가 처음 렌더링될 때 사용자 정보를 가져오는 함수 호출
    getNickname()
  }, []);

  const handleClickContainer = () => {
    setDropdownView(!isDropdownView);
  };

  const handleBlurContainer = () => {
    setTimeout(() => {
      setDropdownView(false);
    }, 200);
  };

  const getNickname = async () => {
    try {
      const response = await axiosInstance.get('/users/users-info'); // API 엔드포인트를 적절하게 수정
  
      const userData = response.data.user_info; // 서버에서 받은 사용자 정보
      console.log(userData)
      const { nickname } = userData; // 이름, 학번, 역할 추출
  
      setNickname(nickname);
      console.log('닉네임 변경 성공', response.data);
      // 닉네임 변경 성공 후 다른 작업 수행
      // 예: 성공 메시지 표시, 리다이렉트 등
    } catch (error) {
      console.error('닉네임 변경 오류', error.response.data);
      // 오류 처리
      // 예: 실패 메시지 표시
    }
  };

  return (
    <header>
      <div className="header-menu">
        <div className="back">
          <button className="back-button" style={{ color: "rgba(0,0,0,0)" }}>
            　&gt;
          </button>
        </div>
        <div className="nickname" id="menu_nickname">
          {nickname}
        </div>
        {/* 나중에 연결 */}
        <div className="logo-page">
          <div className="logo">{logoText}</div> {/* 페이지 이름 */}
          <div className="icon-wrap">
            <div className="icon">
              {/* 아이콘 모음 */}
              <div className="cart">
                {/* 장바구니 */}
                <div className="cart-button">
                  <Link to="/cart">
                    {Cart}
                    <img src={CartIcon} alt="Cart" />
                  </Link>
                </div>
              </div>
              <div className="qr">
                {/* QR코드 */}
                <Qr /> {/* 모달창 띄우는 컴포넌트 */}
              </div>
              <div className="list" onBlur={handleBlurContainer}>
                {/* 메뉴 드롭다운_onBlur 사용 */}
                <button className="list-button" onClick={handleClickContainer}>
                  <img src={ListIcon} alt="List" />
                  {isDropdownView && <Dropdown />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
