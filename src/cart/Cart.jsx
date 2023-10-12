import './Cart.css'
import React,{useState} from 'react';
import Header from '../header/Header';
import { Link } from 'react-router-dom';
import CartMenu from './component/CartMenu';
import image_masung from '../img/masung/떡볶이.png';
import image_alone from '../img/masung/혼족세트.png';
import image_icetea from '../img/cafe/복숭아아이스티.jpg';

function Cart() {
    const logoText = "장바구니";

    const bottonStyle = {
        background: "#FCCB6F",
    };

    // 메뉴 정보를 저장할 배열
    const cart_menus = [
        { id: 1, name: "마성떡볶이", menu: "혼족세트", num: 1, price: 6500, image: image_masung },
        { id: 2, name: "마성떡볶이", menu: "마성떡볶이",num: 1, price: 4500, image: image_alone},
        { id: 3, name: "샌드위치 카페", menu: "아이스티",num: 1, price: 3500, image: image_icetea}
    ];

    return (
        <div className="cart-page">
            <Header logoText={logoText} />
            <Link to='/cart'>
                <button className='cart-page-button' style={bottonStyle}>내가 담은 장바구니</button>
            </Link>
            <Link to='/bookmark'>
                <button className='bookmark-page-button'>즐겨찾는 메뉴</button>
            </Link>

            {/* CartMenu 컴포넌트를 렌더링합니다. */}
            <CartMenu cart_menus={cart_menus} />

            <Link to={cart_menus.length === 0 ? '#' : '/order'}>
                <div className='order-button-div'>
                    <button className='order-button' style={{ ...bottonStyle, backgroundColor: cart_menus.length === 0 ? '#FFFFFF' : '#FCCB6F' }}>
                        <p>주문하기</p>
                    </button>
                </div>
            </Link>
        </div>
    );
}

export default Cart;
