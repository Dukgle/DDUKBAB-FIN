import '../MenuPage.css';
import React, { useState, useEffect } from 'react';
import Header_menu from '../../header/Header_menu';
import { Link } from 'react-router-dom';
import image from '../../img/malatang/한우사골마라탕.jpg';
import image_net from '../../img/nutrient/malatang.png';
import BookmarkButton from '../bookmark/Bookmark';
// import Chart from '../Chart';

function Mala_tang() {
    const logoText = "마라탕";

    return (
        <div className="menu-imform">
            <Header_menu logoText={logoText} />
            <div id='gap'></div>
            <div className='bookmarkIcon'>
                <BookmarkButton />
            </div>
<<<<<<< HEAD
            <div className='menu-inform-wrap'>
                <div className='menu-img'>
                    <img src={image} alt='사진' width='130' height='110' />
                </div>
                <div className='infrom-text'>
                    <div className='menu-name'>
                        한우사골마라탕
                    </div>
                    <div className='menu-price'>
                        6,900원
                    </div>
                </div>
            </div>
=======
            <Link to="/optionMalatang">
                <div className='menu-inform-wrap'>
                    <div className='menu-img'>
                        <img src={image} alt='사진' width='130' height='110' />
                    </div>
                    <div className='infrom-text'>
                        <div className='menu-name'>
                            한우사골마라탕
                        </div>
                        <div className='menu-price'>
                            6,900원
                        </div>
                    </div>
                </div>
            </Link>
>>>>>>> d7adfa1b0febb31538603b389d62bd3b46c00127
            <div className='nutrient-img'>
                <img src={image_net} alt='사진' width='340' height='215' />
            </div>
        </div>
    );
}

export default Mala_tang;