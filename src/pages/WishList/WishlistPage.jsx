import React from "react";
import "./WishlistPage.scss";
import ProductItem from "../../components/ShoppingProduct/ProductItem/ProductItem";
import Addtobag from '../../components/AddtoCart/AddtoBagButton'
function WishlistPage() {
  // const Productcard = ({ ProductItem, isWishlistPage }) => {
 
  //     <Productcard {...<ProductItem/>} isWishlistPage={true}></Productcard>
 
  // }
  return (
    <>
    <div className="wishlist-item-container">
      <ProductItem></ProductItem>
      {/* {isWishlistPage ? <></> :<CartControl/>} */}
      <Addtobag></Addtobag>

    </div>
    </>
  );
}

export default WishlistPage;
