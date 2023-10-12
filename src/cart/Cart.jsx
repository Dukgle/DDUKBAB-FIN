import './Cart.css'
import React,{useState} from 'react';
import Header from '../header/Header';
import { Link } from 'react-router-dom';
import PayModal from './PayModal'; // PayModal 컴포넌트 import
import CartMenu from './component/CartMenu';
import axiosInstance from '../api';
import image_masung from '../img/masung/떡볶이.png';
import image_alone from '../img/masung/혼족세트.png';
import image_icetea from '../img/cafe/복숭아아이스티.jpg';

function Cart() {
    const logoText = "장바구니";

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [cartData, setCartData] = useState({}); 
    const bottonStyle = {
        background: "#FCCB6F",
    };

    // 메뉴 정보를 저장할 배열
    // const cart_menus = [
    //     { id: 1, name: "마성떡볶이", menu: "혼족세트", num: 1, price: 6500, image: image_masung },
    //     { id: 2, name: "마성떡볶이", menu: "마성떡볶이",num: 1, price: 4500, image: image_alone},
    //     { id: 3, name: "샌드위치 카페", menu: "아이스티",num: 1, price: 3500, image: image_icetea}
    // ];

        // 모달 창 열기 함수
        const openModal = () => {
            setIsModalOpen(true);
        };
    
        // 모달 창 닫기 함수
        const closeModal = () => {
            setIsModalOpen(false);
        };

        
  const getTotal = async () => {
    try {
      const response = await axiosInstance.get('/users/shopping/order-check'); // API 엔드포인트를 적절하게 수정
      console.log(response.data);
    } catch (error) {
      console.error('사용자 정보 가져오기 오류', error.response.data);
      // 오류 처리
      // 예: 실패 메시지 표시
    }
  };

  
  const pointUpdate = async (e) => {
    try {
      const response = await axiosInstance.delete('/user/point-update');

      console.log('자리 예약 반납 성공', response.data);
      // 닉네임 변경 성공 후 다른 작업 수행
      // 예: 성공 메시지 표시, 리다이렉트 등
    } catch (error) {
      console.error('자리 예약 반납 오류', error.response.data);
      // 오류 처리
      // 예: 실패 메시지 표시
    }
  };

    return (
        <div className="cart-page">
            <Header logoText={logoText} />
            <Link to='/cart'>
                <button className='cart-page-button' style={bottonStyle}>내가 담은 장바구니</button>
            </Link>
            <Link to='/bookmark'>
                <button className='bookmark-page-button'>즐겨찾는 메뉴</button>
            </Link>

            {/* CartMenu 컴포넌트를 렌더링합니다. */}
            <CartMenu />

            <div className='order-button-div'>
                <button
                className='order-button'
                onClick={() => {
                    getTotal(); // 주문 버튼 클릭 시 getTotal 함수 실
                    pointUpdate();
                    openModal(); // 모달 열기
                }}
                >
                <p>주문하기</p>
                </button>
            </div>
            <PayModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
            />
        </div>

        
    );
}

export default Cart;
