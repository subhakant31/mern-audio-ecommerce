import React from "react";
import "./ProfileEdit.scss";
import profile from "../../images/profilepicture.svg";
import back from "../../icons/left-arrow.svg";
import { Link } from "react-router-dom";

function ProfileEdit() {
  return (
    <>
      <div className="settings">
        <div className="settings__menu">
          <Link to="/home" className="backwards">
            <img src={back} alt="back arrow" />
          </Link>
          <p>profile</p>
          <span></span>
        </div>
        <div className="settings__profile">
          <img
            src={profile}
            alt="profile picture"
            className="profile-picture"
          />
          <div className="settings__profile__data">
            <p className="settings__profile__data__name">name</p>
            <p className="settings__profile__data__email">email</p>
          </div>
        </div>
        <div className="settings__edit">
          <span>general</span>
          <ul className="general-settings">
            <li>
              <a href="">edit profile</a>
              <a href="">notifications</a>
              <a href="">wishlist</a>
            </li>
          </ul>
          <span>legal</span>
          <ul className="legal-settings">
            <li>
              <a href="">terms of use</a>
              <a href="">privacy policy</a>
            </li>
          </ul>
          <span>personal</span>
          <ul className="personal-settings">
            <li>
              <a href="">report a bug</a>
              <a href="">logout</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default ProfileEdit;
