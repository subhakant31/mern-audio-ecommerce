import React from "react";
import "./AddToCartPage.scss";
import CartTotalCost from "../../components/CartTotalCost/CartTotalCost";
import CheckoutCart from '../../components/ProductActionButtonWithArrow/ProductActionButtonWithArrow';
import ProductItem from "../../components/ShoppingProduct/ProductItem/ProductItem";
function AddToCartPage() {
  return (
    <div className="cart-container">
      <ProductItem></ProductItem>
      <CartTotalCost></CartTotalCost>
      <CheckoutCart
        title="checkout button"
        ariaLabelText="add this item to cart"
        buttonText="proceed to checkout"
      />
    </div>
  );
}

export default AddToCartPage;
