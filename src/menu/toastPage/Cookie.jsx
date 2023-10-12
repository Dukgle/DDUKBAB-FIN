import '../MenuPage.css';
import React, { useState, useEffect } from 'react';
import Header_menu from '../../header/Header_menu';
import { Link } from 'react-router-dom';
import image from '../../img/toast/마카다미아쿠키.jpg';
import image_net from '../../img/nutrient/toast.png';
import BookmarkButton from '../bookmark/Bookmark';
// import Chart from '../Chart';

function Cookie() {
    const logoText = "토스트";

    return (
        <div className="menu-imform">
            <Header_menu logoText={logoText} />
            <div id='gap'></div>
            <div className='bookmarkIcon'>
                <BookmarkButton />
            </div>
            <Link to="/optionToast">
                <div className='menu-inform-wrap'>
                    <div className='menu-img'>
                        <img src={image} alt='사진' class='menu-menu-img' width='130' height='110' />
                    </div>
                    <div className='infrom-text'>
                        <div className='menu-name'>
                            마카다미아쿠키
                        </div>
                        <div className='menu-price'>
                            1,400원
                        </div>
                    </div>
                </div>
            </Link>
            <div className='nutrient-img'>
                <img src={image_net} alt='사진' class='today-nutrient-img' width='340' height='215' />
            </div>
        </div>
    );
}

export default Cookie;