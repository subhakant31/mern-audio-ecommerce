import React from "react";
import "./ProductItem.scss";
function ProductItem() {
  return (
    <div className="product-deatils">
      <a href="" className="product-deatils__image">
        <img
          src="./assets/images/productImages/productimage1.png"
          alt="headset"
        />
      </a>

      <div className="product-deatils__data">
        <h3>TMA-2 HD Wireless</h3>
        <h4>USD 350</h4>
      </div>
    </div>
  );
}

export default ProductItem;
