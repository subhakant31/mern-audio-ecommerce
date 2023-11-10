import React from "react";
import "./CartControl.scss";

function CartControl() {
  return (
    <div className="controls">
      <a href="" className="controls__minus">
        <img
          src="./assets/images/icons/productminus.svg"
          alt="minus a product"
        />
      </a>
      <span className="controls__number">1</span>

      <a href="" className="controls__plus">
        <img src="./assets/images/icons/productadd.svg " alt="add a product" />
      </a>
    </div>
  );
}

export default CartControl;
