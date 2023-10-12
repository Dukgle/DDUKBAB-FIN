import '../MenuPage.css';
import React, { useState, useEffect } from 'react';
import Header_menu from '../../header/Header_menu';
import { Link, useParams } from 'react-router-dom';
import QuantityCheck from '../optionCheck/QuantityCheck';
import axiosInstance from '../../api';
import image from '../../img/masung/참치김밥.jpg';
import image_net from '../../img/nutrient/masung2.png';
import BookmarkButton from '../bookmark/Bookmark';
// import Chart from '../Chart';

function Kimbab_tuna() {
    const logoText = "마성떡볶이";

    const menuName = "참치김밥";
    const [amount, setAmount] = useState(1);
    const shoppingPost = async () => {
        try {

                // 이름과 수량을 사용하여 POST 요청을 보냅니다.
                const response = await axiosInstance.post('users/shopping/order-select', {
                    menu_name: menuName,
                    amount: amount,
                });
                console.log('장바구니 추가 성공', response.data);
        } catch (error) {
            console.error('장바구니 처리 오류:', error.response.data.error);
        }
    };

    return (
        <div className="menu-imform">
            <Header_menu logoText={logoText} />
            <div id='gap'></div>
            <div className='bookmarkIcon'>
                <BookmarkButton />
            </div>
            <div className='menu-inform-wrap'>
                <div className='menu-img'>
                    <img src={image} alt='사진' class='menu-menu-img' width='130' height='110' />
                </div>
                <div className='infrom-text'>
                    <div className='menu-name'>
                        참치김밥
                    </div>
                    <div className='menu-price'>
                        3,500원
                    </div>
                </div>
            </div>
            <div className='nutrient-img'>
                <img src={image_net} alt='사진' class='today-nutrient-img' width='340' height='215' />
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

export default Kimbab_tuna;