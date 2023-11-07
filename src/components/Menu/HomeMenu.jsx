import React from "react";
import "./HomeMenu.scss";
import { Link } from "react-router-dom";

function HomeMenu() {
  return (
    <header>
      <div className="menu">
        <a href="" className="menu__filter">
          <img src="./asserts/icons/hambeger.svg" alt="filter icon" />
        </a>

        <a href="" className="menu__brand">
          <img src="./asserts/icons/logo.svg" alt="brand logo" />
          <h3 className="menu__brand__name">audio</h3>
        </a>

        <a href="" className="menu__profile">
          <img
            src="./asserts/images/profilepicture.svg"
            alt="profile picture"
          />
        </a>
      </div>
    </header>
  );
}
export default HomeMenu;
