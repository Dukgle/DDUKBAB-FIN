import '../MenuPage.css';
import React, { useState, useEffect } from 'react';
import Header_menu from '../../header/Header_menu';
import { Link } from 'react-router-dom';
import image from '../../img/malatang/마라샹궈.jpg';
import image_net from '../../img/nutrient/malatang2.png';
import BookmarkButton from '../bookmark/Bookmark';
// import Chart from '../Chart';

function Mala_xiangguo() {
    const logoText = "마라탕";

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
                        마라샹궈
                    </div>
                    <div className='menu-price'>
                        8,700원
                    </div>
                </div>
            </div>
            <div className='nutrient-img'>
                <img src={image_net} alt='사진' width='340' height='215' />
            </div>
        </div>
    );
}

export default Mala_xiangguo;