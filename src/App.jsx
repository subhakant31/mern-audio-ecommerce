import React from "react";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import Homemenubar from "./components/Menu/HomeMenu";
import ProductDes from './pages/ProductDescriptionPage/ProductDescriptionPage';
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import CartPage from "./pages/AddToCartPage/AddToCartPage";
import WishlistPage from "./pages/WishList/WishlistPage";
import "./App.scss";

function App(props) {
  return (
    <React.Fragment>
      <SignInPage></SignInPage>
      <SignUpPage></SignUpPage>
      <Homemenubar></Homemenubar>
      <ProductDes></ProductDes>
      <ProfilePage></ProfilePage>
      <CartPage></CartPage>
      <WishlistPage></WishlistPage>
    </React.Fragment>
  );
import React, { useState } from "react";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import Homemenubar from "./components/Menu/HomeMenu";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import CartPage from "./pages/AddToCartPage/AddToCartPage";
import WishlistPage from "./pages/WishList/WishlistPage";
import "./App.scss";
import FilterPage from "./components/Filter/FilterPage/FilterPage";

function App(props) {
  // IMPORTANT: This code is responsible for filter popup
  // Dont remove  just comment out this
  const [open, setOpen] = useState(false);

  // Function to open and close the popup
  function show(ev) {
    setOpen(!open);
  }

  return (
    <React.Fragment>
      <button onClick={show}>Show filter</button>
      <FilterPage open={open} setOpen={setOpen} />
    </React.Fragment>
  );
}
export default App;
