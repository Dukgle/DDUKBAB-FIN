import './Cart.css'
import React, { useState, useEffect } from 'react';
import Header from '../header/Header';
import PayModal from './PayModal'; // PayModal 컴포넌트 import
import { Link, useParams, useLocation } from 'react-router-dom';
import image_masung from '../img/masung/떡볶이.png';
import image_alone from '../img/masung/혼족세트.png';
import image_icetea from '../img/cafe/복숭아아이스티.jpg';

function CartOrder() {
    const logoText = "장바구니";
    const {menu_name, price} = useParams();

    const bottonStyle = {
        background: "#FCCB6F",
    };

    const cart_menus = [
        { id: 1, name: "마성떡볶이", menu: "혼족세트", num: 1, price: 6500, image: image_masung },
        { id: 2, name: "마성떡볶이", menu: "마성떡볶이", num: 1, price: 4500, image: image_alone },
        { id: 3, name: "샌드위치 카페", menu: "아이스티", num: 1, price: 3500, image: image_icetea }
    ];

    // 아이템 가격의 합을 저장할 상태 변수
    const [totalPrice, setTotalPrice] = useState(0);

    // 모달 창 표시 여부를 저장할 상태 변수
    const [isModalOpen, setIsModalOpen] = useState(false);

    // 모달 창 열기 함수
    const openModal = () => {
        setIsModalOpen(true);
    };

    // 모달 창 닫기 함수
    const closeModal = () => {
        setIsModalOpen(false);
    };

    // 컴포넌트가 렌더링될 때 totalPrice를 계산
    // useEffect(() => {
    //     const newTotalPrice = cart_menus.reduce((sum, item) => sum + parseInt(item.price), 0);
    //     setTotalPrice(newTotalPrice);
    // }, []);

    return (
        <div className="cart-page">
            <Header logoText={logoText} />
            <div className='cart-order'>
                <h3>주문하시겠습니까?</h3>
            </div>
            <div className='cart-order-semiTitle'>
                <h3>주문내역</h3>
            </div>
            <div className='cart-order-list'>
                {cart_menus.map((item, index) => (
                    <div key={item.id} className='cart-order-item'>
                        <div className='cart-item-number'>{index + 1}.</div> {/* 아이템 번호 */}
                        <div className='cart-item-info'>
                            <div className='cart-item-name'>{menu_name}&gt;</div>
                            <div className='cart-item-price'>{price}</div>
                        </div>
                    </div>
                ))}
            </div>
            {/* 총합 출력 부분 */}
            <div className="cart-total">
                <h3>총 금액: {totalPrice.toLocaleString()} P</h3>
            </div>

            {/* '결제하기' 버튼을 클릭하면 모달 창을 열도록 설정 */}
            <button className='pay-button' onClick={openModal}>결제하기</button>

            {/* 모달 창 */}
            <PayModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
            />
        </div>
    );
}

export default CartOrder;