import React from 'react';
import './CartMenu.css';
import DeleteIcon from '../../icon/delete.png';

function CartMenu({ cart_menus }) {
    // 가게 이름을 기준으로 메뉴를 그룹화합니다.
    const [shopMenus, setShopMenus] = useState([]);
    const groupedMenus = {};
    cart_menus.forEach((menu) => {
        if (!groupedMenus[menu.store_name]) {
            groupedMenus[menu.store_name] = [];
        }
        groupedMenus[menu.name].push(menu);
    });

    
    useEffect(() => {
        // API를 호출하여 데이터를 가져옵니다.
        axiosInstance.get('/users/shopping/order-get') // API 엔드포인트를 적절하게 변경해야 합니다.
          .then((response) => {
            const data = response.data;
            const shoppingArray = data.shopping.map((shop) => ({
              menu_name: shop.menu_name,
              store_name: shop.store_name,
              num: shop.amount,
              price: shop.price
            }));
            setShopMenus(shoppingArray);
          })
          .catch((error) => {
            console.error('데이터를 가져오는 중 오류가 발생했습니다:', error);
          });
    }, []);


    return (
        <div className='cart-menu'>
            {Object.keys(shopMenus).length === 0 ? (
                <p>내가 담은 메뉴가 없습니다.</p>
            ) : (
                <div>
                    {Object.keys(groupedMenus).map((store_name) => (
                        <div key={store_name} className='store-info'>
                            <h2>{store_name}</h2>
                            <div className='menu-list'>
                                {groupedMenus[store_name].map((menu) => (
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
                                                    {menu.menu_name}
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
