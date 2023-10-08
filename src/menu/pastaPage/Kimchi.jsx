import '../MenuPage.css';
import React, { useState, useEffect } from 'react';
import Header_menu from '../../header/Header_menu';
import { Link } from 'react-router-dom';
import image from '../../img/pasta/4분돼지김치파스타.jpg';
import image_net from '../../img/nutrient/pasta.png';
import BookmarkButton from '../bookmark/Bookmark';
// import Chart from '../Chart';

function Kimchi() {
    const logoText = "파스타";

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
                        4분돼지김치파스타
                    </div>
                    <div className='menu-price'>
                        7,500원
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
                            4분돼지김치파스타
                        </div>
                        <div className='menu-price'>
                            7,500원
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

export default Kimchi;