import React from "react";
import "./ProfileEdit.scss"; 

function ProfileEdit() {
  return (
    <>
      <div className="settings">
        <div className="settings__column">
          <h3 className="settings__column__title">general</h3>
          <ul>
            <li className="list-item">
              <a href="">edit profile</a>
            </li>
            <li className="list-item">
              <a href="">notifications</a>
            </li>
            <li className="list-item">
              <a href="">wishlist</a>
            </li>
          </ul>
        </div>
        <div className="settings__column">
          <h3 className="settings__column__title">legal</h3>
          <ul>
            <li className="list-item">
              <a href="">terms of use</a>
            </li>
            <li className="list-item">
              <a href="">privacy policy</a>
            </li>
          </ul>
        </div>
        <div className="settings__column">
          <h3 className="settings__column__title">personal</h3>
          <ul>
            <li className="list-item">
              <a href="">report a bug</a>
            </li>
            <li className="list-item">
              <a href="">logout</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default ProfileEdit;
