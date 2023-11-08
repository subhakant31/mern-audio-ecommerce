import React from "react";
import "./AddToCartPage.scss";
import ProductItem from "../../components/ShoppingProduct/ProductItem/ProductItem";
import Cartcontrol from '../../components/ShoppingProduct/CartQuantity/CartControl'
function AddToCartPage() {
  return (
    
      <div className="cartcontianer">
       <ProductItem></ProductItem>
       <Cartcontrol></Cartcontrol>
      </div>
  );
}

export default AddToCartPage;