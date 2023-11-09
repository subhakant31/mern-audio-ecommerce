import React from "react";
import "./ProductItem.scss"; 
import CartControl from "../CartQuantity/CartControl";
import ProductDelete from "../ProductDelete/ProductDelete";

function ProductItem() {
  return (
    <div className="product-bag-details">
      <a href="" className="product-bag-details__image">
        <img
          src="./assets/images/productImages/productimage1.png"
          alt="headset"
        />
      </a>

      <div className="product-bag-details__data">
        <div className="product-bag-details__data__title">
          <span className="product-bag-name">TMA-2 HD Wireless</span>
          <span className="product-bag-cost">USD 350</span>
        </div> 
        <div className="product-bag-details__data__controls">
          <CartControl></CartControl>
          <ProductDelete></ProductDelete>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
