import React from 'react';
import Header_menu from '../../header/Header_menu';
import { Link } from 'react-router-dom';

function TodayB() {
    const logoText = "오늘의 메뉴B";

    return (
        <div className="menu-page">
            <Header_menu logoText={logoText} />
            <Link to='/'>
                <button className='cart-page-button'>내가 담은 장바구니</button>
            </Link>

        </div>
    );
}

export default TodayB;