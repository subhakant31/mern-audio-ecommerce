import React from "react";
import "./ProductItem.scss"; 
import CartControl from "../CartQuantity/CartControl";
import ProductDelete from "../ProductDelete/ProductDelete";

function ProductItem() {
  return (
    <div className="product-cart-details">
      <a href="" className="product-cart-details__image"  aria-label="cart item image">
        <img
          src="./assets/images/productImages/productimage1.png"
          alt="headset"
        />
      </a>

      <div className="product-cart-details__data">
        <div className="product-cart-details__data__title">
          <span className="product-cart-name">TMA-2 HD Wireless</span>
          <span className="product-cart-cost">USD 350</span>
        </div> 
        <div className="product-cart-details__data__controls">
          <CartControl></CartControl>
          <ProductDelete></ProductDelete>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
