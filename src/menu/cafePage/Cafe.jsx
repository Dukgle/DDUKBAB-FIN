import "../MenuList.css";
import React from "react";
import Header_menu from "../../header/Header_menu";
import { Link } from "react-router-dom";
import images from "../../img/cafe/index.js";
import BookmarkButton from "../bookmark/Bookmark";

function Cafe() {
  const logoText = "샌드위치 카페";

  const menus = [
    { name: "아메리카노", price: "2,000" },
    { name: "헤이즐넛아메리카노", price: "2,500" },
    { name: "카페라떼", price: "2,900" },
    { name: "카푸치노", price: "3,200" },
    { name: "바닐라라떼", price: "3,200" },
    { name: "바닐라드림라떼", price: "3,500" },
    { name: "헤이즐넛라떼", price: "3,200" },
    { name: "헤이즐넛드림라떼", price: "3,500" },
    { name: "카페모카", price: "3,200" },
    { name: "카라멜라떼", price: "3,200" },
    { name: "돌체라떼", price: "3,200" },
    { name: "화이트아메리카노", price: "2,700" },
    { name: "복숭아아이스티", price: "2,300" },
    { name: "티라미수라떼", price: "4,000" },
    { name: "초코라떼", price: "3,200" },
    { name: "그린티라떼", price: "3,200" },
    { name: "밀크티", price: "3,200" },
    { name: "라이스믹스라떼", price: "3,500" },
    { name: "민트초코라떼", price: "3,500" },
    { name: "토피넛라떼", price: "3,500" },
    { name: "타로라떼", price: "3,500" },
    { name: "쿠키앤크림라떼", price: "3,500" },
    { name: "딸기라떼", price: "3,800" },
    { name: "허니블랙자몽티", price: "3,500" },
    { name: "피스타치오라떼", price: "3,500" },
    { name: "고구마라떼", price: "3,500" },
    { name: "코코넛라떼", price: "3,500" },
    { name: "메론소다", price: "3,000" },
    { name: "허브차", price: "2,700" },
    { name: "우유", price: "1,900" },
    { name: "퓨어프로즌요거트", price: "3,500" },
    { name: "블루베리스무디", price: "3,800" },
    { name: "딸기스무디", price: "3,800" },
    { name: "망고스무디", price: "3,800" },
    { name: "유자스무디", price: "3,800" },
    { name: "블루베리요거트스무디", price: "4,100" },
    { name: "딸기요거트스무디", price: "4,100" },
    { name: "망고요거트스무디", price: "4,100" },
    { name: "자바칩프라페", price: "3,800" },
    { name: "쿠키앤크림라떼", price: "3,800" },
    { name: "민트초코칩프라페", price: "3,800" },
    { name: "카라멜프라페", price: "3,800" },
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

export default Cafe;
