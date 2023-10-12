import React, { useState } from 'react';

function QuantityCheck() {
    const [amount, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity(amount + 1);
    };

    const handleDecrement = () => {
        if (amount > 1) {
        setQuantity(amount - 1);
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
                <span>{amount}</span>
            </div>
            <div className='plus-button-div'>
                <button className='plus-button' onClick={handleIncrement}>+</button>
            </div>
        </div>
        </div>
    );
}

export default QuantityCheck;
