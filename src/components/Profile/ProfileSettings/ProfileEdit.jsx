import React from "react";
import "./ProfileEdit.scss"; 

function ProfileEdit() {
  return (
    <>
      <div className="settings">
        <div className="settings__column">
          <h3 className="settings__column__title">general</h3>
          <ul className="settings-list">
            <li className="settings-list__item">
              <a href=""className="settings-list__link">edit profile</a>
            </li>
            <li className="settings-list__item">
              <a href="" className="settings-list__link">notifications</a>
            </li>
            <li className="settings-list__item">
              <a href="" className="settings-list__link">wishlist</a>
            </li>
          </ul>
        </div>
        <div className="settings__column">
          <h3 className="settings__column__title">legal</h3>
          <ul  className="settings-list">
            <li className="settings-list__item">
              <a href="" className="settings-list__link">terms of use</a>
            </li>
            <li className="settings-list__item">
              <a href="" className="settings-list__link">privacy policy</a>
            </li>
          </ul>
        </div>
        <div className="settings__column">
          <h3 className="settings__column__title">personal</h3>
          <ul  className="settings-list">
            <li className="settings-list__item">
              <a href="" className="settings-list__link">report a bug</a>
            </li>
            <li className="settings-list__item">
              <a href="" className="settings-list__link">logout</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default ProfileEdit;
