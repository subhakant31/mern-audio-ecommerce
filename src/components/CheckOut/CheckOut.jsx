import React from "react";
import "./CheckOut.scss";

function CheckOut() {
  return (
    <>
    <div className="total-cart-items">
        <p className="total-cart-items__count">total <span>3</span> items</p>
        <p className="total-cart-items__cost">usd 200</p>
    </div>
     <div className="check-out">
      <button type="submit" className="check-out__button">
        proceed to checkout
      </button>

      <a href="" className="check-out__proceed-icon">
        <img src="./assets/images/icons/forwardarrow.svg" alt="proceed icon" />
      </a>
    </div>
    </>
   
  );
}
export default CheckOut;
