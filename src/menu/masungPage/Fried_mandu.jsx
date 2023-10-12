import '../MenuPage.css';
import React, { useState, useEffect } from 'react';
import Header_menu from '../../header/Header_menu';
import { Link } from 'react-router-dom';
import image from '../../img/masung/삼각잡채말이만두.jpg';
import image_net from '../../img/nutrient/masung2.png';
import BookmarkButton from '../bookmark/Bookmark';
// import Chart from '../Chart';

function Fried_mandu() {
    const logoText = "마성떡볶이";

    return (
        <div className="menu-imform">
            <Header_menu logoText={logoText} />
            <div id='gap'></div>
            <div className='bookmarkIcon'>
                <BookmarkButton />
            </div>
            <Link to="/optionMasung">
                <div className='menu-inform-wrap'>
                    <div className='menu-img'>
                        <img src={image} alt='사진' width='130' class='menu-menu-img' height='110' />
                    </div>
                    <div className='infrom-text'>
                        <div className='menu-name'>
                            삼각잡채말이만두
                        </div>
                        <div className='menu-price'>
                            2,000원
                        </div>
                    </div>
                </div>
            </Link>
            <div className='nutrient-img'>
                <img src={image_net} alt='사진' class='today-nutrient-img' width='340' height='215' />
            </div>
            <div className='option-quantity'>
                <QuantityCheck amount={amount} setAmount={setAmount}/>
            </div>
            <div className="option-quantity-bottom-gap"></div>
            <div className='option-cart-button-wrap'>
                <Link to="/cart">
                    <button className='option-cart-button' onClick={shoppingPost}>
                        장바구니에 담기
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Fried_mandu;