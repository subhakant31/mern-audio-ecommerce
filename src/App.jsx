import React from "react";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import Homemenubar from "./components/Menu/HomeMenu";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ProductDescriptionPage from "./pages/ProductDescriptionPage/ProductDescriptionPage";
import "./App.scss";

function App(props) {
  return (
    <React.Fragment>
      <ProductDescriptionPage></ProductDescriptionPage>
    </React.Fragment>
  );
}

export default App;
