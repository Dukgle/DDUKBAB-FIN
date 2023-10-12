import '../MenuPage.css';
import React, { useState, useEffect } from 'react';
import Header_menu from '../../header/Header_menu';
import { Link, useParams } from 'react-router-dom';
import QuantityCheck from '../optionCheck/QuantityCheck';
import axiosInstance from '../../api';
import image from '../../img/masung/버터장조림덮밥.jpg';
import image_net from '../../img/nutrient/masung.png';
import BookmarkButton from '../bookmark/Bookmark';
// import Chart from '../Chart';

function Butter() {
    const logoText = "마성떡볶이";

    const menuName = "버터장조림덮밥"
    const [amount, setAmount] = useState(1);


    const shoppingPost = async (e) => {
        try {

            // 이름과 수량을 사용하여 POST 요청을 보냅니다.
            const response = await axiosInstance.post('users/shopping/order-select', {
                menu_name: menuName,
                amount: amount,
            });
            console.log('장바구니 추가 성공', response.data);

    } catch (error) {
        console.error('장바구니 추가 오류:', error.response.data.error);
    }
    };

    return (
        <div className="menu-imform">
            <Header_menu logoText={logoText} />
            <div id='gap'></div>
            <div className='bookmarkIcon'>
                <BookmarkButton />
            </div>
            <Link to="/optionMasung">
                <div className='menu-inform-wrap'>
                    <div className='menu-img'>
                        <img src={image} alt='사진' width='130' height='110' />
                    </div>
                    <div className='infrom-text'>
                        <div className='menu-name'>
                            버터장조림덮밥
                        </div>
                        <div className='menu-price'>
                            5,000원
                        </div>
                    </div>
                </div>
            </Link>
            <div className='nutrient-img'>
                <img src={image_net} alt='사진' width='340' height='215' />
            </div>
            <div className='option-quantity'>
                <QuantityCheck onAmountChange={setAmount}/>
            </div>
            <div className="option-quantity-bottom-gap"></div>
            <div className='option-cart-button-wrap'>
                <Link to="/cart">
                    <button className='option-cart-button' onClick={shoppingPost}>
                        장바구니에 담기
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Butter;