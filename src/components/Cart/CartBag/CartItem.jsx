import React from "react";
import "./CartItem.scss";
function CartItem() {
  return (
    <div className="cartcontainer">
      <a href="">
        <img
          src="./assets/images/productImages/productimage1.png"
          alt="headset"
        />
      </a>

      <div className="cartcontainer__details">
        <h3>TMA-2 HD Wireless</h3>
        <h4>USD 350</h4>
      </div>
    </div>
  );
}

export default CartItem;
