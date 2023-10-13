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
        { day: "목요일", date: "10월 12일", menulist: ["생크림로제찜닭", "춘권*야채튀김", "양파오이무침", "배추김치", "흑미밥"], img_net: image_net},
        { day: "금요일", date: "10월 13일" , menulist: ["통통새우볶음밥", "콩나물비빔라면", "미니돈까스", "깍두기", "유부장국"], img_net: image_net2}
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
                                <img src={image_net} class='today-nutrient-img' alt='사진' />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default TodayA;