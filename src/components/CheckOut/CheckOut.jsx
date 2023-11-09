import React from "react";
import "./CheckOut.scss";

function CheckOut() {
  return (
    <>
    <div className="total-cart-items">
        <span className="total-cart-items__count">total <span>3</span> items</span>
        <span className="total-cart-items__cost">usd 200</span>
    </div>
     <div className="check-out">
      <a href="" type="submit" className="check-out__button">
        proceed to checkout
      </a>

      <a href="" className="check-out__proceed-icon">
        <img src="./assets/images/icons/forwardarrow.svg" alt="proceed icon" />
      </a>
    </div>
    </>
   
  );
}
export default CheckOut;
