import React from "react";
import "./AddToCartPage.scss";
import CartProceed from "../../components/CheckOut/CheckOut";
import ProductItem from "../../components/ShoppingProduct/ProductItem/ProductItem";
function AddToCartPage() {
  return (
    <div className="cartcontainer">
      <ProductItem></ProductItem>
      <CartProceed></CartProceed>
    </div>
  );
}

export default AddToCartPage;
