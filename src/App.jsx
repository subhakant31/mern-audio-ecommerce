import React from "react";
import "./App.scss"; 
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage  from "./pages/ProfilePage/ProfilePage"; 
import WishlistPage from "./pages/WishList/WishlistPage";
import AddToCartPage from "./pages/AddToCartPage/AddToCartPage";
function App() {
  return (
    <React.Fragment>  
    <AddToCartPage/>
    </React.Fragment>
  );
}
export default App;
