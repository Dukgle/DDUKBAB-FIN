import React from 'react';
import Header from '../header/Header';
import { Link } from 'react-router-dom';
import image_masung from '../img/masung/떡볶이.png';
import image_alone from '../img/masung/혼족세트.png';
import image_icetea from '../img/cafe/복숭아아이스티.jpg';
import image_americano from '../img/cafe/아메리카노.jpg';
import Cart_Bookmark from './component/Cart_Bookmark';

function CartBookmark() {
    const logoText = "장바구니";

    const bottonStyle = {
        background: "#FCCB6F",
    };

    const bookmark_menus = [
        { id: 1, name: "마성떡볶이", menu: "혼족세트", price: 6500, image: image_masung },
        { id: 2, name: "마성떡볶이", menu: "마성떡볶이", price: 4500, image: image_alone},
        { id: 3, name: "샌드위치 카페", menu: "아이스티", price: 3500, image: image_icetea},
        { id: 3, name: "샌드위치 카페", menu: "아메리카노", price: 2000, image: image_americano}
    ];

    return (
        <div className="bookmark-page">
            <Header logoText={logoText} />
            <Link to='/cart'>
                <button className='cart-page-button'>내가 담은 장바구니</button>
            </Link>
            <Link to='/bookmark'>
                <button className='bookmark-page-button' style={bottonStyle}>즐겨찾는 메뉴</button>
            </Link>

            {/* CartMenu 컴포넌트를 렌더링합니다. */}
            <Cart_Bookmark bookmark_menus={bookmark_menus} />
        </div>
    );
}

export default CartBookmark;