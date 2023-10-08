import '../MenuPage.css';
import React, { useState, useEffect } from 'react';
import Header_menu from '../../header/Header_menu';
import { Link } from 'react-router-dom';
import image from '../../img/masung/부산어묵.jpg';
import image_net from '../../img/nutrient/masung.png';
import BookmarkButton from '../bookmark/Bookmark';
// import Chart from '../Chart';

function Busan() {
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
                        <img src={image} alt='사진' width='130' height='110' />
                    </div>
                    <div className='infrom-text'>
                        <div className='menu-name'>
                            부산어묵
                        </div>
                        <div className='menu-price'>
                            2,000원
                        </div>
                    </div>
                </div>
            </Link>
            <div className='nutrient-img'>
                <img src={image_net} alt='사진' width='340' height='215' />
            </div>
        </div>
    );
}

export default Busan;