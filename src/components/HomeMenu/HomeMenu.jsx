import React from "react";
import "./HomeMenu.scss";

function HomeMenu() {
  return (
    <div className="home-menu">
      <a href="" className="home-menu__filter"  aria-label="go to filters" >
        <img src="./assets/images/icons/hambeger.svg" alt="filter icon" />
      </a>

      <a href="" className="home-menu__brand"  aria-label="home page">
        <img src="./assets/images/icons/logo.svg" alt="brand logo" />
        <h3 className="home-menu__brand__name">audio</h3>
      </a>

      <a href="" className="home-menu__profile"  aria-label="got to profile settings page">
        <img src="./assets/images/userImage.png" alt="profile picture" />
      </a>
    </div>
  );
}
export default HomeMenu;
