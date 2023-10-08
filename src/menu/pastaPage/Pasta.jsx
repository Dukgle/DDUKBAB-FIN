<<<<<<< HEAD
import "../MenuList.css";
=======
>>>>>>> d7adfa1b0febb31538603b389d62bd3b46c00127
import React, { useState, useEffect } from "react";
import Header_menu from "../../header/Header_menu";
import { Link } from "react-router-dom";
import images from "../../img/pasta/index.js";
import BookmarkButton from "../bookmark/Bookmark";
<<<<<<< HEAD
=======
import soldOutImage from "../../img/품절.png";
>>>>>>> d7adfa1b0febb31538603b389d62bd3b46c00127

function Pasta() {
  const logoText = "파스타";

  const menus = [
    { name: "고기리들기름파스타", price: "6,000" },
    { name: "우삼겹알리올리오", price: "6,500" },
    { name: "클래식토마토파스타", price: "6,500" },
    { name: "트러플버섯크림파스타", price: "6,500" },
    { name: "돼지김치파스타", price: "7,500" },
    { name: "대패삼겹크림파스타", price: "7,500" },
    { name: "매콤로제파스타", price: "7,500" },
    { name: "김치삼겹필라프", price: "7,500" },
    { name: "콜라", price: "1,500" },
    { name: "사이다", price: "1,500" },
  ];

<<<<<<< HEAD
=======
  const menusOut = [
    { name: "고기리들기름파스타", price: "6,000" },
    { name: "김치삼겹필라프", price: "7,500" },
    { name: "대패삼겹크림파스타", price: "7,500" },
  ];

>>>>>>> d7adfa1b0febb31538603b389d62bd3b46c00127
  return (
    <div className="menu-page">
      <Header_menu logoText={logoText} />
      <div id="gap"></div>
      <div id="menu-list">
        {menus.map((m, i) => (
<<<<<<< HEAD
          <div className="menu-container">
            <div className="bookmarkIcon">
              <BookmarkButton />
            </div>
            <React.Fragment key={m.name}>
              <Link to={`/menu/${m.name}`}>
                <div className="menu-wrap" id={m.name}>
                  <div className="img-menus">
                    <img src={images[m.name]} alt="사진" width="90" height="70" />
                  </div>
                  <div className="name">{m.name}</div>
                </div>
              </Link>
            </React.Fragment>
=======
          <div className="menu-container" key={m.name}>
            <div className="bookmarkIcon">
              <BookmarkButton />
            </div>
            <Link to={`/menu/${m.name}`}>
              <div className="menu-wrap" id={m.name}>
                <div className="img-menus">{menusOut.some((menu) => menu.name === m.name) ? <img src={soldOutImage} alt="품절" className="sold-out-image" width="80" height="60" /> : <img src={images[m.name]} alt="사진" width="90" height="70" />}</div>
                <div className="name">{m.name}</div>
              </div>
            </Link>
>>>>>>> d7adfa1b0febb31538603b389d62bd3b46c00127
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pasta;
