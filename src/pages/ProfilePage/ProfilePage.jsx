import React from "react";
import ProfileData from "../../components/Profile/ProfileData/ProfileData";
import ProfileSettings from "../../components/Profile/ProfileSettings/ProfileSettingsEdit";
import TitleComp from "../../components/TitleComp/TitleComp";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";


function ProfilePage() {
  return (
    <React.Fragment>
      <TitleComp
        leftIcon={faChevronLeft}
        leftIconLabel="go back"
        textState="show"
        leftIconState = "show"
        rightIconState = "hide"
        title="Profile"
        leftPath = "/home"
         ></TitleComp>
      <ProfileData></ProfileData>
      <ProfileSettings></ProfileSettings>
    </React.Fragment>
  );
}
export default ProfilePage;
