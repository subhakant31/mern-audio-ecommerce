import React from "react";
import "./CartControl.scss";

function CartControl() {
  return (
    <div className="product">
      <div className="product__control">
        <button className="product-minus">
          <img src="./assets/images/productminus.svg" alt="minus a product" />
        </button>

        <input
          type="number"
          className="numner-of-products"
          value="1"
          min="1"
          max="10"
        />
        <button className="product-plus">
          <img src="./assets/images/productadd.svg" alt="add a product" />
        </button>
      </div>

      <div className="product__delete">
        <button>
          <img src="./assets/images/delete.svg" alt="fdelete" />
        </button>
      </div>
    </div>
  );
}

export default CartControl;