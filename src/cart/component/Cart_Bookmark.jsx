import React from 'react';
import './Cart_Bookmark.css';
import BookmarkButton from '../../menu/bookmark/Bookmark';

function Cart_Bookmark({ bookmark_menus }) {
    // 가게 이름을 기준으로 메뉴를 그룹화합니다.
    const groupedMenus = {};
    bookmark_menus.forEach((menu) => {
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
                                    <div key={menu.id} className='bookmark-item'>
                                        <div className='cart-bookmarkIcon'>
                                            <BookmarkButton />
                                        </div>
                                        <div className='bookmark-item-wrap'>
                                            <div className='bookmark-item-img'>
                                                <img src={menu.image} alt='사진' width='70' height='50' />
                                            </div>
                                            <div className='bookmark-menu-name'>
                                                {menu.menu}
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
