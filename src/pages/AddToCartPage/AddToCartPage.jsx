import React from "react";
import CartQuantity from "../../components/Cart/CartQuantity/CartControl";
import CartItem from "../../components/Cart/CartBag/CartItem";
import "./AddToCartPage.scss";

function AddToCartPage() {
  return (
    <>
      <CartItem></CartItem>
      <CartQuantity></CartQuantity>
    </>
  );
}
