import React from "react";
import "./WishlistPage.scss";
import ProductItem from "../../components/ShoppingProduct/ProductItem/ProductItem";
import ProductActionButton from "../../components/ProductActionButton/ProductActionButton";

function WishlistPage() {

  return (
    
    <div className="wishlist-item-container">
      <ProductItem></ProductItem>
      <ProductActionButton
        title="add to cart"
        ariaLabelText="add this item to cart"
        buttonText="add to cart"
      />

    </div>
    
  );
}

export default WishlistPage;
