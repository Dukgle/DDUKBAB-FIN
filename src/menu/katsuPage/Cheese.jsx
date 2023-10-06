import '../MenuPage.css';
import React, { useState, useEffect } from 'react';
import Header_menu from '../../header/Header_menu';
import { Link } from 'react-router-dom';
import image from '../../img/katsu/고구마치즈돈까스.png';
import image_net from '../../img/nutrient/katsu2.png';
import BookmarkButton from '../bookmark/Bookmark';
// import Chart from '../Chart';

function Cheese() {
    const logoText = "군산카츠";

    return (
        <div className="menu-imform">
            <Header_menu logoText={logoText} />
            <div id='gap'></div>
            <div className='bookmarkIcon'>
                <BookmarkButton />
            </div>
            <div className='menu-inform-wrap'>
                <div className='menu-img'>
                    <img src={image} alt='사진' width='130' height='110' />
                </div>
                <div className='infrom-text'>
                    <div className='menu-name'>
                        고구마치즈돈까스
                    </div>
                    <div className='menu-price'>
                        6,900원
                    </div>
                </div>
            </div>
            <div className='nutrient-img'>
                <img src={image_net} alt='사진' width='340' height='215' />
            </div>
        </div>
    );
}

export default Cheese;