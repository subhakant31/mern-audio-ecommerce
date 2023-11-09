import React from "react";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import Homemenubar from "./components/Menu/HomeMenu";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import CartPage from "./pages/AddToCartPage/AddToCartPage"; 
import WishlistPage from "./pages/WishList/WishlistPage";
import "./App.scss";

function App(props) {
  return (
    <React.Fragment>
      <Homemenubar></Homemenubar> 
      <CartPage></CartPage>
      <WishlistPage></WishlistPage> 
    </React.Fragment>
  );
}

export default App;
