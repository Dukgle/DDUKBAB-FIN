import '../MenuPage.css';
import React, { useState, useEffect } from 'react';
import Header_menu from '../../header/Header_menu';
import { Link } from 'react-router-dom';
import image from '../../img/pasta/사이다.jpg';
import image_net from '../../img/nutrient/pasta2.png';
import BookmarkButton from '../bookmark/Bookmark';
// import Chart from '../Chart';

function Sprite() {
    const logoText = "파스타";

    return (
        <div className="menu-imform">
            <Header_menu logoText={logoText} />
            <div id='gap'></div>
            <div className='bookmarkIcon'>
                <BookmarkButton />
            </div>
            <Link to="/optionPasta">
                <div className='menu-inform-wrap'>
                    <div className='menu-img'>
                        <img src={image} alt='사진' class='menu-menu-img' width='130' height='110' />
                    </div>
                    <div className='infrom-text'>
                        <div className='menu-name'>
                            사이다
                        </div>
                        <div className='menu-price'>
                            1,500원
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

export default Sprite;