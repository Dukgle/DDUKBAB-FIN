import React, { useState } from "react";

function QuantityCheck({ onAmountChange }) {
  const [amount, setAmount] = useState(1);

  const handleIncrement = () => {
    setAmount(amount + 1);
    onAmountChange(amount + 1); // 수량 변경 시 콜백 함수 호출
  };

  const handleDecrement = () => {
    if (amount > 1) {
      setAmount(amount - 1);
      onAmountChange(amount - 1); // 수량 변경 시 콜백 함수 호출
    }
  };

  return (
    <div>
      {/* 수량 */}
      <div className="quantityBox">
        <div className="quantityBox-btns">
          <div className="minus-button-div">
            <button className="minus-button" onClick={handleDecrement}>
              -
            </button>
          </div>
          <div className="option-quantity-num">
            <span>{amount}</span>
          </div>
          <div className="plus-button-div">
            <button className="plus-button" onClick={handleIncrement}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuantityCheck;
