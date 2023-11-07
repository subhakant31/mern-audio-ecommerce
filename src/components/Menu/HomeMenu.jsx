import React from "react";
import './HomeMenu.scss'; 
import { Link, NavLink } from "react-router-dom";

function HomeMenu() {
  return (
    <header>
      <div className="menu">
        <a href="" className="menu__filter">
          <img src="./asserts/icons/hambeger.svg" alt="filter icon" />
        </a>

        <a href="" className="menu__brand">
          <img src="./asserts/icons/logo.svg" alt="brand logo" />
          <h3>audio</h3>
        </a>

        <Link to="/profile" className="menu__profile">
          <img src="./asserts/images/profilepicture.svg" alt="profile picture" />
        </Link>
      </div>
    </header>
  );
}
export default HomeMenu;
