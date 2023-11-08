import React from "react";
import "./CartControl.scss";

function CartControl() {
  return (
    <div className="controls">
      <div className="controls__quantity">
        <a href="" className="controls__quantity__minus">
          <img
            src="./assets/images/icons/productminus.svg"
            alt="minus a product"
          />
        </a>

        <p>1</p>

        <a href="" className="controls__quantity__plus">
          <img
            src="./assets/images/icons/productadd.svg "
            alt="add a product"
          />
        </a>
      </div>

      <div className="controls__delete">
        <a href="">
          <img src="./assets/images/icons/delete.svg " alt="delete" />
        </a>
      </div>
    </div>
  );
}

export default CartControl;
