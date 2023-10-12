import React, { useState, useEffect } from 'react';
import axiosInstance from '../../api';
import './CartMenu.css';
import DeleteIcon from '../../icon/delete.png';

function CartMenu({ cart_menus }) {
    // 가게 이름을 기준으로 메뉴를 그룹화합니다.
    const [groupedMenus, setGroupedMenus] = useState({});
    
    useEffect(() => {
        // API를 호출하여 데이터를 가져옵니다.
        axiosInstance.get('/users/shopping/order-get') // API 엔드포인트를 적절하게 변경해야 합니다.
            .then((response) => {
                const data = response.data;
                const shoppingArray = data.shopping.map((shop) => ({
                    id: shop.id,
                    menu_name: shop.menu_name,
                    store_name: shop.store_name,
                    num: shop.amount,
                    total_price: shop.total_price,
                }));
                setGroupedMenus(groupByStoreName(shoppingArray));
            })
            .catch((error) => {
                console.error('데이터를 가져오는 중 오류가 발생했습니다:', error);
            });
    }, []);

    const handleDelete = (id) => {
        // 항목 삭제 요청을 보내고 성공한 경우 상태(state)에서 해당 항목을 제거
        axiosInstance.delete(`/users/shopping/order-delete/${id}`)
            .then((response) => {
                console.log('장바구니 삭제 성공', response.data);
                removeItemFromState(id);
            })
            .catch((error) => {
                console.error('장바구니 삭제 오류', error.response.data);
            });
    };
    
    const removeItemFromState = (id) => {
        // 삭제한 항목을 state에서 제거
        const updatedGroupedMenus = { ...groupedMenus };
        for (const store_name in updatedGroupedMenus) {
            updatedGroupedMenus[store_name] = updatedGroupedMenus[store_name].filter((menu) => menu.id !== id);
            // 삭제 후, 해당 store_name에 대한 메뉴가 더 이상 없으면 해당 store_name 제거
            if (updatedGroupedMenus[store_name].length === 0) {
                delete updatedGroupedMenus[store_name];
            }
        }
        setGroupedMenus(updatedGroupedMenus);
    };

    // 메뉴를 가게 이름을 기준으로 그룹화하는 함수
    function groupByStoreName(shoppingArray) {
        const grouped = {};
        shoppingArray.forEach((menu) => {
            if (!grouped[menu.store_name]) {
                grouped[menu.store_name] = [];
            }
            grouped[menu.store_name].push(menu);
        });
        return grouped;
    }

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
                                    <div key={menu.id} className='menu-item'>
                                        <div className='delete-button' onClick={() => handleDelete(menu.id)}>
                                            <img src={DeleteIcon} alt="deleteIcon" />
                                        </div>
                                        <div className='menu-item-wrap'>
                                            {/* <div className='menu-item-img'>
                                    
                                                <img src={'4분돼지김치파스타.jpg'} alt='사진' width='80' height='70' />
                                            </div> */}
                                            <div className='menu-item-info'>
                                                <div className='cart-menu-name'>
                                                    {/* 메뉴 이름 */}
                                                    {menu.menu_name}
                                                </div>
                                                <div className='cart-menu-number'>
                                                    {/* 수량 */}
                                                    {menu.num}
                                                </div>
                                                <div className='cart-menu-price'>
                                                    {/* 가격 */}
                                                    {menu.total_price}P
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
