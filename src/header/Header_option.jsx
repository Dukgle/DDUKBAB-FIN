import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import CartIcon from '../icon/icon-shopping-cart.png';
import ListIcon from '../icon/icon-ui.png';

import Cart from '../cart/Cart';
import Qr from './Qr';
import Dropdown from './Dropdown';

function Header_option({ logoText}) {
    const [isDropdownView, setDropdownView] = useState(false);

    const handleClickContainer = () => {
        setDropdownView(!isDropdownView);
    };

    const handleBlurContainer = () => {
        setTimeout(() => {
            setDropdownView(false);
        }, 200);
    };

    return (
        <header>
            <div className='back'>
                <Link to={`/${logoText}`}>
                    <button className='back-button'>{logoText}&gt;</button>
                </Link>
            </div>
            <div className='nickname' id='menu_nickname'>닉네임</div>
            <div className="logo">{logoText}</div>
            <div className='icon-wrap'>
                <div className='icon'>
                    <div className='cart'>
                        <div className='cart-button'>
                            <Link to="/cart">
                                <img src={CartIcon} alt="Cart" />
                            </Link>
                        </div>
                    </div>
                    <div className='qr'>
                        <Qr />
                    </div>
                    <div className='list' onBlur={handleBlurContainer}>
                        <button className="list-button" onClick={handleClickContainer}>
                            <img src={ListIcon} alt="List" />
                            {isDropdownView && <Dropdown />}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header_option;
