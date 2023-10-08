import "../MenuList.css";
import React from "react";
import Header_menu from "../../header/Header_menu";
import { Link } from "react-router-dom";
import images from "../../img/toast/index.js";
import BookmarkButton from "../bookmark/Bookmark";
import soldOutImage from "../../img/품절.png";

function Toast() {
  const logoText = "토스트";

  const menus = [
    { name: "햄치즈토스트", price: "3,500" },
    { name: "프렌치토스트", price: "2,500" },
    { name: "프렌치토스트_음료수", price: "4,000" },
    { name: "마카다미아쿠키", price: "1,400" },
    { name: "스콘", price: "1,900" },
    { name: "비스킷슈", price: "2,300" },
    { name: "대만샌드위치", price: "2,500" },
    { name: "크림치즈프렛즐", price: "2,700" },
    { name: "글레이즈도넛", price: "1,300" },
    { name: "바바리안크림도넛", price: "1,500" },
    { name: "딸기크림도넛", price: "1,700" },
    { name: "초코케익링도넛", price: "1,700" },
    { name: "스모어쿠키", price: "2,900" },
    { name: "티라미수스틱케익", price: "2,900" },
  ];

  const menusOut = [
    { name: "프렌치토스트_음료수", price: "4,000" },
    { name: "크림치즈프렛즐", price: "2,700" },
    { name: "글레이즈도넛", price: "1,300" },
    { name: "바바리안크림도넛", price: "1,500" },
  ];

  return (
    <div className="menu-page">
      <Header_menu logoText={logoText} />
      <div id="gap"></div>
      <div id="menu-list">
        {menus.map((m, i) => (
          <div className="menu-container">
            <div className="bookmarkIcon">
              <BookmarkButton menu_name={m.name}/>
            </div>
            <React.Fragment key={m.name}>
              <Link to={`/menu/${m.name}`}>
                <div className="menu-wrap" id={m.name}>
                  <div className="img-menus">{menusOut.some((menu) => menu.name === m.name) ? <img src={soldOutImage} alt="품절" className="sold-out-image" width="80" height="60" /> : <img src={images[m.name]} alt="사진" width="90" height="70" />}</div>
                  <div className="name">{m.name}</div>
                </div>
              </Link>
            </React.Fragment>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Toast;
