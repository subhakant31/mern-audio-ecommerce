import React from "react";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import Homemenubar from "./components/Menu/HomeMenu";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import CartPage from "./pages/AddToCartPage/AddToCartPage";

import "./App.scss";

function App(props) {
  return (
    <React.Fragment>
      <CartPage></CartPage>
    </React.Fragment>
  );
}

export default App;
