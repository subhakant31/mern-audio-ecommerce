import React from "react";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import Homemenubar from "./components/Menu/HomeMenu";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
<<<<<<< HEAD
import ProductDescriptionPage from "./pages/ProductDescriptionPage/ProductDescriptionPage";
import HomePage from "./pages/HomePage/HomePage";
=======
import CartPage from "./pages/AddToCartPage/AddToCartPage"; 
import WishlistPage from "./pages/WishList/WishlistPage";
>>>>>>> 5c1282fef00168dc242ee92838ce4d3d2cb66187
import "./App.scss";

function App(props) {
  return (
    <React.Fragment>
      <Homemenubar></Homemenubar> 
      <CartPage></CartPage>
      <WishlistPage></WishlistPage>
    </React.Fragment>
  );
export default App;
