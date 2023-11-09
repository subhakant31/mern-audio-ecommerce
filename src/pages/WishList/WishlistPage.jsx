import React from "react";
import "./WishlistPage.scss";
import ProductItem from "../../components/ShoppingProduct/ProductItem/ProductItem";
import CartControl from "../../components/ShoppingProduct/CartQuantity/CartControl";
function WishlistPage() {
  const Productcard = ({ ProductItem, isWishlistPage }) => {
   isWishlistPage=false
  }
  return (
    <>
    <div className="cartcontainer">
      <ProductItem></ProductItem>
    </div>
    </>
  );
}

export default WishlistPage;
