import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import { Link } from "react-router-dom";
import image_masung from "../img/masung/떡볶이.png";
import image_alone from "../img/masung/혼족세트.png";
import image_icetea from "../img/cafe/복숭아아이스티.jpg";
import image_americano from "../img/cafe/아메리카노.jpg";
import Cart_Bookmark from "./component/Cart_Bookmark";
import axiosInstance from "../api";

function CartBookmark() {
  const logoText = "장바구니";
  const [bookmarkMenus, setBookmarkMenus] = useState([]);

  const bottonStyle = {
    background: "#FCCB6F",
  };

  // const bookmark_menus = [
  //     { id: 1, name: "마성떡볶이", menu: "혼족세트", price: 6500, image: image_masung },
  //     { id: 2, name: "마성떡볶이", menu: "마성떡볶이", price: 4500, image: image_alone},
  //     { id: 3, name: "샌드위치 카페", menu: "아이스티", price: 3500, image: image_icetea},
  //     { id: 3, name: "샌드위치 카페", menu: "아메리카노", price: 2000, image: image_americano}
  // ];

  useEffect(() => {
    // API를 호출하여 데이터를 가져옵니다.
    axiosInstance
      .get("/users/bookmarks/get") // API 엔드포인트를 적절하게 변경해야 합니다.
      .then((response) => {
        const data = response.data;
        const bookmarkArray = data.bookmarks.map((bookmark) => ({
          menu_name: bookmark.menu_name,
          store_name: bookmark.store_name,
        }));
        setBookmarkMenus(bookmarkArray);
      })
      .catch((error) => {
        console.error("데이터를 가져오는 중 오류가 발생했습니다:", error);
      });
  }, []);

  return (
    <div className="bookmark-page">
      <Header logoText={logoText} />
      <div className="cart-center">
        <Link to="/cart">
          <button className="cart-page-button">내가 담은 장바구니</button>
        </Link>
        <Link to="/bookmark">
          <button className="bookmark-page-button" style={bottonStyle}>
            즐겨찾는 메뉴
          </button>
        </Link>

        {/* CartMenu 컴포넌트를 렌더링합니다. */}
        <Cart_Bookmark bookmark_menus={bookmarkMenus} />
      </div>
    </div>
  );
}

export default CartBookmark;
