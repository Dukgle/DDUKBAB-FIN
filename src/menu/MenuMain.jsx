import "./MenuMain.css";
import React from "react";
import Header from "../header/Header";
import { Link } from "react-router-dom";

function MenuMain() {
  const logoText = "MENU";

<<<<<<< HEAD
  return (
    <div className="menu-page">
      <Header logoText={logoText} />

      <div className="menu-btn-list">
        <Link to="/todayA">
          <button className="a-menu-button">오늘의 메뉴 A</button>
        </Link>
        <Link to="/todayB">
          <button className="b-menu-button">오늘의 메뉴 B</button>
        </Link>
        <Link to="/pasta">
          <button className="pasta-menu-button">파스타</button>
        </Link>
        <Link to="/katsu">
          <button className="katsu-menu-button">군산카츠</button>
        </Link>
        <Link to="/masung">
          <button className="masung-menu-button">마성떡볶이</button>
        </Link>
        <Link to="/malatang">
          <button className="malatang-menu-button">한우사골 마라탕</button>
        </Link>
        <Link to="/toast">
          <button className="toast-menu-button">토스트</button>
        </Link>
        <Link to="/cafe">
          <button className="cafe-menu-button">샌드위치 카페</button>
        </Link>
      </div>
    </div>
  );
=======
    return (
        <div className="menu-page">
            <Header logoText={logoText} />
            
            <div className="menu-btn-list">
              <Link to='/오늘의 메뉴 A'>
                  <button className='a-menu-button'>오늘의 메뉴 A</button>
              </Link>
              <Link to='/오늘의 메뉴 B'>
                  <button className='b-menu-button'>오늘의 메뉴 B</button>
              </Link>
              <Link to='/파스타'>
                  <button className='pasta-menu-button'>파스타</button>
              </Link>
              <Link to='/군산카츠'>
                  <button className='katsu-menu-button'>군산카츠</button>
              </Link>
              <Link to='/마성떡볶이'>
                  <button className='masung-menu-button'>마성떡볶이</button>
              </Link>
              <Link to='/한우사골 마라탕'>
                  <button className='malatang-menu-button'>한우사골 마라탕</button>
              </Link>
              <Link to='/토스트'>
                  <button className='toast-menu-button'>토스트</button>
              </Link>
              <Link to='/샌드위치 카페'>
                  <button className='cafe-menu-button'>샌드위치 카페</button>
              </Link>
            </div>
        </div>
    );
>>>>>>> d7adfa1b0febb31538603b389d62bd3b46c00127
}

export default MenuMain;
