import './Option.css';
import React from 'react';
import Header_option from '../../header/Header_option';
import { Link } from 'react-router-dom';
import CheckBox from '../optionCheck/CheckBox';
import QuantityCheck from '../optionCheck/QuantityCheck';

function OptionTodayB() {
    const logoText = "오늘의 메뉴 B";

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
                <QuantityCheck />
            </div>
            <div className='option-cart-button-wrap'>
                <Link to="/cart">
                    <button className='option-cart-button'>
                        장바구니에 담기
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default OptionTodayB;
