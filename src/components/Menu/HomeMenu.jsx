import React from "react";
import './HomeMenu.scss';
import profile from "../../images/profilepicture.svg";
import hamberger from "../../icons/hambeger.svg";
import logo from "../../icons/logo.svg";
import { Link, NavLink } from "react-router-dom";

function HomeMenu() {
  return (
    <header>
      <div className="menu">
        <a href="" className="menu__filter">
          <img src={hamberger} alt="filter icon" />
        </a>

        <a href="" className="menu__brand">
          <img src={logo} alt="brand logo" />
          <h3>audio</h3>
        </a>

        <Link to="/profile" className="menu__profile">
          <img src={profile} alt="profile picture" />
        </Link>
      </div>
    </header>
  );
}
export default HomeMenu;
