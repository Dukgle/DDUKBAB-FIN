import '../MenuPage.css';
import React, { useState, useEffect } from 'react';
import Header_menu from '../../header/Header_menu';
import { Link } from 'react-router-dom';
import image from '../../img/toast/프렌치토스트.jpg';
import image_net from '../../img/nutrient/toast.png';
import BookmarkButton from '../bookmark/Bookmark';
// import Chart from '../Chart';

function French_drink() {
    const logoText = "토스트";

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
                        프렌치토스트_음료수
                    </div>
                    <div className='menu-price'>
                        2,500원
                    </div>
                </div>
            </div>
=======
            <Link to="/optionToast">
                <div className='menu-inform-wrap'>
                    <div className='menu-img'>
                        <img src={image} alt='사진' width='130' height='110' />
                    </div>
                    <div className='infrom-text'>
                        <div className='menu-name'>
                            프렌치토스트_음료수
                        </div>
                        <div className='menu-price'>
                            2,500원
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

export default French_drink;