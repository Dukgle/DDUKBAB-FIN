import './Option.css';
import React, { useState } from 'react';
import Header_option from '../../header/Header_option';
import { Link, useParams } from 'react-router-dom';
import CheckBox from '../optionCheck/CheckBox';
import QuantityCheck from '../optionCheck/QuantityCheck';
import axiosInstance from '../../api';

function OptionMasung() {
    const logoText = "마성떡볶이";

    const  {name} = useParams();
    
    const [amount, setAmount] = useState(1);

    const shoppingPost = async (e) => {
        try {
          const response = await axiosInstance.post(`users/shopping/order-select?menu_name=${name}`, {
            menu_name:name,
            amount:amount
          });
          console.log(name, amount)
        } catch (error) {
          console.error('장바구니 처리 오류', error.response.data.error);
        }
      };

    return (
        <div className='option-page'>
            <Header_option logoText={logoText} />
            <div id='gap'></div>
            <div className='option-container'>
                <div className='option-wrap'>
                    <h3>추가옵션</h3>
                    <div className='checkBox-wrap'>
                        <CheckBox />
                    </div>
                    <div className='option-item'>
                        <p>밥 추가</p>
                        <p id='option-price'>+1,000원</p>
                    </div>
                </div>
            </div>
            <div className='option-gap'></div>
            <div className='option-quantity'>
                <QuantityCheck amount={amount} setAmount={setAmount}/>
            </div>
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

export default OptionMasung;
