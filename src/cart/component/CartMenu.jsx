import React from 'react';
import './CartMenu.css';
import DeleteIcon from '../../icon/delete.png';

function CartMenu({ cart_menus }) {
    // 가게 이름을 기준으로 메뉴를 그룹화합니다.
    const groupedMenus = {};
    cart_menus.forEach((menu) => {
        if (!groupedMenus[menu.name]) {
            groupedMenus[menu.name] = [];
        }
        groupedMenus[menu.name].push(menu);
    });

    return (
        <div className='cart-menu'>
            {Object.keys(groupedMenus).length === 0 ? (
                <p>내가 담은 메뉴가 없습니다.</p>
            ) : (
                <div>
                    {Object.keys(groupedMenus).map((storeName) => (
                        <div key={storeName} className='store-info'>
                            <h2>{storeName}</h2>
                            <div className='menu-list'>
                                {groupedMenus[storeName].map((menu) => (
                                    <div key={menu.id} className='menu-item'>
                                        <div className='delete-button'>
                                            <img src={DeleteIcon} alt="deleteIcon" />
                                        </div>
                                        <div className='menu-item-wrap'>
                                            <div className='menu-item-img'>
                                                <img src={menu.image} alt='사진' width='80' height='70' />
                                            </div>
                                            <div className='menu-item-info'>
                                                <div className='cart-menu-name'>
                                                    {menu.menu}
                                                </div>
                                                <div className='cart-menu-number'>
                                                    {menu.num}
                                                </div>
                                                <div className='cart-menu-price'>
                                                    {menu.price}P
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default CartMenu;
