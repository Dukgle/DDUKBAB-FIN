import React, { useState } from 'react';

function QuantityCheck() {
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
        setQuantity(quantity - 1);
        }
    };

    return (
        <div>
        {/* 수량 */}
        <div className='quantityBox'>
            <div className='minus-button-div'>
                <button className='minus-button' onClick={handleDecrement}>-</button>
            </div>
            <div className='option-quantity-num'>
                <span>{quantity}</span>
            </div>
            <div className='plus-button-div'>
                <button className='plus-button' onClick={handleIncrement}>+</button>
            </div>
        </div>
        </div>
    );
}

export default QuantityCheck;
