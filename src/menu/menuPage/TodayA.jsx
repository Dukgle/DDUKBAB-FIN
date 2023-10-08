<<<<<<< HEAD
import React, { Component } from 'react';
import Header_menu from '../../header/Header_menu';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function TodayA() {
    const logoText = "오늘의 메뉴A";

    const todatA = [
        { day: "목요일", date: "09월 21일", menulist: ["제육덮밥", "미역줄기나물", "닭강정", "파김치", "쌀밥"]},
        { day: "금요일", date: "09월 22일" , menulist: ["소고기장터국밥", "사각어묵볶음", "숙주부추두부", "석박지", "흑미밥"]}
=======
import './Today.css'
import React, { Component } from 'react';
import Header_menu from '../../header/Header_menu';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image_net from '../../img/nutrient/pasta.png';
import image_net2 from '../../img/nutrient/cafe.png'

function TodayA() {
    const logoText = "오늘의 메뉴 A";

    const todatA = [
        { day: "목요일", date: "09월 21일", menulist: ["제육덮밥", "미역줄기나물", "닭강정", "파김치", "쌀밥"], img_net: image_net},
        { day: "금요일", date: "09월 22일" , menulist: ["소고기장터국밥", "사각어묵볶음", "숙주부추두부", "석박지", "흑미밥"], img_net: image_net2}
>>>>>>> d7adfa1b0febb31538603b389d62bd3b46c00127
    ]

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }; 

    return (
        <div className="menu-page">
            <Header_menu logoText={logoText} />
            <div id='gap'></div>
            <div className='menu-today'>
                <Slider>
                    {todatA.map((m,i) => (
                        <div className='menu-today-container'>
<<<<<<< HEAD
                            <div className='date'>
                                {m.day}
                                <div className='gapDate'></div>
                                {m.date}
                            </div>
                            <div className='menulist-today'>
                                <ul>
                                    {m.menulist.map((menuItem, index) => (
                                        <li key={index}>{menuItem}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className='menu-nutrient'></div>
=======
                            <Link to="/optionTodayA">
                                <div className='date'>
                                    {m.day}
                                    <div className='gapDate'></div>
                                    {m.date}
                                </div>
                                <div className='menulist-today'>
                                    <ul>
                                        {m.menulist.map((menuItem, index) => (
                                            <li key={index}>{menuItem}</li>
                                        ))}
                                    </ul>
                                </div>
                            </Link>
                            <div className='nutrient-img'>
                                <img src={image_net} alt='사진' width='340' height='215' />
                            </div>
>>>>>>> d7adfa1b0febb31538603b389d62bd3b46c00127
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default TodayA;