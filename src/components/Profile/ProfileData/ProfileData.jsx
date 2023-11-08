import React from "react";
import "./ProfileData.scss";

function ProfileData() {
  return (
    <>
      <div className="profile">
        <div className="profile__image">
          <img
            src="./assets/images/userImage.png"
            alt="profile picture"
            className="profile-picture"
          />
        </div>
        <div className="profile__data">
          <p className="profile__data__name">name</p>
          <p className="profile__data__email">email.gmail.com</p>
        </div>
      </div>
    </>
  );
}
export default ProfileData;
