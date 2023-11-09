import React from "react";
import "./CartControl.scss";

function CartControl() {
  return (
    <div className="controls">
      <button className="controls__minus">
        <img
          src="./assets/images/icons/productminus.svg"
          alt="minus a product"
        />
      </button>
      <span className="controls__number">1</span>

      <button className="controls__plus">
        <img src="./assets/images/icons/productadd.svg " alt="add a product" />
      </button>
    </div>
  );
}

export default CartControl;
