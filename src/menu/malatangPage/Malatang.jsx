import "../MenuList.css";
import React from "react";
import Header_menu from "../../header/Header_menu";
import { Link } from "react-router-dom";
import images from "../../img/malatang/index.js";
import BookmarkButton from "../bookmark/Bookmark";
import soldOutImage from "../../img/품절.png";

function Malatang() {
  const logoText = "마라탕";

  const menus = [
    { name: "한우사골마라탕", price: "6,900" },
    { name: "마라샹궈", price: "8,700" },
    { name: "꿔바로우_소", price: "5,000" },
    { name: "꿔바로우_대", price: "10,000" },
    { name: "빙홍차", price: "2,500" },
  ];

  const menusOut = [{ name: "꿔바로우_대", price: "10,000" }];

  return (
    <div className="menu-page">
      <Header_menu logoText={logoText} />
      <div id="gap"></div>
      <div id="menu-list">
        {menus.map((m, i) => (
          <div className="menu-container">
            <div className="bookmarkIcon">
              <BookmarkButton />
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

export default Malatang;
