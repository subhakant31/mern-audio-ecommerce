import React from "react";
import ProfileSetting from "./components/Profile/ProfileEdit";
import Homemenubar from "./components/Menu/HomeMenu";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import ProductDescriptionPage from "./pages/ProductDescriptionPage/ProductDescriptionPage";
function App(props) {
  return (
    <React.Fragment>
      <ProductDescriptionPage></ProductDescriptionPage>
    </React.Fragment>
  );
}

export default App;
