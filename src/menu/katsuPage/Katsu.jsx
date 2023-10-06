import "../MenuList.css";
import React, { useState, useEffect } from "react";
import Header_menu from "../../header/Header_menu";
import { Link } from "react-router-dom";
import images from "../../img/katsu/index.js";
import BookmarkButton from "../bookmark/Bookmark";

function Katsu() {
  const logoText = "군산카츠";

  const menus = [
    { name: "카레덮밥", price: "4,900" },
    { name: "고구마치즈돈까스", price: "6,900" },
    { name: "돈카츠카레덮밥", price: "7,500" },
    { name: "새우카레덮밥", price: "7,500" },
    { name: "더블돈카츠", price: "9,500" },
    { name: "할인행사_돈카츠", price: "5,900" },
  ];

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
                  <div className="img-menus">
                    <img src={images[m.name]} alt="사진" width="90" height="70" />
                  </div>
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

export default Katsu;
