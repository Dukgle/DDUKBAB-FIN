import "../MenuList.css";
import React from "react";
import Header_menu from "../../header/Header_menu";
import { Link } from "react-router-dom";
import images from "../../img/masung/index.js";
import BookmarkButton from "../bookmark/Bookmark";
<<<<<<< HEAD
=======
import soldOutImage from "../../img/품절.png";
>>>>>>> d7adfa1b0febb31538603b389d62bd3b46c00127

function Masung() {
  const logoText = "마성떡볶이";

  const menus = [
    { name: "혼족세트", price: "6,000" },
    { name: "마성세트", price: "11,000" },
    { name: "패밀리세트", price: "15,000" },
    { name: "마성떡볶이", price: "3,500" },
    { name: "치킨꼬치떡볶이", price: "5,500" },
    { name: "마성라면", price: "3,500" },
    { name: "만두라면", price: "4,000" },
    { name: "치즈라면", price: "4,000" },
    { name: "부산어묵", price: "2,000" },
    { name: "빨간어묵", price: "2,500" },
    { name: "찰순대", price: "3,500" },
    { name: "스팸참치덮밥", price: "5,000" },
    { name: "버터장조림덮밥", price: "5,000" },
    { name: "치킨마요덮밥", price: "5,000" },
    { name: "마성김밥", price: "3,000" },
    { name: "참치김밥", price: "3,500" },
    { name: "야채튀김", price: "2,500" },
    { name: "삼각잡채말이만두", price: "2,000" },
    { name: "고추튀김", price: "2,500" },
    { name: "모듬튀김", price: "6,500" },
    { name: "통통김말이", price: "2,000" },
    { name: "오징어튀김", price: "3,000" },
  ];

<<<<<<< HEAD
=======
  const menusOut = [
    { name: "마성떡볶이", price: "3,500" },
    { name: "치킨꼬치떡볶이", price: "5,500" },
    { name: "버터장조림덮밥", price: "5,000" },
    { name: "치킨마요덮밥", price: "5,000" },
  ];

>>>>>>> d7adfa1b0febb31538603b389d62bd3b46c00127
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
<<<<<<< HEAD
                  <div className="img-menus">
                    <img src={images[m.name]} alt="사진" width="90" height="70" />
                  </div>
=======
                  <div className="img-menus">{menusOut.some((menu) => menu.name === m.name) ? <img src={soldOutImage} alt="품절" className="sold-out-image" width="80" height="60" /> : <img src={images[m.name]} alt="사진" width="90" height="70" />}</div>
>>>>>>> d7adfa1b0febb31538603b389d62bd3b46c00127
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

export default Masung;
