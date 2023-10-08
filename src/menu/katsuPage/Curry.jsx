import '../MenuPage.css';
import React, { useState, useEffect } from 'react';
import Header_menu from '../../header/Header_menu';
import { Link } from 'react-router-dom';
import image from '../../img/katsu/카레덮밥.jpg';
import image_net from '../../img/nutrient/katsu.png';
import BookmarkButton from '../bookmark/Bookmark';
// import Chart from '../Chart';

function Curry() {
    const logoText = "군산카츠";

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
                        카레덮밥
                    </div>
                    <div className='menu-price'>
                        4,900원
                    </div>
                </div>
            </div>
=======
            <Link to="/optionKatsu">
                <div className='menu-inform-wrap'>
                    <div className='menu-img'>
                        <img src={image} alt='사진' width='130' height='110' />
                    </div>
                    <div className='infrom-text'>
                        <div className='menu-name'>
                            카레덮밥
                        </div>
                        <div className='menu-price'>
                            4,900원
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

export default Curry;