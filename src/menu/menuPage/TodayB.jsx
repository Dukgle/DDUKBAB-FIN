import './Today.css';
import React, { Component } from 'react';
import Header_menu from '../../header/Header_menu';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image_net from '../../img/nutrient/pasta.png';
import image_net2 from '../../img/nutrient/cafe.png'

function TodayB() {
    const logoText = "오늘의 메뉴 B";

    const todatB = [
        { day: "목요일", date: "10월 12일", menulist: ["고기듬뿍고추장찌개", "통통비엔나볶음", "진미채무침", "배추김치", "흑미밥"], img_net: image_net},
        { day: "금요일", date: "10월 13일" , menulist: ["밥도둑김치짜글이", "빅오징어핫바", "치커리사과무침", "깍두기", "흑미밥"], img_net: image_net2}
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
                    {todatB.map((m,i) => (
                        <div className='menu-today-container'>
                            <Link to="/optionTodayB">
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
                                <img src={image_net} class='today-nutrient-img' alt='사진' width='340' height='215' />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default TodayB;