import React from 'react';
import './Cart_Bookmark.css';
import BookmarkButton from '../../menu/bookmark/Bookmark';

function Cart_Bookmark({ bookmark_menus }) {
    const groupedMenus = {};
    bookmark_menus.forEach((menu) => {
        if (!groupedMenus[menu.store_name]) { // store_name을 기준으로 그룹화
            groupedMenus[menu.store_name] = [];
        }
        groupedMenus[menu.store_name].push(menu);
    });

    return (
        <div className='cart-menu'>
            {Object.keys(groupedMenus).length === 0 ? (
                <p>내가 담은 메뉴가 없습니다.</p>
            ) : (
                <div>
                    {Object.keys(groupedMenus).map((store_name) => (
                        <div key={store_name} className='store-info'>
                            <h2>{store_name}</h2>
                            <div className='menu-list'>
                                {groupedMenus[store_name].map((menu) => (
    
                                    <div key={menu.menu_id} className='bookmark-item'>
                                        <div className='cart-bookmarkIcon'>
                                            <BookmarkButton menu_name={menu.menu_name}/>
                                        </div>
                                        <div className='bookmark-item-wrap'>
                                            <div className='bookmark-menu-name'>
                                                {menu.menu_name}
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

export default Cart_Bookmark;
