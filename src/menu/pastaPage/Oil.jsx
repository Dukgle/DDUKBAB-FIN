import '../MenuPage.css';
import React, { useState, useEffect } from 'react';
import Header_menu from '../../header/Header_menu';
import { Link } from 'react-router-dom';
import image from '../../img/pasta/고기리들기름파스타.jpg';
import image_net from '../../img/nutrient/pasta.png';
import BookmarkButton from '../bookmark/Bookmark';
<<<<<<< HEAD
// import Chart from '../Chart';

function Oil() {
    const logoText = "파스타";
=======

function Oil() {
    const logoText = "파스타";
    const menuName = {
        menuText: "고기리들기름파스타"
    };
>>>>>>> d7adfa1b0febb31538603b389d62bd3b46c00127

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
                        고기리들기름파스타
                    </div>
                    <div className='menu-price'>
                        6,000원
                    </div>
                </div>
            </div>
=======
            <Link to="/optionPasta">
                <div className='menu-inform-wrap'>
                    <div className='menu-img'>
                        <img src={image} alt='사진' width='130' height='110' />
                    </div>
                    <div className='infrom-text'>
                        <div className='menu-name'>
                            고기리들기름파스타
                        </div>
                        <div className='menu-price'>
                            6,000원
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

<<<<<<< HEAD
export default Oil;
=======
export default Oil;
>>>>>>> d7adfa1b0febb31538603b389d62bd3b46c00127
