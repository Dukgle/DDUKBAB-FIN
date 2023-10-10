import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../api";

import CartIcon from "../icon/icon-shopping-cart.png";
import ListIcon from "../icon/icon-ui.png";
import QrIcon from '../icon/icon-qr-code.png';
import Qr from "./Qr";
import Dropdown from "./Dropdown";

function Header_option({ logoText }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isDropdownView, setDropdownView] = useState(false);
  const [nickname, setNickname] = useState("");
  useEffect(() => {
    // 페이지가 처음 렌더링될 때 사용자 정보를 가져오는 함수 호출
    getNickname()
  }, []);

    
  const openModal = () => {
    setModalIsOpen(true);       // 모달창이 열릴 수 있는 상태
};

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
          <Link to={`/${logoText}`}>
            <button className="back-button">{logoText}&gt;</button>
          </Link>
        </div>
        <div className="nickname" id="menu_nickname">
          {nickname}
        </div>
        <div className="logo">{logoText}</div>
      </div>
    </header>
  );
}

export default Header_option;
