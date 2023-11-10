import React from "react";
import "./ProfileSettingsEdit.scss"; 

function ProfileSettingsEdit() {
  return (
    <>
      <div className="profile-settings">
        <div className="profile-settings__column">
          <h3 className="profile-settings__column__title">general</h3>
          <ul className="settings-list">
            <li className="settings-list__item">
              <a href="" aria-label="edit profile"className="settings-list__link">edit profile</a>
            </li>
            <li className="settings-list__item">
              <a href="" aria-label="notifications"className="settings-list__link">notifications</a>
            </li>
            <li className="settings-list__item">
              <a href="" aria-label="wishlist" className="settings-list__link">wishlist</a>
            </li>
          </ul>
        </div>
        <div className="profile-settings__column">
          <h3 className="profile-settings__column__title">legal</h3>
          <ul  className="settings-list">
            <li className="settings-list__item">
              <a href="" aria-label="lterms of use" className="settings-list__link">terms of use</a>
            </li>
            <li className="settings-list__item">
              <a href="" aria-label="privacy policy" className="settings-list__link">privacy policy</a>
            </li>
          </ul>
        </div>
        <div className="profile-settings__column">
          <h3 className="profile-settings__column__title">personal</h3>
          <ul  className="settings-list">
            <li className="settings-list__item">
              <a href="" aria-label="report a bug" className="settings-list__link">report a bug</a>
            </li>
            <li className="settings-list__item">
              <a href="" aria-label="logout from the account" className="settings-list__link">logout</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default ProfileSettingsEdit;
